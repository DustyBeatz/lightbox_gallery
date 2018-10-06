var openmodal;
var closeModal;
var showSlides;
var plusSlide;
var currentSlide;

function openmodal() {
    console.log("modalopening");
    document.getElementById('myModal').style.display = "block";

}

function closeModal() {
    document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlide(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName('mySlides');
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.legnth; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.legnth; i++) {
        dots[i].className = dots[i].className.replace("  Active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += "  Active";
    captionText.innerHTML = dots[slidesIndex-1].alt;
}