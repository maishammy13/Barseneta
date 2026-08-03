document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("navbar");
  const toggle = document.querySelector(".menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const closeMenu = () => {
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open navigation menu");
    mobileMenu.classList.remove("open");
    document.body.style.overflow = "";
  };
  const syncHeader = () =>
    header.classList.toggle("scrolled", window.scrollY > 24);
  syncHeader();
  window.addEventListener("scroll", syncHeader, { passive: true });
  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    if (isOpen) closeMenu();
    else {
      toggle.setAttribute("aria-expanded", "true");
      toggle.setAttribute("aria-label", "Close navigation menu");
      mobileMenu.classList.add("open");
      document.body.style.overflow = "hidden";
    }
  });
  mobileMenu
    .querySelectorAll("a")
    .forEach((link) => link.addEventListener("click", closeMenu));
  const observer = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      }),
    { threshold: 0.12 },
  );
  document
    .querySelectorAll(".reveal")
    .forEach((element) => observer.observe(element));
});
