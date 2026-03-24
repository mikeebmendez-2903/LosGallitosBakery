const loginForm = document.querySelector("[data-login-form]");
const loginPassword = document.querySelector("[data-login-password]");
const loginStatus = document.querySelector("[data-login-status]");

function setLoginStatus(message) {
  if (loginStatus) {
    loginStatus.textContent = message;
  }
}

async function checkSession() {
  const response = await fetch("/api/session", { cache: "no-store" });
  const payload = await response.json();
  return payload.authenticated;
}

async function login(password) {
  const response = await fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ password })
  });

  if (!response.ok) {
    throw new Error("login_failed");
  }
}

if (loginForm) {
  loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    try {
      await login(loginPassword.value);
      window.location.href = "/admin.html";
    } catch (error) {
      setLoginStatus("Contrasena incorrecta o servidor no disponible.");
    }
  });
}

checkSession()
  .then((authenticated) => {
    if (authenticated) {
      window.location.href = "/admin.html";
    }
  })
  .catch(() => {
    setLoginStatus("No se pudo conectar con el servidor.");
  });
