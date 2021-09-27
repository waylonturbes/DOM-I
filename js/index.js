const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2018",
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

// Navigation Menu Selector
const navMenuSelector = document.querySelectorAll("nav a");

// Adding Navigation Menu items from siteContent
navMenuSelector.forEach((navItem, index) => {
  return (navItem.textContent = siteContent.nav[`nav-item-${index + 1}`]);
});

// Section CTA Selector
const headerOne = document.querySelector("section.cta div h1");
const ctaButton = document.querySelector("section.cta div button");
const ctaImg = document.querySelector("section.cta img");

// Section CTA Added Elements
const breakTag = document.createElement("br");

// Adding Content to CTA Section
headerOne.innerHTML = "DOM<br/> Is<br/> Awesome";
ctaButton.textContent = siteContent.cta.button;
ctaImg.src = siteContent.cta["img-src"];

// Section Main Top Content Selectors
const featuresHeader = document.querySelector(
  "section.main-content div.top-content div.text-content h4"
);
const featuresParagraph = document.querySelector(
  "section.main-content div.top-content div.text-content p"
);
const aboutHeader = document.querySelector(
  "section.main-content div.top-content div.text-content h4"
);
const aboutParagraph = document.querySelector(
  "section.main-content div.top-content div.text-content p"
);
