// DOM
const header = document.querySelector("header");
const navbar = document.querySelector(".navbar");
const navBtn = document.querySelector(".BtnToggleNav");
const body = document.querySelector("body");
const navLinks = document.querySelectorAll(".nav-links");
const signUpForm = document.querySelector(".sign-up-form");
const cancelBtn = document.querySelector(".cancel-btn");
const signUpBtn = document.querySelector(".signUpBtn");

// Afficher la bars de navigation sous mobile
navBtn.addEventListener("click", () => {
  document.querySelector(".nav-right").style.transition = ".3s linear";
  navbar.classList.toggle("active");
  if (navbar.classList.contains("active")) {
    // Si navbar contient déjà une classe active
    body.classList.add("disabledScroll"); // On désactive le scroll pour empêcher l'utilisateur de scroller lorsque la navbar est affiché
  } else {
    body.classList.remove("disabledScroll");
  }
});

/* Permet d'enlever la classe active de la navbar lorsque 
l'utilisateur clique sur un menu de la navbar pour aller vers une section de la page */
for (i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    navbar.classList.remove("active");
    if (!navbar.classList.contains("active")) {
      body.classList.remove("disabledScroll");
    }
  });
}

// Permet d'afficher le formulaire d'inscription au clique du bouton (S'inscrire maintenant)
signUpBtn.addEventListener("click", () => {
  if (!signUpForm.classList.contains("active")) {
    signUpForm.classList.add("active");
    signUpForm.style.transition = ".3s linear";
  } else {
    return false;
  }
});

// Permet de cacher le formulaire d'inscription au clique de l'icône de retour
cancelBtn.addEventListener("click", () => {
  if (signUpForm.classList.contains("active")) {
    signUpForm.classList.remove("active");
    signUpForm.style.transition = ".3s linear";
  } else {
    return false;
  }
});

// Permet d'ajouter une classe pour appliquer un certains style à la navbar après avoir scroller une certaine distance
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});

// Library swiper pour le carousel
const swiper = new Swiper(".swiper", {
  speed: 400,
  spaceBetween: 20,
  slidesPerView: 4,
  slidesPerGroup: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
      slidesPerGroup: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
      slidesPerGroup: 1,
    },
    200: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
  },
});

// Library WOW pour les animations
wow = new WOW({
  animateClass: "animated",
  offset: 0,
});
wow.init();
