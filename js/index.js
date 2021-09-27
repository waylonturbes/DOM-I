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

// NAVIGATION Menu Selector
const navItemsSelector = document.querySelectorAll("nav a");
const navSelector = document.querySelector("nav");

// Adding Navigation Menu items from siteContent
navItemsSelector.forEach((navItem, index) => {
  navItem.textContent = siteContent.nav[`nav-item-${index + 1}`];
  navItem.style.color = "green";
});

// Adding NAVIGATION Elements
const howTo = document.createElement("a");
const dontClick = document.createElement("a");

// Adding Content to New Elements
howTo.textContent = "How To";
howTo.style.color = "green";
dontClick.textContent = "Don't Click";
dontClick.style.color = "green";

// Adding New Nav Elements to DOM
navSelector.appendChild(howTo);
navSelector.prepend(dontClick);

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

// Section MAIN Header4s, Paragraphs, and Image Selectors
const mainHeaderFours = document.querySelectorAll("section.main-content h4"); // Array Like
const mainParagraphs = document.querySelectorAll("section.main-content p"); // Array Like
const mainImg = document.querySelector("section.main-content img");

// Adding FEATURES Content to Section Main
mainHeaderFours[0].textContent = siteContent["main-content"]["features-h4"];
mainParagraphs[0].textContent = siteContent["main-content"]["features-content"];

// Adding ABOUT Content to Section Main
mainHeaderFours[1].textContent = siteContent["main-content"]["about-h4"];
mainParagraphs[1].textContent = siteContent["main-content"]["about-content"];

// Adding Main Section Image
mainImg.src = siteContent["main-content"]["middle-img-src"];

// Adding SERVICES Content to Main Section
mainHeaderFours[2].textContent = siteContent["main-content"]["services-h4"];
mainParagraphs[2].textContent = siteContent["main-content"]["services-content"];

// Adding PRODUCT Content to Main Section
mainHeaderFours[3].textContent = siteContent["main-content"]["product-h4"];
mainParagraphs[3].textContent = siteContent["main-content"]["product-content"];

// Adding VISION Content to Main Section
mainHeaderFours[4].textContent = siteContent["main-content"]["vision-h4"];
mainParagraphs[4].textContent = siteContent["main-content"]["vision-content"];

// Section CONTACT Selectors
const contactHeader = document.querySelector("section.contact h4");
const contactParagraphs = document.querySelectorAll("section.contact p"); // Array Like

// Adding Content to CONTACT Section
contactHeader.textContent = siteContent["contact"]["contact-h4"];
contactParagraphs[0].innerHTML = "123 Way 456 Street<br/> Somewhere, USA";
contactParagraphs[1].textContent = siteContent["contact"]["phone"];
contactParagraphs[2].textContent = siteContent["contact"]["email"];

// Section Footer Selector
const footerParagraph = document.querySelector("footer p");

// Adding Content to FOOTER Section
footerParagraph.textContent = siteContent["footer"]["copyright"];
