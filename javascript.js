let scrollDown = document.getElementById("nav");
let logo = document.getElementById("logo");

function scrollTop() {
    if(window.scrollY > 0) {
        scrollDown.classList.add("fixed");
    }else {
        scrollDown.classList.remove("fixed");
    }
}
window.addEventListener("scroll", scrollTop)
const navSlide = () => {
    let bars = document.getElementById("bar");
    let nav = document.getElementById("list");
    bars.addEventListener("click", () => {
        nav.classList.toggle("nav-active");
    });
}
navSlide();
const remove = () => {
    let nav = document.getElementById("list");
    nav.classList.remove("nav-active");
}
let review1 = document.getElementById("review-el1");
let review2 = document.getElementById("review-el2");
let review3 = document.getElementById("review-el3");
let review4 = document.getElementById("review-el4");
let swipeEl1 = document.getElementById("swipe1");
let swipeEl2 = document.getElementById("swipe2");
let swipeEl3 = document.getElementById("swipe3");
let swipeEl4 = document.getElementById("swipe4");
let body = document.getElementById("bdy");

swipeEl1.addEventListener("click", function() {
    if (swipeEl1.click = true) {
        review1.style.display = "flex";
        review2.style.display = "none";
        review3.style.display = "none";
        review4.style.display = "none";
        swipeEl2.src = "icons/circle1.svg";
        swipeEl3.src = "icons/circle1.svg";
        swipeEl4.src = "icons/circle1.svg";
        swipeEl1.src = "icons/circle.svg"
    }
    else {
        swipeEl1.src = "icons/circle1.svg"
    }
})
swipeEl2.addEventListener("click", function() {
    if(swipeEl2.click = true) {
        swipeEl1.src = "icons/circle1.svg"
        review1.style.display = "none";
        review3.style.display = "none";
        review4.style.display = "none";   
        review2.style.display = "flex";
        swipeEl3.src="icons/circle1.svg";
        swipeEl4.src="icons/circle1.svg";
        swipeEl2.src = "icons/circle.svg"
    }else if(swipeEl1.clicked = false) {
        swipeEl2.src = "icons/circle1.svg"
    }
})
swipeEl3.addEventListener("click", function() {
    if(swipeEl3.click = true) {
        swipeEl2.src = "icons/circle1.svg"
        review1.style.display = "none";
        review2.style.display = "none";
        review4.style.display  = "none";
        review3.style.display = "flex";
        swipeEl1.src = "icons/circle1.svg"
        swipeEl4.src="icons/circle1.svg"
        swipeEl3.src = "icons/circle.svg"
    }else {
        swipeEl3.src = "icons/circle1.svg"
    }
})
swipeEl4.addEventListener("click", function() {
    if(swipeEl4.click = true) {
        swipeEl3.src = "icons/circle1.svg"
        review2.style.display = "none";
        review3.style.display = "none";
        review4.style.display = "flex";
        swipeEl1.src = "icons/circle1.svg"
        swipeEl2.src = "icons/circle1.svg"
        swipeEl4.src = "icons/circle.svg"
    }else {
        swipeEl4.src = "icons/circle1.svg"
    }
})

