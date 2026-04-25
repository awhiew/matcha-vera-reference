# Matcha Vera Reference Viewer

Static swipeable reference viewer for Andrew's Matcha Vera brand review.

## View locally

From this folder:

```bash
python3 -m http.server 3015
```

Then open:

```text
http://127.0.0.1:3015
```

Alternative:

```bash
python3 server.py
```

## Contents

- `index.html` - three-tab reference structure and market notes.
- `styles.css` - responsive tab, feed, gallery and lightbox styles.
- `app.js` - image metadata, tab switching, swipe gestures and lightbox.
- `assets/images/` - copied local source images referenced by relative paths only.

## Verification

Useful checks:

```bash
rg '/Users/|file://' index.html styles.css app.js
python3 -m http.server 3015
```
