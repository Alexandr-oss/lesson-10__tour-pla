$(document).ready(function () {
  const swiper = new Swiper(".swiper-container", {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: ".slider-button--next",
      prevEl: ".slider-button--prev",
    },
  });
  const reviews = new Swiper(".reviews-slider", {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: ".reviews-slider__button--next",
      prevEl: ".reviews-slider__button--prev",
    },
  });

  var menuButton = document.querySelector(".menu-button");

  var modalButton = $("[data-modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  function openModal() {
    var targetModal = $(this).attr("data-modal");
    $(targetModal).find(".modal__overlay").addClass(".modal__overlay--visible");
    $(targetModal).find(".modal__dialog").addClass(".modal__dialog--visible");
  }
  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }
});

function setCursorPosition(pos, e) {
  e.focus();
  if (e.setSelectionRange) e.setSelectionRange(pos, pos);
  else if (e.createTextRange) {
    var range = e.createTextRange();
    range.collapse(true);
    range.moveEnd("character", pos);
    range.moveStart("character", pos);
    range.select();
  }
}

function mask(e) {
  //console.log('mask',e);
  var matrix = this.placeholder, // .defaultValue
    i = 0,
    def = matrix.replace(/\D/g, ""),
    val = this.value.replace(/\D/g, "");
  def.length >= val.length && (val = def);
  matrix = matrix.replace(/[_\d]/g, function (a) {
    return val.charAt(i++) || "_";
  });
  this.value = matrix;
  i = matrix.lastIndexOf(val.substr(-1));
  i < matrix.length && matrix != this.placeholder
    ? i++
    : (i = matrix.indexOf("_"));
  setCursorPosition(i, this);
}
window.addEventListener("DOMContentLoaded", function () {
  var input = document.querySelector("#online_phone");
  input.addEventListener("input", mask, false);
  input.focus();
  setCursorPosition(3, input);
});
