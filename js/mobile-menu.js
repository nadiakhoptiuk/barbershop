(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  const backdropRef = document.querySelector("[data-overlay]");

  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

    backdropRef.classList.toggle("is-hidden");
    mobileMenuRef.classList.toggle("is-open");
    document.body.classList.toggle("menu-open");
  });
})();
