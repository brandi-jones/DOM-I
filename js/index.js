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

//---nav bar---
//note - didn't have to create navText, etc. could have simply went the method 
//used in later sections of page (ex- contact section)
let navContent = siteContent["nav"];
let navItems = document.querySelectorAll("nav a");

let navText = "nav-item-";
let completeNavText = "";
let counter = 0;

for (let i = 0; i < navItems.length; i++) {  
    counter++;
    completeNavText = navText + counter;
    navItems[i].textContent = navContent[completeNavText];
}


//change color of nav text to be green
navItems.forEach (currentValue => {
  currentValue.style.color = "green";
  currentValue.style.fontWeight = "bold";
});

//create new content for nav bar
let newContent1 = document.createElement("a");
let newContent2 = document.createElement("a");

newContent1.textContent = "Team";
newContent1.style.color = "green";
newContent1.style.fontWeight = "bold";

newContent2.textContent = "Shop"
newContent2.style.color = "green";
newContent2.style.fontWeight = "bold";

document.querySelector("nav").appendChild(newContent1);
document.querySelector("nav").prepend(newContent2);


//---cta---
let ctaValues = Object.values(siteContent.cta); //fill with all values of objects in cta
let ctaText = document.querySelectorAll(".cta-text *"); //fill with both elements within this class

ctaText.forEach ((currentValue, i) => {
    currentValue.textContent = ctaValues[i];
});

//cta image
document.querySelector("#cta-img").src = siteContent["cta"]["img-src"];

//------main content------
let mainContentValues = Object.values(siteContent["main-content"]);  //all main content values from json
mainContentValues.splice(4, 1); //remove element at index 4, which is the middle image. 
                                //now, mainContentValues only contains the text items.
let mainContentText = document.querySelectorAll(".text-content *"); //all text elements in main content containers

//for loop for "top-content" text
for (let i = 0; i < 4; i++) { 
    mainContentText[i].textContent = mainContentValues[i];
}

//for loop for "bottom-content" text
for (let i = 4; i < 10; i++) {
    mainContentText[i].textContent = mainContentValues[i];
}

//middle image in main content
document.querySelector("#middle-img").src = siteContent["main-content"]["middle-img-src"];


//------contact------
let contact = document.querySelectorAll(".contact *");
let contactValues = Object.values(siteContent.contact);

contact.forEach ( (currentValue, i) => {
    currentValue.textContent = contactValues[i];
});

//------footer------
document.querySelector('footer p').textContent = siteContent["footer"]["copyright"];
