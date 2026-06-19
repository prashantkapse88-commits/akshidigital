import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { Readable } from "node:stream";
import { fileURLToPath } from "node:url";

import app from "./dist/server/server.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const clientRoot = path.join(__dirname, "dist", "client");
const port = Number(process.env.PORT || 3000);

const mimeTypes = new Map([
  [".css", "text/css; charset=utf-8"],
  [".js", "text/javascript; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".png", "image/png"],
  [".jpg", "image/jpeg"],
  [".jpeg", "image/jpeg"],
  [".svg", "image/svg+xml"],
  [".txt", "text/plain; charset=utf-8"],
  [".xml", "application/xml; charset=utf-8"],
  [".webp", "image/webp"],
  [".ico", "image/x-icon"],
]);

function sendStaticFile(req, res) {
  const url = new URL(req.url || "/", "http://localhost");
  const pathname = decodeURIComponent(url.pathname);
  if (pathname !== "/robots.txt" && !pathname.startsWith("/assets/")) return false;

  const filePath = path.normalize(path.join(clientRoot, pathname));
  if (!filePath.startsWith(clientRoot) || !fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
    return false;
  }

  const contentType = mimeTypes.get(path.extname(filePath).toLowerCase()) || "application/octet-stream";
  res.writeHead(200, {
    "content-type": contentType,
    "cache-control": pathname.startsWith("/assets/")
      ? "public, max-age=31536000, immutable"
      : "public, max-age=300",
  });
  fs.createReadStream(filePath).pipe(res);
  return true;
}

async function sendResponse(webResponse, res) {
  const headers = Object.fromEntries(webResponse.headers.entries());
  res.writeHead(webResponse.status, headers);

  if (!webResponse.body) {
    res.end();
    return;
  }

  Readable.fromWeb(webResponse.body).pipe(res);
}

const server = http.createServer(async (req, res) => {
  try {
    if (sendStaticFile(req, res)) return;

    const protocol = req.headers["x-forwarded-proto"] || "https";
    const host = req.headers.host || "akshidigital.com";
    const requestUrl = `${protocol}://${host}${req.url || "/"}`;
    const hasBody = req.method !== "GET" && req.method !== "HEAD";
    const request = new Request(requestUrl, {
      method: req.method,
      headers: req.headers,
      body: hasBody ? req : undefined,
      duplex: hasBody ? "half" : undefined,
    });

    await sendResponse(await app.fetch(request, {}, {}), res);
  } catch (error) {
    console.error(error);
    res.writeHead(500, { "content-type": "text/plain; charset=utf-8" });
    res.end("Internal Server Error");
  }
});

server.listen(port, () => {
  console.log(`Akshi Digital server listening on port ${port}`);
});
