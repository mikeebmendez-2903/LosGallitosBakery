const http = require("http");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const { URL } = require("url");

const PORT = process.env.PORT || 3000;
const ROOT = __dirname;
const CONTENT_PATH = path.join(ROOT, "site-content.json");
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "Admin%2903";
const sessions = new Map();
const PRIVATE_STATIC_PATHS = new Set([
  "/site-content.json",
  "/server.js",
  "/package.json",
  "/.gitignore",
  "/start-admin-panel.bat"
]);

const MIME_TYPES = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon"
};

function sendJson(response, statusCode, payload) {
  response.writeHead(statusCode, { "Content-Type": "application/json; charset=utf-8" });
  response.end(JSON.stringify(payload, null, 2));
}

function sendJsonWithHeaders(response, statusCode, payload, headers = {}) {
  response.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    ...headers
  });
  response.end(JSON.stringify(payload, null, 2));
}

function readBody(request) {
  return new Promise((resolve, reject) => {
    let raw = "";

    request.on("data", (chunk) => {
      raw += chunk;
    });

    request.on("end", () => {
      resolve(raw);
    });

    request.on("error", reject);
  });
}

function readContent() {
  return JSON.parse(fs.readFileSync(CONTENT_PATH, "utf8"));
}

function writeContent(content) {
  fs.writeFileSync(CONTENT_PATH, `${JSON.stringify(content, null, 2)}\n`, "utf8");
}

function normalizePath(urlPathname) {
  const cleanPath = urlPathname === "/" ? "/index.html" : urlPathname;
  const resolvedPath = path.normalize(path.join(ROOT, cleanPath));

  if (!resolvedPath.startsWith(ROOT)) {
    return null;
  }

  return resolvedPath;
}

function parseCookies(headerValue = "") {
  return headerValue
    .split(";")
    .map((part) => part.trim())
    .filter(Boolean)
    .reduce((accumulator, part) => {
      const [name, ...rest] = part.split("=");
      accumulator[name] = decodeURIComponent(rest.join("="));
      return accumulator;
    }, {});
}

function getSessionId(request) {
  const cookies = parseCookies(request.headers.cookie);
  return cookies.bg_admin_session;
}

function isAuthenticated(request) {
  const sessionId = getSessionId(request);
  return Boolean(sessionId && sessions.has(sessionId));
}

function redirect(response, location) {
  response.writeHead(302, { Location: location });
  response.end();
}

const server = http.createServer(async (request, response) => {
  const requestUrl = new URL(request.url, `http://${request.headers.host}`);
  const authenticated = isAuthenticated(request);

  if ((requestUrl.pathname === "/admin" || requestUrl.pathname === "/admin.html") && !authenticated) {
    redirect(response, "/admin-login.html");
    return;
  }

  if (requestUrl.pathname === "/admin-login.html" && authenticated) {
    redirect(response, "/admin.html");
    return;
  }

  if (requestUrl.pathname === "/api/login" && request.method === "POST") {
    try {
      const rawBody = await readBody(request);
      const { password } = JSON.parse(rawBody);

      if (password !== ADMIN_PASSWORD) {
        sendJson(response, 401, { error: "Contrasena incorrecta." });
        return;
      }

      const sessionId = crypto.randomBytes(24).toString("hex");
      sessions.set(sessionId, { createdAt: Date.now() });
      sendJsonWithHeaders(
        response,
        200,
        { ok: true },
        {
          "Set-Cookie": `bg_admin_session=${sessionId}; HttpOnly; Path=/; SameSite=Lax`
        }
      );
    } catch (error) {
      sendJson(response, 400, { error: "No se pudo iniciar sesion." });
    }
    return;
  }

  if (requestUrl.pathname === "/api/logout" && request.method === "POST") {
    const sessionId = getSessionId(request);
    if (sessionId) {
      sessions.delete(sessionId);
    }

    sendJsonWithHeaders(
      response,
      200,
      { ok: true },
      {
        "Set-Cookie": "bg_admin_session=; HttpOnly; Path=/; Max-Age=0; SameSite=Lax"
      }
    );
    return;
  }

  if (requestUrl.pathname === "/api/session" && request.method === "GET") {
    sendJson(response, 200, { authenticated: isAuthenticated(request) });
    return;
  }

  if (requestUrl.pathname === "/api/content") {
    if (request.method === "GET") {
      try {
        sendJson(response, 200, readContent());
      } catch (error) {
        sendJson(response, 500, { error: "No se pudo leer el contenido." });
      }
      return;
    }

    if (request.method === "POST") {
      if (!isAuthenticated(request)) {
        sendJson(response, 401, { error: "Sesion no autorizada." });
        return;
      }

      try {
        const rawBody = await readBody(request);
        const nextContent = JSON.parse(rawBody);
        writeContent(nextContent);
        sendJson(response, 200, { ok: true });
      } catch (error) {
        sendJson(response, 400, { error: "No se pudo guardar el contenido." });
      }
      return;
    }

    sendJson(response, 405, { error: "Metodo no permitido." });
    return;
  }

  const filePath = normalizePath(requestUrl.pathname);

  if (!filePath) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  if (PRIVATE_STATIC_PATHS.has(requestUrl.pathname)) {
    response.writeHead(403, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Forbidden");
    return;
  }

  fs.readFile(filePath, (error, content) => {
    if (error) {
      response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      response.end("Archivo no encontrado.");
      return;
    }

    const extname = path.extname(filePath).toLowerCase();
    response.writeHead(200, {
      "Content-Type": MIME_TYPES[extname] || "application/octet-stream"
    });
    response.end(content);
  });
});

server.listen(PORT, () => {
  console.log(`Bakery Gallitos disponible en http://localhost:${PORT}`);
  console.log("Admin password activa. Usa ADMIN_PASSWORD para cambiarla.");
});
