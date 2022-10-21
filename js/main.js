"use strict";
window.addEventListener("DOMContentLoaded", function () {
  const triggerModal = document.querySelector("[data-modal]"),
    modal = document.querySelector(".modal"),
    modalOverlay = document.querySelector(".modal .modal__overlay"),
    modalCloseBtn = document.querySelector("[data-close]");

  function openModal() {
    modal.classList.add("show");
    modal.classList.remove("hide");
    document.body.style.overflow = "hidden";
  }
  function closeModal() {
    modal.classList.add("hide");
    modal.classList.remove("show");
    document.body.style.overflow = "";
  }

  modal.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });

  triggerModal.addEventListener("click", openModal);
  modalCloseBtn.addEventListener("click", closeModal);

  function setCursorPosition(pos, e) {
    e.focus();
    if (e.setSelectionRange) e.setSelectionRange(pos, pos);
    else if (e.createTextRange) {
      let range = e.createTextRange();
      range.collapse(true);
      range.moveEnd("character", pos);
      range.moveStart("character", pos);
      range.select();
    }
  }

  function mask(e) {
    //console.log('mask',e);
    let matrix = this.placeholder, // .defaultValue
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

  let input = document.querySelector("#online_phone");
  input.addEventListener("input", mask, false);
  input.focus();
  setCursorPosition(3, input);
});
