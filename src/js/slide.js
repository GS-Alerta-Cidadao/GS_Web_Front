let indiceSlide = 0;

function mostrarSlide(n) {
    let i;
    let slides = document.getElementsByClassName("meuSlide");

    if (n >= slides.length) {
      indiceSlide = 0;
    } else if (n < 0) {
      indiceSlide = slides.length - 1; 
    } else {
      indiceSlide = n;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    if (slides[indiceSlide]) {
        slides[indiceSlide].style.display = "block";
    }
}

function mudarSlide(n) {
    mostrarSlide(indiceSlide + n);
}

document.addEventListener("DOMContentLoaded", function() {
    mostrarSlide(indiceSlide);
});