function ig() {
    window.open("https://www.instagram.com/_fa.pt.27", "_blank");
}
function git() {
    window.open("https://github.com/faptster","_blank");
}
const slides = document.querySelectorAll(".slideshow img");
let index = 0;

setInterval(() => {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}, 1500);