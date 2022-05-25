(() => {
  const refs = {
    openModalBtnMain: document.querySelector("[data-modal-open-main]"),
    openModalBtnSecond: document.querySelector("[data-modal-open-second]"),
    openModalBtnThird: document.querySelector("[data-modal-open-third]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    backdrop: document.querySelector("[data-overlay-modal]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtnMain.addEventListener("click", toggleModal);
  refs.openModalBtnSecond.addEventListener("click", toggleModal);
  refs.openModalBtnThird.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open");
    refs.modal.classList.toggle("is-hidden");
    refs.backdrop.classList.toggle("is-hidden");

    if (document.body.classList.contains("modal-open")) {
      window.addEventListener("keydown", onEscKeyPress);
    } else {
      window.removeEventListener("keydown", onEscKeyPress);
    }
  }

  function onEscKeyPress(event) {
    if (event.code === "Escape") {
      toggleModal();
    }
  }
})();
