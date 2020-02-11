const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

const allNav = document.querySelectorAll('a');
// allNav[0].textContent = siteContent["nav"]["nav-item-1"];
// allNav[1].textContent = siteContent["nav"]["nav-item-2"];
// allNav[2].textContent = siteContent["nav"]["nav-item-3"];
// allNav[3].textContent = siteContent["nav"]["nav-item-4"];
// allNav[4].textContent = siteContent["nav"]["nav-item-5"];
// allNav[5].textContent = siteContent["nav"]["nav-item-6"];
for ( let i = 0; i < allNav.length; i++) {
  allNav[i].textContent = siteContent["nav"][`nav-item-${i}`];
}

const h1 = document.querySelector('h1');
// console.log(ctaCont);
h1.textContent = siteContent["cta"]["h1"];

const button = document.querySelector('button');
button.textContent = siteContent["cta"]["button"];

const ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

const allH4s = document.querySelectorAll('h4');
// console.log(allH4s);
allH4s[0].textContent = siteContent["main-content"]["features-h4"];
allH4s[1].textContent = siteContent["main-content"]["about-h4"];
allH4s[2].textContent = siteContent["main-content"]["services-h4"];
allH4s[3].textContent = siteContent["main-content"]["product-h4"];
allH4s[4].textContent = siteContent["main-content"]["vision-h4"];
allH4s[5].textContent = siteContent["contact"]["contact-h4"];

const middleImage = document.getElementById("middle-img");
// console.log(middleImage);
middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// const middleImage = document.querySelector('.middle-img');
// middleImage.innerhtml('src', siteContent["main-content"]["middle-img-src"]);

const allPs = document.querySelectorAll('p');
// console.log(allPs);
allPs[0].textContent = siteContent["main-content"]["features-content"];
allPs[1].textContent = siteContent["main-content"]["about-content"];
allPs[2].textContent = siteContent["main-content"]["services-content"];
allPs[3].textContent = siteContent["main-content"]["product-content"];
allPs[4].textContent = siteContent["main-content"]["vision-content"];
allPs[5].textContent = siteContent["contact"]["address"];
allPs[6].textContent = siteContent["contact"]["phone"];
allPs[7].textContent = siteContent["contact"]["email"];
allPs[8].textContent = siteContent["footer"]["copyright"];

const allNavGreen = document.querySelectorAll('a');
for ( let i = 0; i < allNav.length; i++) {
  allNavGreen[i].style.color = "green";
}