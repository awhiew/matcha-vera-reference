const imageFiles = [
  "matchavera-big-sweep-v2-01-electric-lime-tech.png",
  "matchavera-big-sweep-v2-02-soft-pink-beauty.png",
  "matchavera-big-sweep-v2-03-bold-orange-sunrise.png",
  "matchavera-big-sweep-v2-04-midnight-luxury.png",
  "matchavera-big-sweep-v2-05-playful-pop-candy.png",
  "matchavera-big-sweep-v2-06-minimal-black-white.png",
  "matchavera-big-sweep-v2-07-earthy-organic-apothecary.png",
  "matchavera-big-sweep-v2-08-blue-hydration-beauty.png",
  "matchavera-big-sweep-v2-09-red-fashion-statement.png",
  "matchavera-big-sweep-v2-10-purple-night-focus.png",
  "matchavera-big-sweep-01-ingestible-beauty-clinical.png",
  "matchavera-big-sweep-02-luxury-ritual-refill.png",
  "matchavera-big-sweep-03-transparent-science-future.png",
  "matchavera-big-sweep-04-matcha-cafe-lifestyle.png",
  "matchavera-big-sweep-05-dewy-beauty-community.png",
  "matchavera-big-sweep-06-punchy-social-dtc.png",
  "matchavera-big-sweep-07-premium-active-wellness.png",
  "matchavera-big-sweep-08-high-luxury-skincare.png",
  "matchavera-big-sweep-09-vibrant-functional-fun.png",
  "matchavera-big-sweep-10-japanese-botanical-premium.png",
  "matcha-vera-openai-website-mock.png",
  "matchavera-ad-refstyle-01-glow-focus.png",
  "matchavera-ad-refstyle-02-beauty-energy.png",
  "matchavera-ad-refstyle-03-ingredient-stack.png",
  "matchavera-ad-refstyle-04-gym-beauty.png",
  "matchavera-box-variations-01-premium-clean.png",
  "matchavera-box-variations-03-luxury-ritual-retry.png",
  "matchavera-box-variations-04-sachet-detail.png",
  "matchavera-box-variations-05-box-structure-retry.png",
  "matchavera-box-waterdrop-logo-01.png",
  "matchavera-box-waterdrop-logo-02-options.png",
  "matchavera-colourful-box-sachets.png",
  "matchavera-colourful-website.png",
  "matchavera-instagram-content-tile-system.png",
  "matchavera-instagram-feed-clinical-beauty-grid.png",
  "matchavera-newlogo-consistentbottle-01-beauty-clinical.png",
  "matchavera-newlogo-consistentbottle-02-luxury-ritual.png",
  "matchavera-newlogo-consistentbottle-03-social-dtc.png",
  "matchavera-newlogo-largebottle-01-beauty-clinical.png",
  "matchavera-newlogo-largebottle-02-luxury-ritual.png",
  "matchavera-newlogo-largebottle-03-social-dtc.png",
  "matchavera-newlogo-site-01-soft-beauty-clinical.png",
  "matchavera-newlogo-site-02-luxury-ritual.png",
  "matchavera-newlogo-site-03-clean-science.png",
  "matchavera-newlogo-site-04-cafe-lifestyle.png",
  "matchavera-newlogo-site-05-social-dtc.png",
  "matchavera-newlogo-site-06-active-wellness.png",
  "matchavera-originallogo-site-01-beauty-clinical.png",
  "matchavera-originallogo-site-02-luxury-ritual.png",
  "matchavera-originallogo-site-03-clean-science.png",
  "matchavera-originallogo-site-04-social-dtc.png",
  "matchavera-pastel-box-sachets-new-logo.png",
  "matchavera-pastel-website-new-logo.png",
  "matchavera-site-style-01-beauty-clinical.png",
  "matchavera-site-style-02-luxury-ritual-refill.png",
  "matchavera-site-style-03-traceable-science.png",
  "matchavera-site-style-04-cafe-matcha-lifestyle.png",
  "matchavera-site-style-05-punchy-social-dtc.png",
  "matchavera-site-style-06-athletic-premium.png",
  "matchavera-website-fitness-retry-editorial.png",
  "matchavera-website-fitness-retry-premium-dtc.png",
  "matchavera-website-variation-01-clinical-cream.png",
  "matchavera-website-variation-02-bold-matcha.png",
  "matchavera-website-variation-03-luxury-ritual.png",
  "matchavera-website-vibrant-fitness-01.png",
  "matchavera-website-vibrant-fitness-02.png",
  "matchavera-premium-logo-style-v2-01-pearl-marine-beauty.png",
  "matchavera-premium-logo-style-v2-02-founder-beauty-diary.png",
  "matchavera-premium-logo-style-v2-03-prestige-pharmacy.png",
  "matchavera-premium-logo-style-v2-04-italian-aperitivo-luxe.png",
  "matchavera-premium-logo-style-v2-05-sculptural-minimal.png",
  "matchavera-premium-logo-style-v2-06-soft-medical-aesthetic.png",
  "matchavera-premium-logo-style-v2-07-old-money-tennis-club.png",
  "matchavera-premium-logo-style-v2-08-glass-skin-korean-beauty.png",
  "matchavera-premium-logo-style-v2-09-couture-botanical.png",
  "matchavera-premium-logo-style-v2-10-mineral-spa-luxe.png",
  "matchavera-premium-logo-style-01-modern-serif-beauty.png",
  "matchavera-premium-logo-style-02-lowercase-rhode-minimal.png",
  "matchavera-premium-logo-style-03-parisian-monogram.png",
  "matchavera-premium-logo-style-04-clinical-dermal.png",
  "matchavera-premium-logo-style-05-botanical-apothecary-luxe.png",
  "matchavera-premium-logo-style-06-japanese-quiet-luxury.png",
  "matchavera-premium-logo-style-07-editorial-fashion-beauty.png",
  "matchavera-premium-logo-style-08-soft-script-beauty.png",
  "matchavera-premium-logo-style-09-science-luxury-grid.png",
  "matchavera-premium-logo-style-10-cosmetic-emblem.png"
];

const tabOrder = ["web", "notes", "revenue"];
const reviewStorageKey = "matchaVeraReview:v1";
const reviewFilters = {
  all: () => true,
  unrated: (image) => getReview(image.file).rating === 0,
  rated: (image) => getReview(image.file).rating > 0,
  five: (image) => getReview(image.file).rating === 5,
  fourPlus: (image) => getReview(image.file).rating >= 4,
  threePlus: (image) => getReview(image.file).rating >= 3,
  notes: (image) => getReview(image.file).notes.trim().length > 0
};

const priorityFiles = [
  "matchavera-big-sweep-08-high-luxury-skincare.png",
  "matchavera-big-sweep-10-japanese-botanical-premium.png",
  "matchavera-big-sweep-02-luxury-ritual-refill.png",
  "matchavera-newlogo-site-02-luxury-ritual.png",
  "matchavera-site-style-01-beauty-clinical.png",
  "matchavera-site-style-02-luxury-ritual-refill.png",
  "matchavera-pastel-website-new-logo.png",
  "matchavera-box-variations-01-premium-clean.png",
  "matchavera-pastel-box-sachets-new-logo.png",
  "matchavera-instagram-content-tile-system.png",
  "matchavera-ad-refstyle-02-beauty-energy.png",
  "matchavera-ad-refstyle-04-gym-beauty.png"
];

const takesByFile = {
  "matchavera-big-sweep-08-high-luxury-skincare.png": "Best territory anchor: makes the drink feel like premium skincare.",
  "matchavera-big-sweep-10-japanese-botanical-premium.png": "Best provenance route: matcha, botanical calm and quiet luxury.",
  "matchavera-big-sweep-02-luxury-ritual-refill.png": "Best retention story: ritual, refill and giftable packaging.",
  "matchavera-big-sweep-07-premium-active-wellness.png": "Good social layer: Pilates, performance and glow routine.",
  "matchavera-big-sweep-06-punchy-social-dtc.png": "Best for fast ads: useful for conversion, not master brand.",
  "matchavera-big-sweep-04-matcha-cafe-lifestyle.png": "Warm and approachable, but too cafe-led to carry premium price perception alone.",
  "matchavera-big-sweep-v2-05-playful-pop-candy.png": "Memorable, but risks cheapening the beauty and formula story.",
  "matchavera-big-sweep-v2-07-earthy-organic-apothecary.png": "Clean wellness cues are familiar; use only if sharpened with a more ownable matcha point.",
  "matchavera-site-style-01-beauty-clinical.png": "Strong web route: beauty-first with enough proof architecture.",
  "matchavera-site-style-02-luxury-ritual-refill.png": "Best for habit and refill storytelling.",
  "matchavera-site-style-03-traceable-science.png": "Useful proof route if softened with more beauty desire.",
  "matchavera-site-style-04-cafe-matcha-lifestyle.png": "Approachable lifestyle reference, but keep it secondary to premium beauty.",
  "matchavera-site-style-05-punchy-social-dtc.png": "Good for fast conversion tests and launch creative energy.",
  "matchavera-site-style-06-athletic-premium.png": "Good active wellness bridge for gym bag and Pilates moments.",
  "matchavera-ad-refstyle-02-beauty-energy.png": "Best social promise: quick beauty-energy cue.",
  "matchavera-ad-refstyle-04-gym-beauty.png": "Best active angle: gym bag, Pilates and glow routine.",
  "matchavera-ad-refstyle-03-ingredient-stack.png": "Best proof ad: formula value in a fast visual.",
  "matchavera-box-variations-01-premium-clean.png": "Best packaging base: clean, premium and commercially usable.",
  "matchavera-box-variations-03-luxury-ritual-retry.png": "Most ritual-led packaging reference.",
  "matchavera-instagram-content-tile-system.png": "Best content system: repeatable tiles for launch cadence.",
  "matchavera-instagram-feed-clinical-beauty-grid.png": "Polished grid reference; add warmer founder or routine content.",
  "matchavera-premium-logo-style-v2-10-mineral-spa-luxe.png": "Best commercial premium: polished, beauty-coded and easy to imagine as a full system.",
  "matchavera-premium-logo-style-06-japanese-quiet-luxury.png": "Most ownable: refined matcha cues without drifting into cafe territory.",
  "matchavera-premium-logo-style-v2-05-sculptural-minimal.png": "Most luxury: strongest editorial shelf presence.",
  "matchavera-premium-logo-style-v2-02-founder-beauty-diary.png": "Best for social: founder-led, intimate and easy to serialize.",
  "matchavera-premium-logo-style-01-modern-serif-beauty.png": "Strong commercial identity: premium beauty with broad usability.",
  "matchavera-premium-logo-style-03-parisian-monogram.png": "Luxury signal for gifting, embossing and shelf cues.",
  "matchavera-premium-logo-style-v2-09-couture-botanical.png": "Distinct premium reference: dramatic, botanical and less samey.",
  "matchavera-premium-logo-style-v2-03-prestige-pharmacy.png": "Credible, but colder than the desired beauty ritual.",
  "matchavera-premium-logo-style-04-clinical-dermal.png": "Useful proof reference, not the lead feeling."
};

function titleCase(input) {
  return input
    .replace(/^matcha-vera-/, "")
    .replace(/^matchavera-/, "")
    .replace(/\.png$/, "")
    .replace(/-/g, " ")
    .replace(/\bv2\b/i, "V2")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function isLogoOnly(file) {
  return (
    file.includes("premium-logo-style") ||
    file.includes("logo-options") ||
    file.includes("pastel-new-logo-board") ||
    file.includes("box-waterdrop-logo")
  );
}

function getRole(file) {
  if (isLogoOnly(file)) return "Logo / Identity";
  if (file.includes("ad-refstyle")) return "Ad / Social";
  if (file.includes("instagram")) return "Content";
  if (file.includes("box") || file.includes("sachet") || file.includes("bottle")) return "Packaging / Product";
  if (file.includes("website") || file.includes("site-")) return "Website";
  if (file.includes("big-sweep")) return "Visual Territory";
  if (file.includes("colour")) return "Colour System";
  if (file.includes("proof")) return "Formula Proof";
  return "Reference";
}

function getTake(file) {
  if (takesByFile[file]) return takesByFile[file];
  if (isLogoOnly(file)) return "Identity reference: compare for premium cues, distinctiveness, shelf use and flexibility across packs.";
  if (file.includes("big-sweep")) return "Territory scan: use as context for choosing the core beauty, provenance or social lane.";
  if (file.includes("website") || file.includes("site-")) return "Digital reference: evaluate for first-click desire, proof clarity and premium feel.";
  if (file.includes("instagram") || file.includes("ad-refstyle")) return "Launch creative reference: useful for content rhythm, hooks and paid social tests.";
  if (file.includes("box") || file.includes("sachet") || file.includes("bottle")) return "Product reference: compare packaging hierarchy, ritual cues and shelf presence.";
  if (file.includes("colour")) return "Palette reference: use to keep the system premium without becoming generic wellness.";
  if (file.includes("proof")) return "Proof reference: useful for explaining active dosing without turning the brand clinical.";
  return "Reference board for comparing Matcha Vera's premium beauty ritual direction.";
}

function getSortScore(file) {
  const priorityIndex = priorityFiles.indexOf(file);
  if (priorityIndex !== -1) return priorityIndex;
  if (file.includes("premium") || file.includes("luxury") || file.includes("luxe")) return 30;
  if (file.includes("website") || file.includes("site-")) return 40;
  if (file.includes("box") || file.includes("sachet") || file.includes("bottle")) return 50;
  if (file.includes("instagram") || file.includes("ad-refstyle")) return 60;
  if (file.includes("cafe") || file.includes("candy") || file.includes("pharmacy")) return 85;
  return 70;
}

const images = imageFiles.map((file) => ({
  file,
  src: `assets/images/${file}`,
  title: titleCase(file),
  role: getRole(file),
  take: getTake(file),
  score: getSortScore(file)
}));

const orderedImages = images
  .sort((a, b) => a.score - b.score || imageFiles.indexOf(a.file) - imageFiles.indexOf(b.file));

const tabButtons = [...document.querySelectorAll(".tab-button")];
const tabPanels = [...document.querySelectorAll(".tab-panel")];
const appShell = document.querySelector(".app-shell");
const webFeed = document.querySelector("#web-feed");
const filterButtons = [...document.querySelectorAll("[data-filter]")];
const reviewSort = document.querySelector("#review-sort");
const reviewSummary = document.querySelector("#review-summary");
const exportReview = document.querySelector("#export-review");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = lightbox.querySelector("img");
const lightboxCaption = lightbox.querySelector(".lightbox-caption");
const lightboxClose = lightbox.querySelector(".lightbox-close");

let activeTab = "web";
let activeFilter = "all";
let activeSort = "original";
let reviewState = loadReviewState();
let touchStartX = 0;
let touchStartY = 0;

function loadReviewState() {
  try {
    const saved = JSON.parse(localStorage.getItem(reviewStorageKey) || "{}");
    return saved && typeof saved === "object" && !Array.isArray(saved) ? saved : {};
  } catch (error) {
    return {};
  }
}

function saveReviewState() {
  try {
    localStorage.setItem(reviewStorageKey, JSON.stringify(reviewState));
  } catch (error) {
    // Keep the UI usable even if storage is blocked.
  }
}

function getReview(file) {
  const saved = reviewState[file] || {};
  return {
    rating: Number.isInteger(saved.rating) ? saved.rating : 0,
    notes: typeof saved.notes === "string" ? saved.notes : ""
  };
}

function setReview(file, updates) {
  const next = { ...getReview(file), ...updates };
  reviewState[file] = {
    rating: Math.max(0, Math.min(5, Number(next.rating) || 0)),
    notes: next.notes || ""
  };
  saveReviewState();
  updateReviewSummary(getVisibleImages());
}

function clearReview(file) {
  delete reviewState[file];
  saveReviewState();
  renderImages();
}

function getVisibleImages() {
  const filter = reviewFilters[activeFilter] || reviewFilters.all;
  const visible = orderedImages.filter(filter);

  if (activeSort === "highest") {
    return [...visible].sort((a, b) => getReview(b.file).rating - getReview(a.file).rating || orderedImages.indexOf(a) - orderedImages.indexOf(b));
  }

  if (activeSort === "lowest") {
    return [...visible].sort((a, b) => getReview(a.file).rating - getReview(b.file).rating || orderedImages.indexOf(a) - orderedImages.indexOf(b));
  }

  return visible;
}

function updateReviewSummary(visibleImages) {
  const rated = orderedImages.filter((image) => getReview(image.file).rating > 0);
  const average = rated.length
    ? (rated.reduce((sum, image) => sum + getReview(image.file).rating, 0) / rated.length).toFixed(1)
    : "0.0";

  reviewSummary.textContent = `${visibleImages.length} visible / ${rated.length} rated / ${average} avg`;
}

function createRatingControl(image) {
  const review = getReview(image.file);
  const fieldset = document.createElement("fieldset");
  fieldset.className = "rating-control";

  const legend = document.createElement("legend");
  legend.textContent = "Rating";

  const stars = document.createElement("div");
  stars.className = "star-buttons";

  for (let rating = 1; rating <= 5; rating += 1) {
    const button = document.createElement("button");
    button.className = "star-button";
    button.type = "button";
    button.textContent = rating <= review.rating ? "★" : "☆";
    button.setAttribute("aria-label", `${rating} star${rating === 1 ? "" : "s"} for ${image.title}`);
    button.setAttribute("aria-pressed", String(rating === review.rating));
    button.addEventListener("click", () => {
      setReview(image.file, { rating });
      renderImages();
    });
    stars.append(button);
  }

  fieldset.append(legend, stars);
  return fieldset;
}

function createReviewPanel(image) {
  const review = getReview(image.file);
  const panel = document.createElement("div");
  panel.className = "card-review";

  const actions = document.createElement("div");
  actions.className = "card-actions";

  const download = document.createElement("a");
  download.className = "download-link";
  download.href = image.src;
  download.download = image.file;
  download.textContent = "Download PNG";

  const clear = document.createElement("button");
  clear.className = "clear-review";
  clear.type = "button";
  clear.textContent = "Clear";
  clear.disabled = review.rating === 0 && !review.notes;
  clear.addEventListener("click", () => clearReview(image.file));

  actions.append(download, clear);

  const label = document.createElement("label");
  label.className = "notes-label";
  label.textContent = "Reviewer notes";

  const textarea = document.createElement("textarea");
  textarea.className = "review-notes";
  textarea.rows = 3;
  textarea.value = review.notes;
  textarea.placeholder = "Add notes for Andrew...";
  textarea.setAttribute("aria-label", `Reviewer notes for ${image.title}`);
  textarea.addEventListener("input", () => {
    setReview(image.file, { notes: textarea.value });
    clear.disabled = getReview(image.file).rating === 0 && !textarea.value;
  });

  panel.append(actions, createRatingControl(image), label, textarea);
  return panel;
}

function createReferenceItem(image, index) {
  const article = document.createElement("article");
  article.className = "reference-item";

  const imageButton = document.createElement("button");
  imageButton.className = "reference-image-button";
  imageButton.type = "button";
  imageButton.setAttribute("aria-label", `Preview ${image.title}`);

  const img = document.createElement("img");
  img.src = image.src;
  img.alt = image.title;
  img.loading = index < 3 ? "eager" : "lazy";
  img.decoding = "async";

  const body = document.createElement("div");
  body.className = "reference-body";

  const meta = document.createElement("span");
  meta.className = "item-meta";
  meta.textContent = `${String(index + 1).padStart(2, "0")} / ${image.role}`;

  const title = document.createElement("h3");
  title.textContent = image.title;

  const description = document.createElement("p");
  description.textContent = image.take;

  imageButton.append(img);
  body.append(meta, title, description, createReviewPanel(image));
  article.append(imageButton, body);
  imageButton.addEventListener("click", () => openLightbox(image));
  return article;
}

function renderImages() {
  const visibleImages = getVisibleImages();
  webFeed.replaceChildren(...visibleImages.map(createReferenceItem));
  updateReviewSummary(visibleImages);
}

function setActiveTab(tab) {
  if (!tabOrder.includes(tab)) return;
  activeTab = tab;

  tabButtons.forEach((button) => {
    const isActive = button.dataset.tab === tab;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });

  tabPanels.forEach((panel) => {
    panel.classList.toggle("active", panel.dataset.panel === tab);
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function shiftTab(direction) {
  const currentIndex = tabOrder.indexOf(activeTab);
  const nextIndex = Math.max(0, Math.min(tabOrder.length - 1, currentIndex + direction));
  setActiveTab(tabOrder[nextIndex]);
}

function openLightbox(image) {
  lightboxImage.src = image.src;
  lightboxImage.alt = image.title;
  lightboxCaption.textContent = `${image.title} - ${image.take}`;

  if (typeof lightbox.showModal === "function") {
    lightbox.showModal();
  }
}

function exportReviewData() {
  const reviewed = orderedImages
    .map((image) => ({ file: image.file, title: image.title, ...getReview(image.file) }))
    .filter((item) => item.rating > 0 || item.notes.trim());
  const payload = {
    exportedAt: new Date().toISOString(),
    storageKey: reviewStorageKey,
    totalImages: orderedImages.length,
    reviewed
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `matcha-vera-review-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

tabButtons.forEach((button) => {
  button.addEventListener("click", () => setActiveTab(button.dataset.tab));
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle("active", item === button));
    renderImages();
  });
});

reviewSort.addEventListener("change", () => {
  activeSort = reviewSort.value;
  renderImages();
});

exportReview.addEventListener("click", exportReviewData);

appShell.addEventListener(
  "touchstart",
  (event) => {
    if (event.touches.length !== 1) return;
    touchStartX = event.touches[0].clientX;
    touchStartY = event.touches[0].clientY;
  },
  { passive: true }
);

appShell.addEventListener(
  "touchend",
  (event) => {
    if (!touchStartX || !event.changedTouches.length) return;
    const deltaX = event.changedTouches[0].clientX - touchStartX;
    const deltaY = event.changedTouches[0].clientY - touchStartY;
    touchStartX = 0;
    touchStartY = 0;

    if (Math.abs(deltaX) < 70 || Math.abs(deltaX) < Math.abs(deltaY) * 1.35) return;
    shiftTab(deltaX < 0 ? 1 : -1);
  },
  { passive: true }
);

lightboxClose.addEventListener("click", () => lightbox.close());
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) lightbox.close();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && lightbox.open) lightbox.close();
  if (event.key === "ArrowRight") shiftTab(1);
  if (event.key === "ArrowLeft") shiftTab(-1);
});

renderImages();
