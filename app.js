"use strict";

const mobileLinks = document.querySelectorAll(".mobile-nav a");
mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const menu = link.closest("details");
    if (menu) menu.open = false;
  });
});

document.addEventListener("click", (event) => {
  document.querySelectorAll(".mobile-menu[open]").forEach((menu) => {
    if (!menu.contains(event.target)) menu.open = false;
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    document.querySelectorAll(".mobile-menu[open]").forEach((menu) => {
      menu.open = false;
      menu.querySelector("summary")?.focus();
    });
  }
});
