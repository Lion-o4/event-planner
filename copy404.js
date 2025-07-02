// copy404.js
const fs = require("fs");
const path = require("path");

const distPath = path.join(__dirname, "dist", "event-planner", "browser");
const indexPath = path.join(distPath, "index.html");
const notFoundPath = path.join(distPath, "404.html");

if (fs.existsSync(indexPath)) {
  fs.copyFileSync(indexPath, notFoundPath);
  console.log("✅ 404.html created successfully in /browser");
} else {
  console.error("❌ index.html not found at", indexPath);
  process.exit(1);
}
