//storing html element into constant variable
// with the help of assigned classes
const vegburger = document.querySelector(".veg-burger");
const menu = document.querySelector(".nav-menu");

//adding a 'click' event to 'vegburger' element
vegburger.addEventListener("click", () => {
    vegburger.classList.toggle("active");
    menu.classList.toggle("active");
})

//remove active class when clicking any of the links
document.querySelectorAll(".nav-link").forEach
    (n => menu.addEventListener("click", () => {
        vegburger.classList.remove("active");
        menu.classList.remove("active");
    }))