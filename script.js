const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const year = document.querySelector("#year");
const editableNodes = document.querySelectorAll("[data-edit]");
const placeholderNodes = document.querySelectorAll("[data-placeholder]");
const galleryGrid = document.querySelector("[data-gallery-grid]");
const productGrid = document.querySelector("[data-product-grid]");
const menuGrid = document.querySelector("[data-menu-grid]");
const highlightsWrapper = document.querySelector("[data-highlights]");
const featuredGrid = document.querySelector("[data-featured-grid]");
const storyPointsWrapper = document.querySelector("[data-story-points]");
const menuChipsWrapper = document.querySelector("[data-menu-chips]");
const faviconLink = document.querySelector("#site-favicon");
const logoImages = document.querySelectorAll("[data-logo-image]");
const logoFallbacks = document.querySelectorAll(".landing-brand-fallback, .brand-logo-fallback");
const socialLinksWrappers = document.querySelectorAll("[data-social-links]");
const doordashLinkNodes = document.querySelectorAll("[data-doordash-link]");
const doordashLogoNodes = document.querySelectorAll("[data-doordash-logo]");
const doordashFallbackNodes = document.querySelectorAll(".doordash-logo-fallback");
const whatsappLinkNodes = document.querySelectorAll("[data-whatsapp-link]");
const heroPrimaryLinks = document.querySelectorAll("[data-hero-primary]");
const heroSecondaryLinks = document.querySelectorAll("[data-hero-secondary]");
const heroPrimaryImage = document.querySelector("[data-hero-image-primary]");
const heroSecondaryImage = document.querySelector("[data-hero-image-secondary]");

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
  footerText: "Los Gallitos Bakery",
  scheduleText: "Lunes a Domingo: 6:00 AM - 9:00 PM",
  contactHeading: "",
  contactNote: "",
  socialHeading: "",
  deliveryText: "",
  deliveryButtonText: "Abrir DoorDash",
  locationLabelMenu: "Ubicacion",
  scheduleLabel: "Horario",
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

function applyTextContent(config) {
  editableNodes.forEach((node) => {
    const key = node.dataset.edit;
    if (config[key] !== undefined) {
      node.textContent = config[key];
    }
  });

  placeholderNodes.forEach((node) => {
    const key = node.dataset.placeholder;
    if (config[key] !== undefined) {
      node.placeholder = config[key];
    }
  });

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  if (faviconLink) {
    faviconLink.href = config.faviconImage || defaultContent.faviconImage;
  }

  const resolvedLogo = config.logoImage || config.faviconImage || defaultContent.faviconImage;
  logoImages.forEach((logoNode, index) => {
    const fallbackNode = logoFallbacks[index];

    if (resolvedLogo) {
      logoNode.src = resolvedLogo;
      logoNode.classList.remove("hidden");
      fallbackNode?.classList.add("hidden");
      return;
    }

    logoNode.classList.add("hidden");
    if (fallbackNode) {
      fallbackNode.classList.remove("hidden");
      fallbackNode.textContent =
        (config.brandName || defaultContent.brandName)
          .split(" ")
          .filter(Boolean)
          .slice(0, 2)
          .map((word) => word[0]?.toUpperCase() || "")
          .join("") || "LG";
    }
  });

  if (heroPrimaryImage) {
    heroPrimaryImage.src = config.heroImagePrimary || defaultContent.heroImagePrimary;
  }

  if (heroSecondaryImage) {
    heroSecondaryImage.src = config.heroImageSecondary || defaultContent.heroImageSecondary;
  }

  heroPrimaryLinks.forEach((linkNode) => {
    linkNode.textContent = config.heroPrimaryText || defaultContent.heroPrimaryText;
    linkNode.href = config.heroPrimaryHref || defaultContent.heroPrimaryHref;
  });

  heroSecondaryLinks.forEach((linkNode) => {
    linkNode.textContent = config.heroSecondaryText || defaultContent.heroSecondaryText;
    linkNode.href = config.heroSecondaryHref || defaultContent.heroSecondaryHref;
  });
}

function renderSimpleList(wrapper, items, className) {
  if (!wrapper) {
    return;
  }

  wrapper.innerHTML = items
    .map((item) => `<div class="${className}">${item}</div>`)
    .join("");
}

function renderFeaturedCards(cards) {
  if (!featuredGrid) {
    return;
  }

  featuredGrid.innerHTML = cards
    .map(
      (card) => `
        <article class="landing-feature-card">
          <div class="landing-feature-media">
            <img src="${card.image}" alt="${card.title}">
          </div>
          <div class="landing-feature-copy">
            <h3>${card.title}</h3>
            <p>${card.description}</p>
          </div>
        </article>
      `
    )
    .join("");
}

function renderGallery(photos) {
  if (!galleryGrid) {
    return;
  }

  galleryGrid.innerHTML = photos
    .map(
      (photo) => `
        <div class="landing-gallery-card">
          <img src="${photo.src}" alt="${photo.alt || "Foto de galeria"}">
        </div>
      `
    )
    .join("");
}

function renderMenuChips(chips) {
  if (!menuChipsWrapper) {
    return;
  }

  menuChipsWrapper.innerHTML = chips
    .map((chip) => `<div class="landing-menu-chip">${chip}</div>`)
    .join("");
}

function renderContactLinks(config) {
  const locationLinks = document.querySelectorAll("[data-map-link]");
  const phoneLinks = document.querySelectorAll("[data-phone-link]");
  const normalizedPhone = (config.phoneText || "").replace(/[^\d+]/g, "");
  const normalizedWhatsapp = (config.whatsappPhone || config.phoneText || "").replace(/[^\d+]/g, "");
  const fallbackMapUrl = config.locationText
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(config.locationText)}`
    : "#";
  const mapUrl = config.mapUrl || fallbackMapUrl;
  const phoneUrl = normalizedPhone ? `tel:${normalizedPhone}` : "#";
  const whatsappDigits = normalizedWhatsapp.replace(/[^\d]/g, "");
  const whatsappText = encodeURIComponent(`Hola, quiero informacion sobre ${config.brandName || defaultContent.brandName}.`);
  const whatsappUrl = whatsappDigits ? `https://wa.me/${whatsappDigits}?text=${whatsappText}` : "#";

  locationLinks.forEach((linkNode) => {
    linkNode.href = mapUrl;
    linkNode.setAttribute("aria-disabled", String(!mapUrl || mapUrl === "#"));
  });

  phoneLinks.forEach((linkNode) => {
    linkNode.href = phoneUrl;
    linkNode.setAttribute("aria-disabled", String(!normalizedPhone));
  });

  whatsappLinkNodes.forEach((linkNode) => {
    const isDisabled = !whatsappDigits;
    linkNode.href = whatsappUrl;
    linkNode.setAttribute("aria-disabled", String(isDisabled));
    linkNode.classList.toggle("is-disabled", isDisabled);
  });
}

function getSocialItems(config) {
  return [
    { key: "instagramUrl", label: "Instagram", icon: "instagram" },
    { key: "facebookUrl", label: "Facebook", icon: "facebook" },
    { key: "tiktokUrl", label: "TikTok", icon: "tiktok" }
  ];
}

function getSocialIcon(icon) {
  if (icon === "instagram") {
    return `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3.5" y="3.5" width="17" height="17" rx="5"></rect>
        <circle cx="12" cy="12" r="4.1"></circle>
        <circle cx="17.4" cy="6.6" r="1.1" class="social-dot"></circle>
      </svg>
    `;
  }

  if (icon === "facebook") {
    return `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M13.4 20v-6.1h2.5l.4-3h-2.9V9c0-.9.3-1.6 1.5-1.6h1.6V4.8c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H8v3h2.2V20h3.2Z"></path>
      </svg>
    `;
  }

  return `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14.8 4.5c.9.6 1.9 1 3 1.1v2.5a6.9 6.9 0 0 1-2.7-.6v5.3c0 3-2.4 5.4-5.4 5.4S4.3 15.8 4.3 12.8s2.4-5.4 5.4-5.4c.3 0 .7 0 1 .1V10a3 3 0 0 0-1-.2 2.9 2.9 0 1 0 2.9 2.9V4.5h2.2Z"></path>
    </svg>
  `;
}

function renderSocialLinks(config) {
  if (!socialLinksWrappers.length) {
    return;
  }

  const socialItems = getSocialItems(config);

  socialLinksWrappers.forEach((wrapper) => {
    wrapper.innerHTML = socialItems
      .map(
        (item) => `
          <a class="social-link ${config[item.key] ? "" : "is-disabled"}" href="${config[item.key] || "#"}" target="_blank" rel="noreferrer noopener" aria-label="${item.label}" aria-disabled="${String(!config[item.key])}" tabindex="${config[item.key] ? "0" : "-1"}">
            <span class="social-icon">${getSocialIcon(item.icon)}</span>
          </a>
        `
      )
      .join("");
  });
}

function renderDelivery(config) {
  doordashLinkNodes.forEach((linkNode) => {
    const isEnabled = Boolean(config.deliveryUrl);
    linkNode.href = isEnabled ? config.deliveryUrl : "#";
    linkNode.classList.toggle("is-disabled", !isEnabled);
    linkNode.setAttribute("aria-disabled", String(!isEnabled));
    linkNode.tabIndex = isEnabled ? 0 : -1;
  });

  doordashLogoNodes.forEach((logoNode, index) => {
    const fallbackNode = doordashFallbackNodes[index];

    if (config.deliveryLogo) {
      logoNode.src = config.deliveryLogo;
      logoNode.classList.remove("hidden");
      fallbackNode?.classList.add("hidden");
      return;
    }

    logoNode.classList.add("hidden");
    fallbackNode?.classList.remove("hidden");
  });
}

function renderMenu(menuSections) {
  if (!menuGrid) {
    return;
  }

  menuGrid.innerHTML = "";

  const normalizedSections = [...menuSections].sort(
    (left, right) => (right.items?.length || 0) - (left.items?.length || 0)
  );

  const leftColumn = [];
  const rightColumn = [];
  let leftWeight = 0;
  let rightWeight = 0;

  normalizedSections.forEach((section) => {
    const weight = section.items?.length || 0;

    if (leftWeight <= rightWeight) {
      leftColumn.push(section);
      leftWeight += weight;
      return;
    }

    rightColumn.push(section);
    rightWeight += weight;
  });

  const leftColumnNode = document.createElement("div");
  leftColumnNode.className = "menu-column";

  const rightColumnNode = document.createElement("div");
  rightColumnNode.className = "menu-column";

  const buildCard = (section, index) => {
    const card = document.createElement("article");
    card.className = "menu-card";

    const itemsMarkup = (section.items || [])
      .map(
        (item) => `
          <li class="menu-item">
            <span class="menu-item-name">${item.name}</span>
            <span class="menu-item-dot"></span>
            <strong class="menu-item-price">${item.price}</strong>
          </li>
        `
      )
      .join("");

    card.innerHTML = `
      <div class="menu-card-head">
        <span class="menu-card-index">${String(index + 1).padStart(2, "0")}</span>
        <h3>${section.title}</h3>
      </div>
      <ul class="menu-list">${itemsMarkup}</ul>
    `;

    return card;
  };

  leftColumn.forEach((section, index) => {
    leftColumnNode.appendChild(buildCard(section, index));
  });

  rightColumn.forEach((section, index) => {
    rightColumnNode.appendChild(buildCard(section, leftColumn.length + index));
  });

  menuGrid.append(leftColumnNode, rightColumnNode);
}

function renderProducts(products) {
  if (!productGrid) {
    return;
  }

  productGrid.innerHTML = products
    .map(
      (product) => `
        <article class="product-card">
          <div class="product-card-image">
            <img src="${product.image}" alt="${product.title}">
          </div>
          <div class="product-card-body">
            <h3>${product.title}</h3>
            <p>${product.description}</p>
            <strong>${product.price}</strong>
          </div>
        </article>
      `
    )
    .join("");
}

function applyContent(config) {
  applyTextContent(config);
  renderSimpleList(highlightsWrapper, config.highlights, "landing-highlight");
  renderSimpleList(storyPointsWrapper, config.storyPoints, "landing-story-card");
  renderFeaturedCards(config.featuredCards);
  renderGallery(config.galleryPhotos);
  renderMenuChips(config.menuChips);
  renderMenu(config.menuSections);
  renderProducts(config.products);
  renderSocialLinks(config);
  renderDelivery(config);
  renderContactLinks(config);
}

function initMenuToggle() {
  if (!menuToggle || !siteNav) {
    return;
  }

  menuToggle.addEventListener("click", () => {
    const nextState = !siteNav.classList.contains("open");
    siteNav.classList.toggle("open", nextState);
    menuToggle.setAttribute("aria-expanded", String(nextState));
  });
}

async function loadContent() {
  try {
    const response = await fetch("/api/content", { cache: "no-store" });

    if (!response.ok) {
      throw new Error("content_failed");
    }

    const payload = await response.json();
    return normalizeContent(payload);
  } catch (error) {
    return normalizeContent();
  }
}

initMenuToggle();

loadContent().then((content) => {
  applyContent(content);
});
