// Mobile navigation toggle with ARIA support

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.querySelector("#primary-menu");

  if (!toggle || !menu) return;

  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Close menu when focus leaves and user tabs past the navigation
  menu.addEventListener("focusout", event => {
    if (!menu.contains(event.relatedTarget) && window.innerWidth < 640) {
      menu.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
});
