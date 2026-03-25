const tabs = document.querySelectorAll("[data-tab-target]");
const panels = document.querySelectorAll("[data-tab-panel]");
const controls = document.querySelectorAll("[data-control]");
const listControls = document.querySelectorAll("[data-list-control]");
const imageUploads = document.querySelectorAll("[data-image-upload]");
const imagePreviews = document.querySelectorAll("[data-image-preview]");
const cardFieldControls = document.querySelectorAll("[data-card-field]");
const cardUploads = document.querySelectorAll("[data-card-upload]");
const cardPreviews = document.querySelectorAll("[data-card-preview]");
const menuTitleFields = document.querySelectorAll("[data-menu-title]");
const menuItemsFields = document.querySelectorAll("[data-menu-items]");
const saveButton = document.querySelector('[data-action="save"]');
const resetButton = document.querySelector('[data-action="reset"]');
const exportButton = document.querySelector('[data-action="export"]');
const logoutButton = document.querySelector('[data-action="logout"]');
const refreshButton = document.querySelector('[data-action="refresh"]');
const previewFrame = document.querySelector(".preview-frame");
const statusText = document.querySelector("[data-status]");
const saveIndicator = document.querySelector("[data-save-indicator]");
const saveIndicatorLabel = document.querySelector("[data-save-indicator-label]");

const defaultContent = {
  brandName: "Los Gallitos Bakery",
  brandMeta: "Pan dulce mexicano - Cafe - Champurrado",
  logoImage: "",
  faviconImage: "./assets/favicon.jpg",
  heroBadge: "",
  heroTitle: "Pan dulce que entra por los ojos y enamora al primer bocado.",
  heroBody: "Pan dulce mexicano con imagen cuidada, sabor de casa y presentacion mas fina.",
  heroPrimaryText: "Ordenar ahora",
  heroPrimaryHref: "#contacto",
  heroSecondaryText: "Ver menu",
  heroSecondaryHref: "#menu",
  heroImagePrimary: "./assets/heroimageprimary.png",
  heroImageSecondary: "./assets/heroimagesecondary.png",
  hoursLabel: "Horario",
  hoursTitle: "Lunes a Domingo",
  hoursMeta: "6:00 AM - 9:00 PM",
  hoursNote: "Fresco cada dia.",
  menuEyebrow: "Menu destacado",
  menuHeading: "Selecciones principales",
  menuNote: "",
  menuBoxTitle: "Mas del menu",
  storyEyebrow: "Nosotros",
  storyTitle: "Tradicion mexicana con presentacion premium",
  storyBody: "",
  galleryEyebrow: "",
  galleryHeading: "Galeria",
  contactEyebrow: "",
  contactTitle: "Listos para tomar tu pedido",
  contactBody: "",
  phoneLabel: "Telefono",
  phoneText: "(440) 000-0000",
  whatsappPhone: "",
  locationLabel: "Direccion",
  locationText: "7614 - Tu ubicacion",
  mapUrl: "",
  socialTitle: "Siguenos",
  instagramUrl: "",
  facebookUrl: "",
  tiktokUrl: "",
  deliveryLabel: "Delivery",
  deliveryHeading: "Ordena con DoorDash",
  deliveryUrl: "",
  deliveryLogo: "./assets/doordash-logo.svg",
  formTitle: "Envianos un mensaje",
  formButtonText: "Enviar mensaje",
  formNamePlaceholder: "Nombre",
  formContactPlaceholder: "Telefono o email",
  formMessagePlaceholder: "Que te gustaria ordenar?",
  highlights: [
    "Pan dulce fresco cada manana",
    "Recetas tradicionales",
    "Encargos y pedidos faciles"
  ],
  storyPoints: [
    "Horneado fresco",
    "Imagen cuidada",
    "Sabor tradicional",
    "Atencion directa"
  ],
  menuChips: [
    "Conchas",
    "Cuernitos",
    "Orejitas",
    "Pan relleno",
    "Champurrado",
    "Cafe"
  ],
  featuredCards: [
    {
      title: "Concha Mexicana",
      description: "Suave y recien horneada.",
      image: "./assets/featuredcards-0-image.png",
      linkText: "Ver producto",
      href: "#contacto"
    },
    {
      title: "Orejitas",
      description: "Crujientes y ligeras.",
      image: "./assets/featuredcards-1-image.png",
      linkText: "Ver producto",
      href: "#contacto"
    },
    {
      title: "Champurrado",
      description: "Calientito para acompanar tu pan.",
      image: "./assets/featuredcards-2-image.png",
      linkText: "Ver producto",
      href: "#contacto"
    }
  ],
  galleryPhotos: [
    { src: "./assets/galleryphotos-0-src.png", alt: "Foto de pan dulce 1" },
    { src: "./assets/galleryphotos-1-src.png", alt: "Foto de pan dulce 2" },
    { src: "./assets/galleryphotos-2-src.png", alt: "Foto de pan dulce 3" }
  ],
  menuSections: [
    {
      title: "Pan dulce",
      items: [
        { name: "Concha Mexicana", price: "$1.25" },
        { name: "Yoyo", price: "$2.00" },
        { name: "Mil Hojas", price: "$5.99" }
      ]
    },
    {
      title: "Antojitos",
      items: [
        { name: "Torta de Atun", price: "$8.00" },
        { name: "Torta de Chavo", price: "$8.00" },
        { name: "Chuchitos", price: "$3.50" }
      ]
    },
    {
      title: "Bebidas",
      items: [
        { name: "Champurrado", price: "$3.50" },
        { name: "Cafe", price: "$2.00" },
        { name: "Jarritos", price: "$3.00" }
      ]
    },
    {
      title: "Favoritos",
      items: [
        { name: "Cuernitos", price: "$1.25" },
        { name: "Orejitas", price: "$1.25" },
        { name: "Pan Rojo", price: "$1.25" }
      ]
    }
  ],
  products: [
    {
      title: "Concha Tricolor",
      description: "Nuestra pieza mas reconocible.",
      price: "$1.25",
      image: "./assets/products-0-image.png"
    },
    {
      title: "Mil Hojas",
      description: "Un favorito de vitrina.",
      price: "$5.99",
      image: "./assets/products-1-image.png"
    },
    {
      title: "Champurrado + pan dulce",
      description: "Perfecto para desayuno o tarde.",
      price: "Desde $3.50",
      image: "./assets/products-2-image.png"
    }
  ]
};

let currentContentState = normalizeContent(defaultContent);
let hasUnsavedChanges = false;

function normalizeContent(content = {}) {
  const merged = {
    ...defaultContent,
    ...content
  };

  merged.highlights = Array.isArray(content.highlights)
    ? content.highlights.filter(Boolean)
    : [...defaultContent.highlights];
  merged.storyPoints = Array.isArray(content.storyPoints)
    ? content.storyPoints.filter(Boolean)
    : [...defaultContent.storyPoints];
  merged.menuChips = Array.isArray(content.menuChips)
    ? content.menuChips.filter(Boolean)
    : [...defaultContent.menuChips];
  merged.featuredCards = Array.from({ length: 3 }, (_, index) => ({
    ...defaultContent.featuredCards[index],
    ...(content.featuredCards?.[index] || {})
  }));
  merged.galleryPhotos = Array.from({ length: 3 }, (_, index) => ({
    ...defaultContent.galleryPhotos[index],
    ...(content.galleryPhotos?.[index] || {})
  }));
  merged.menuSections = Array.from({ length: 4 }, (_, index) => ({
    ...defaultContent.menuSections[index],
    ...(content.menuSections?.[index] || {}),
    items: (content.menuSections?.[index]?.items || defaultContent.menuSections[index].items).map((item) => ({
      name: item.name || "",
      price: item.price || ""
    }))
  }));
  merged.products = Array.from({ length: 3 }, (_, index) => ({
    ...defaultContent.products[index],
    ...(content.products?.[index] || {})
  }));

  return merged;
}

function setStatus(message, tone = "idle") {
  if (statusText) {
    statusText.textContent = message;
    statusText.classList.remove("is-idle", "is-dirty", "is-saving", "is-success", "is-error");
    statusText.classList.add(`is-${tone}`);
  }

  if (saveIndicator && saveIndicatorLabel) {
    saveIndicator.classList.remove("is-idle", "is-dirty", "is-saving", "is-success", "is-error");
    saveIndicator.classList.add(`is-${tone}`);

    const labels = {
      idle: "Sin cambios",
      dirty: "Cambios pendientes",
      saving: "Guardando",
      success: "Guardado",
      error: "Error"
    };

    saveIndicatorLabel.textContent = labels[tone] || "Sin cambios";
  }
}

function markDirty(message = "Tienes cambios sin guardar.") {
  hasUnsavedChanges = true;
  setStatus(message, "dirty");
}

function markClean(message = "Cambios guardados en site-content.json.") {
  hasUnsavedChanges = false;
  setStatus(message, "success");
}

function refreshPreview() {
  if (previewFrame) {
    previewFrame.src = `./index.html?ts=${Date.now()}`;
  }
}

function setActiveTab(target) {
  tabs.forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.tabTarget === target);
  });

  panels.forEach((panel) => {
    panel.classList.toggle("active", panel.dataset.tabPanel === target);
  });
}

function serializeList(items) {
  return (items || []).join("\n");
}

function parseList(value) {
  return value
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);
}

function serializeMenuItems(items) {
  return (items || [])
    .map((item) => `${item.name || ""} | ${item.price || ""}`.trim())
    .join("\n");
}

function parseMenuItems(value) {
  return value
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const [namePart, pricePart = ""] = line.split("|");
      return {
        name: namePart.trim(),
        price: pricePart.trim()
      };
    });
}

function syncControls(config) {
  controls.forEach((control) => {
    const key = control.dataset.control;
    control.value = config[key] ?? "";
  });

  listControls.forEach((control) => {
    const key = control.dataset.listControl;
    control.value = serializeList(config[key]);
  });

  imagePreviews.forEach((preview) => {
    const key = preview.dataset.imagePreview;
    preview.src = config[key] || "";
  });

  cardFieldControls.forEach((control) => {
    const collection = control.dataset.cardField;
    const index = Number(control.dataset.cardIndex);
    const field = control.dataset.field;
    control.value = config[collection]?.[index]?.[field] ?? "";
  });

  cardPreviews.forEach((preview) => {
    const collection = preview.dataset.cardPreview;
    const index = Number(preview.dataset.cardIndex);
    const source = config[collection]?.[index]?.image || config[collection]?.[index]?.src || "";
    preview.src = source;
  });

  menuTitleFields.forEach((field) => {
    const index = Number(field.dataset.menuTitle);
    field.value = config.menuSections[index]?.title || "";
  });

  menuItemsFields.forEach((field) => {
    const index = Number(field.dataset.menuItems);
    field.value = serializeMenuItems(config.menuSections[index]?.items || []);
  });
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

async function checkSession() {
  const response = await fetch("/api/session", { cache: "no-store" });
  const payload = await response.json();
  return payload.authenticated;
}

async function logout() {
  await fetch("/api/logout", { method: "POST" });
}

async function openPublishScript() {
  const response = await fetch("/api/open-publish", { method: "POST" });

  if (!response.ok) {
    throw new Error("open_publish_failed");
  }
}

async function loadContent() {
  const response = await fetch("/api/content", { cache: "no-store" });
  if (!response.ok) {
    throw new Error("content_failed");
  }

  const payload = await response.json();
  return normalizeContent(payload);
}

async function saveContent(config) {
  const response = await fetch("/api/content", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(config)
  });

  if (!response.ok) {
    throw new Error("save_failed");
  }
}

function downloadJson(content) {
  const blob = new Blob([JSON.stringify(content, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "site-content.json";
  link.click();
  URL.revokeObjectURL(url);
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    setActiveTab(tab.dataset.tabTarget);
  });
});

controls.forEach((control) => {
  control.addEventListener("input", (event) => {
    currentContentState[event.target.dataset.control] = event.target.value;
    markDirty();
  });
});

listControls.forEach((control) => {
  control.addEventListener("input", (event) => {
    currentContentState[event.target.dataset.listControl] = parseList(event.target.value);
    markDirty();
  });
});

imageUploads.forEach((control) => {
  control.addEventListener("change", async (event) => {
    const [file] = event.target.files || [];
    if (!file) {
      return;
    }

    const key = event.target.dataset.imageUpload;
    currentContentState[key] = await readFileAsDataUrl(file);
    syncControls(currentContentState);
    markDirty("Imagen cargada. Falta guardar.");
  });
});

cardFieldControls.forEach((control) => {
  control.addEventListener("input", (event) => {
    const collection = event.target.dataset.cardField;
    const index = Number(event.target.dataset.cardIndex);
    const field = event.target.dataset.field;
    currentContentState[collection][index][field] = event.target.value;
    markDirty();
  });
});

menuTitleFields.forEach((control) => {
  control.addEventListener("input", (event) => {
    const index = Number(event.target.dataset.menuTitle);
    currentContentState.menuSections[index].title = event.target.value;
    markDirty();
  });
});

menuItemsFields.forEach((control) => {
  control.addEventListener("input", (event) => {
    const index = Number(event.target.dataset.menuItems);
    currentContentState.menuSections[index].items = parseMenuItems(event.target.value);
    markDirty();
  });
});

cardUploads.forEach((control) => {
  control.addEventListener("change", async (event) => {
    const [file] = event.target.files || [];
    if (!file) {
      return;
    }

    const collection = event.target.dataset.cardUpload;
    const index = Number(event.target.dataset.cardIndex);
    const sourceField = collection === "galleryPhotos" ? "src" : "image";

    currentContentState[collection][index][sourceField] = await readFileAsDataUrl(file);
    syncControls(currentContentState);
    markDirty("Imagen cargada. Falta guardar.");
  });
});

if (refreshButton) {
  refreshButton.addEventListener("click", () => {
    refreshPreview();
    setStatus("Vista previa actualizada.", "idle");
  });
}

if (saveButton) {
  saveButton.addEventListener("click", async () => {
    try {
      setStatus("Guardando cambios...", "saving");
      saveButton.disabled = true;
      await saveContent(currentContentState);
      markClean();
      refreshPreview();
      try {
        await openPublishScript();
        setStatus("Cambios guardados. Se abrio el publicador de GitHub.", "success");
      } catch (error) {
        setStatus("Cambios guardados. Abre publish-to-github.bat para subirlos.", "success");
      }
    } catch (error) {
      setStatus("No se pudieron guardar los cambios.", "error");
    } finally {
      saveButton.disabled = false;
    }
  });
}

if (resetButton) {
  resetButton.addEventListener("click", async () => {
    try {
      currentContentState = await loadContent();
      syncControls(currentContentState);
      hasUnsavedChanges = false;
      setStatus("Contenido restaurado desde site-content.json.", "idle");
      refreshPreview();
    } catch (error) {
      setStatus("No se pudo restaurar el contenido.", "error");
    }
  });
}

if (exportButton) {
  exportButton.addEventListener("click", () => {
    downloadJson(currentContentState);
    setStatus("Copia exportada.", "idle");
  });
}

if (logoutButton) {
  logoutButton.addEventListener("click", async () => {
    await logout();
    window.location.href = "./admin-login.html";
  });
}

window.addEventListener("beforeunload", (event) => {
  if (!hasUnsavedChanges) {
    return;
  }

  event.preventDefault();
  event.returnValue = "";
});

async function init() {
  try {
    const authenticated = await checkSession();
    if (!authenticated) {
      window.location.href = "./admin-login.html";
      return;
    }

    currentContentState = await loadContent();
    syncControls(currentContentState);
    setActiveTab("general");
    setStatus("Panel listo para editar.", "idle");
  } catch (error) {
    currentContentState = normalizeContent(defaultContent);
    syncControls(currentContentState);
    setActiveTab("general");
    setStatus("No se pudo cargar el contenido guardado. Se uso el contenido base.", "error");
  }
}

init();
