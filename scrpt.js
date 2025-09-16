document.addEventListener("DOMContentLoaded", function () {
  // -----------------------
  // Smooth Scrolling
  // -----------------------
  document.querySelectorAll('nav a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const headerOffset = document.querySelector("header").offsetHeight;
      const targetElement = document.querySelector(this.getAttribute("href"));
      const elementPosition =
        targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset - 20;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      if (window.innerWidth <= 768) {
        document.getElementById("nav-menu").classList.remove("active");
      }
    });
  });

  // -----------------------
  // Hamburger Menu Toggle
  // -----------------------
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  // -----------------------
  // Dark Mode Toggle
  // -----------------------
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  const icon = darkModeToggle.querySelector("i");

  // Load saved preference from localStorage
  if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  }

  darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
      icon.classList.remove("fa-moon");
      icon.classList.add("fa-sun");
      localStorage.setItem("darkMode", "enabled");
    } else {
      icon.classList.remove("fa-sun");
      icon.classList.add("fa-moon");
      localStorage.setItem("darkMode", "disabled");
    }
  });
});