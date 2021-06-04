$(document).ready(function(){
  const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.slider-button--next',
    prevEl: '.slider-button--prev',
  },
});
const reviews = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },
});

var menuButton = document.querySelector(".menu-button");

menuButton.addEventListener('click', function(){

});

var modalButton =$("[data-toggle=modal]");
var closeModalButton =$(".modal__close");
modalButton.on("click", openModal);
closeNodalButton.on("click", closeModal);

function openModal() {
  var targetModal = $(this).attr("data-href");
  $(targetModal).find(".modal__overlay").addClass(".modal__overlay--visible");
  $(targetModal).find(".modal__dialog").addClass(".modal__dialog--visible");
}
function closeModal(event) {
  event.preventDefault();
  var modalOverlay =$(".modal__overlay");
  var modalDialog =$(".modal__dialog");
  modalOverlay.removeClass("modal__overlay--visible");
  modalDialog.removeClass("modal__dialog--visible");
}
});