document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".menu-bar a");
  const sections = document.querySelectorAll(".section");
  const hamburger = document.querySelector(".hamburger");
  const menuBar = document.querySelector(".menu-bar");

  // Hamburger toggle
  hamburger.addEventListener("click", () => {
    menuBar.classList.toggle("active");
  });

  // Section switch on nav click
  navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);

      sections.forEach(sec => sec.classList.remove("active"));
      document.getElementById(targetId).classList.add("active");

      menuBar.classList.remove("active"); // Close on mobile
    });
  });

  // Show section if URL has hash
  const hash = window.location.hash.substring(1);
  if (hash) {
    const target = document.getElementById(hash);
    if (target) {
      sections.forEach(s => s.classList.remove("active"));
      target.classList.add("active");
    }
  }
});
