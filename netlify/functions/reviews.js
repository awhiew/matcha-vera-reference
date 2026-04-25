const { randomUUID } = require("node:crypto");

const storeName = "matcha-vera-reviews";
const reviewKey = "shared-board";
const maxNotesLength = 5000;

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Max-Age": "86400"
};

function jsonResponse(statusCode, payload) {
  return {
    statusCode,
    headers: {
      ...corsHeaders,
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store"
    },
    body: JSON.stringify(payload)
  };
}

function normalizeRating(value) {
  const rating = Number(value);
  if (!Number.isFinite(rating)) return 0;
  return Math.max(0, Math.min(5, Math.round(rating)));
}

function normalizeNotes(value) {
  if (typeof value !== "string") return "";
  return value.slice(0, maxNotesLength);
}

function isValidFile(file) {
  return typeof file === "string" && /^[a-z0-9][a-z0-9._-]*\.png$/i.test(file);
}

function normalizeReview(value, updatedAt = new Date().toISOString()) {
  return {
    rating: normalizeRating(value && value.rating),
    notes: normalizeNotes(value && value.notes),
    updatedAt
  };
}

function normalizeReviewMap(value, updatedAt = new Date().toISOString()) {
  if (!value || typeof value !== "object" || Array.isArray(value)) return {};

  return Object.fromEntries(
    Object.entries(value)
      .filter(([file]) => isValidFile(file))
      .map(([file, review]) => {
        const reviewUpdatedAt = review && typeof review.updatedAt === "string" && !Number.isNaN(Date.parse(review.updatedAt))
          ? review.updatedAt
          : updatedAt;
        return [file, normalizeReview(review, reviewUpdatedAt)];
      })
  );
}

async function getReviewStore(event) {
  const { connectLambda, getStore } = await import("@netlify/blobs");
  if (event && event.blobs) {
    connectLambda(event);
  }
  return getStore(storeName);
}

async function readReviewDocument(store) {
  const saved = await store.get(reviewKey, { type: "json" });
  if (!saved || typeof saved !== "object") {
    return { id: randomUUID(), reviews: {}, updatedAt: null };
  }

  return {
    id: typeof saved.id === "string" ? saved.id : randomUUID(),
    reviews: normalizeReviewMap(saved.reviews || {}),
    updatedAt: typeof saved.updatedAt === "string" ? saved.updatedAt : null
  };
}

async function writeReviewDocument(store, document) {
  if (typeof store.setJSON === "function") {
    await store.setJSON(reviewKey, document);
    return;
  }

  await store.set(reviewKey, JSON.stringify(document), {
    metadata: { contentType: "application/json" }
  });
}

exports.handler = async function handler(event) {
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers: corsHeaders, body: "" };
  }

  if (!["GET", "POST"].includes(event.httpMethod)) {
    return jsonResponse(405, { ok: false, error: "Method not allowed" });
  }

  try {
    const store = await getReviewStore(event);
    const document = await readReviewDocument(store);

    if (event.httpMethod === "GET") {
      return jsonResponse(200, {
        ok: true,
        reviews: document.reviews,
        updatedAt: document.updatedAt
      });
    }

    let body = {};
    try {
      body = event.body ? JSON.parse(event.body) : {};
    } catch (error) {
      return jsonResponse(400, { ok: false, error: "Invalid JSON body" });
    }

    const updatedAt = new Date().toISOString();

    if (body.reviews && typeof body.reviews === "object" && !Array.isArray(body.reviews)) {
      document.reviews = {
        ...document.reviews,
        ...normalizeReviewMap(body.reviews, updatedAt)
      };
    } else if (isValidFile(body.file)) {
      const review = normalizeReview(body, updatedAt);
      if (review.rating === 0 && !review.notes.trim()) {
        delete document.reviews[body.file];
      } else {
        document.reviews[body.file] = review;
      }
    } else {
      return jsonResponse(400, { ok: false, error: "Provide either { file, rating, notes } or { reviews }" });
    }

    document.updatedAt = updatedAt;
    await writeReviewDocument(store, document);

    return jsonResponse(200, {
      ok: true,
      reviews: document.reviews,
      updatedAt: document.updatedAt
    });
  } catch (error) {
    console.error("Review storage unavailable", error);
    return jsonResponse(500, {
      ok: false,
      error: "Review storage unavailable"
    });
  }
};
