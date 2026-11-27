// Generates public/Nathaniel-Diamond-CV.pdf from the /cv page.
// Usage: start the site (npm run dev or npm start), then: npm run cv:pdf [-- http://localhost:3000]
import { chromium } from "playwright";

const base = process.argv[2] || "http://localhost:3000";
const browser = await chromium.launch();
const page = await browser.newPage();
await page.emulateMedia({ colorScheme: "light" });
await page.goto(`${base}/cv`, { waitUntil: "networkidle" });
await page.pdf({ path: "public/Nathaniel-Diamond-CV.pdf", format: "A4", printBackground: true, preferCSSPageSize: true });
await browser.close();
console.log("Wrote public/Nathaniel-Diamond-CV.pdf");
