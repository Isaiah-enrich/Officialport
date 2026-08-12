/* =========================================
   OMANDI ISAIAH MOGENI
   Portfolio JavaScript
   script.js
   ========================================= */


/* =========================================
   MOBILE NAVIGATION
   ========================================= */

const navbar = document.querySelector(".navbar");
const navLinks = document.querySelector(".nav-links");


// Create mobile menu button
if (navbar && navLinks) {

  const menuButton = document.createElement("button");

  menuButton.className = "menu-button";

  menuButton.setAttribute(
    "aria-label",
    "Open navigation menu"
  );

  menuButton.setAttribute(
    "aria-expanded",
    "false"
  );

  menuButton.innerHTML = "☰";

  navbar.insertBefore(
    menuButton,
    navLinks
  );


  // Open / close menu

  menuButton.addEventListener("click", () => {

    navLinks.classList.toggle("show");

    const isOpen =
      navLinks.classList.contains("show");

    menuButton.setAttribute(
      "aria-expanded",
      isOpen
    );

    menuButton.innerHTML =
      isOpen ? "✕" : "☰";

  });


  // Close menu after clicking a link

  navLinks.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

      navLinks.classList.remove("show");

      menuButton.setAttribute(
        "aria-expanded",
        "false"
      );

      menuButton.innerHTML = "☰";

    });

  });

}


/* =========================================
   CURRENT YEAR
   ========================================= */

const yearElements =
  document.querySelectorAll(".current-year");

yearElements.forEach(element => {

  element.textContent =
    new Date().getFullYear();

});


/* =========================================
   PROJECT CARD ANIMATION
   ========================================= */

const projectCards =
  document.querySelectorAll(".project-card");


const observer =
  new IntersectionObserver(
    (entries) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add(
            "visible"
          );

          observer.unobserve(
            entry.target
          );

        }

      });

    },
    {
      threshold: 0.15
    }
  );


projectCards.forEach(card => {

  observer.observe(card);

});


/* =========================================
   SKILL CARD ANIMATION
   ========================================= */

const skillCards =
  document.querySelectorAll(".skill-card");


skillCards.forEach(card => {

  observer.observe(card);

});


/* =========================================
   SCROLL HEADER EFFECT
   ========================================= */

const header =
  document.querySelector(".site-header");


if (header) {

  window.addEventListener(
    "scroll",
    () => {

      if (window.scrollY > 50) {

        header.classList.add(
          "scrolled"
        );

      } else {

        header.classList.remove(
          "scrolled"
        );

      }

    }
  );

}


/* =========================================
   CONSOLE MESSAGE
   ========================================= */

console.log(
  "Portfolio loaded successfully."
);

console.log(
  "Built by Omandi Isaiah Mogeni."
);