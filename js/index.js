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
logo.setAttribute('src', siteContent["nav"]["img-src"])
let nav = document.getElementsByTagName('a');
for (let link of nav){
  link.style.color='green';
};
let nav1 = nav[0];
nav1.textContent ='Services';
let nav2 = nav[1];
nav2.textContent = 'Product';
let nav3 = nav[2];
nav3.textContent = 'Vision';
let nav4 = nav[3];
nav4.textContent = 'Features';
let nav5 = nav[4];
nav5.textContent = 'About';
let nav6 = nav[5];
nav6.textContent = 'Contact';

let h1 = document.querySelector('h1');
h1.textContent = 'DOM is Awesome';
let button = document.querySelector('button');
button.textContent = 'Get Started';
let ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent['cta']['img-src']);

let h4m= document.querySelectorAll('h4');
let h4f = h4m[0];
h4f.textContent = 'Features';
let h4a = h4m[1];
h4a.textContent = 'About';
let h4s = h4m[2];
h4s.textContent = 'Services';
let h4p = h4m[3];
h4p.textContent = 'Product';
let h4v = h4m[4];
h4v.textContent = 'Vision';
let pm = document.querySelectorAll('p');
let pmf = pm[0];
pmf.textContent ='Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
let pma = pm[1];
pma.textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
let pms = pm[2];
pms.textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
let pmp = pm[3];
pmp.textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
let pmv = pm[4];
pmv.textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

let middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src'])

let h4C = h4m[5];
h4C.textContent = 'Contact';
let pc1 = pm[5];
pc1.textContent = '123 Way 456 Street Somewhere, USA';
let pc2 = pm[6];
pc2.textContent = '1 (888) 888-8888';
let pc3 = pm[7];
pc3.textContent = 'sales@greatidea.io';

pf1 = pm[8];
pf1.textContent = 'Copyright Great Idea! 2018';
let newContent = document.createElement('a');
newContent.textContent = 'heya';
newContent.style.color = 'green';
add = document.querySelector('nav');

add.prepend(newContent);

let nc2 = document.createElement('a');
nc2.textContent = 'whatup';
add.append(nc2);
nc2.style.color = 'green';