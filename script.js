
/* =================================
   FIGHTERLY - MAIN JAVASCRIPT
================================= */

// Mobile menu
document.addEventListener("DOMContentLoaded", function () {

  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(function(link) {
    link.addEventListener("click", function(event) {
      const target = document.querySelector(
        this.getAttribute("href")
      );

      if (target) {
        event.preventDefault();
        target.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });

  // Welcome message
  console.log("Welcome to FIGHTERLY!");
  console.log("The Power of Talent 🔥");

  // Reveal elements when scrolling
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, {
    threshold: 0.15
  });

  document.querySelectorAll(
    ".category, .project, .section-title"
  ).forEach(function(element) {
    element.classList.add("reveal");
    observer.observe(element);
  });

});
