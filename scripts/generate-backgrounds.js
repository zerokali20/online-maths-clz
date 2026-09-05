#!/usr/bin/env node
// ─────────────────────────────────────────────────────────────
//  generate-backgrounds.js
//
//  Build-time script: scans /public/backgrounds/ and writes
//  the list of image filenames to /data/backgrounds.json.
//
//  Run automatically via:  npm run prebuild
//  Also runs on:           npm run dev
//
//  HOW TO ADD NEW BACKGROUND IMAGES:
//    1. Drop any .jpg, .jpeg, .png, .webp, or .avif file
//       into /public/backgrounds/
//    2. Run `npm run build` (or `npm run dev`) — the new
//       image will automatically be included in the rotation.
//    3. On Vercel: just push to GitHub — prebuild runs automatically.
// ─────────────────────────────────────────────────────────────

const fs = require("fs");
const path = require("path");

const BACKGROUNDS_DIR = path.join(__dirname, "..", "public", "backgrounds");
const OUTPUT_FILE = path.join(__dirname, "..", "data", "backgrounds.json");

const SUPPORTED_EXTENSIONS = new Set([
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
  ".avif",
]);

function generateBackgroundsList() {
  // Ensure the backgrounds directory exists
  if (!fs.existsSync(BACKGROUNDS_DIR)) {
    fs.mkdirSync(BACKGROUNDS_DIR, { recursive: true });
    console.log(
      "[generate-backgrounds] Created /public/backgrounds/ directory."
    );
  }

  // Read all files in the directory
  const allFiles = fs.readdirSync(BACKGROUNDS_DIR);

  // Filter to only supported image extensions, sort for consistency
  const imageFiles = allFiles
    .filter((file) => {
      const ext = path.extname(file).toLowerCase();
      return SUPPORTED_EXTENSIONS.has(ext);
    })
    .sort();

  if (imageFiles.length === 0) {
    console.warn(
      "[generate-backgrounds] WARNING: No images found in /public/backgrounds/."
    );
    console.warn(
      "[generate-backgrounds] Add .jpg, .png, .webp, or .avif files to that folder."
    );
  } else {
    console.log(
      `[generate-backgrounds] Found ${imageFiles.length} background image(s):`,
      imageFiles
    );
  }

  // Write JSON output
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(imageFiles, null, 2) + "\n");
  console.log(
    `[generate-backgrounds] Written to data/backgrounds.json: ${imageFiles.length} image(s)`
  );
}

generateBackgroundsList();
