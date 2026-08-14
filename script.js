/* =========================================
   ENRICH.DEV
   Portfolio JavaScript
   script.js
   ========================================= */


/* =========================================
   MOBILE NAVIGATION
========================================= */

const navbar = document.querySelector(".navbar");
const navLinks = document.querySelector(".nav-links");

if (navbar && navLinks) {

  const menuButton = document.createElement("button");

  menuButton.className = "menu-button";

  menuButton.type = "button";

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


  /* =====================================
     OPEN / CLOSE MOBILE MENU
  ===================================== */

  menuButton.addEventListener("click", () => {

    navLinks.classList.toggle("show");

    const isOpen =
      navLinks.classList.contains("show");

    menuButton.setAttribute(
      "aria-expanded",
      isOpen.toString()
    );

    menuButton.setAttribute(
      "aria-label",
      isOpen
        ? "Close navigation menu"
        : "Open navigation menu"
    );

    menuButton.innerHTML =
      isOpen ? "✕" : "☰";

  });


  /* =====================================
     CLOSE MENU AFTER LINK CLICK
  ===================================== */

  navLinks
    .querySelectorAll("a")
    .forEach(link => {

      link.addEventListener("click", () => {

        navLinks.classList.remove("show");

        menuButton.setAttribute(
          "aria-expanded",
          "false"
        );

        menuButton.setAttribute(
          "aria-label",
          "Open navigation menu"
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
   SCROLL HEADER EFFECT
========================================= */

const header =
  document.querySelector(".site-header");

if (header) {

  const updateHeader = () => {

    if (window.scrollY > 50) {

      header.classList.add("scrolled");

    } else {

      header.classList.remove("scrolled");

    }

  };


  window.addEventListener(
    "scroll",
    updateHeader,
    { passive: true }
  );


  updateHeader();

}


/* =========================================
   FADE-IN ANIMATIONS
========================================= */

const animatedElements =
  document.querySelectorAll(
    ".project-card, .skill-card, .approach-card, .contact-item"
  );


if ("IntersectionObserver" in window) {

  const observer =
    new IntersectionObserver(
      (entries, observer) => {

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


  animatedElements.forEach(element => {

    observer.observe(element);

  });

} else {

  /* Fallback for older browsers */

  animatedElements.forEach(element => {

    element.classList.add("visible");

  });

}


/* =========================================
   EXTERNAL LINK HANDLING
========================================= */

const externalLinks =
  document.querySelectorAll(
    'a[href^="https://"]'
  );

externalLinks.forEach(link => {

  const currentHost =
    window.location.hostname;

  try {

    const linkUrl =
      new URL(link.href);

    if (
      linkUrl.hostname !== currentHost
    ) {

      link.setAttribute(
        "target",
        "_blank"
      );

      link.setAttribute(
        "rel",
        "noopener noreferrer"
      );

    }

  } catch (error) {

    console.warn(
      "Could not process external link:",
      link.href
    );

  }

});


/* =========================================
   CLIENT PROJECT PORTAL
========================================= */

const projectLinks =
  document.querySelectorAll(
    'a[href="https://enrichclient.vercel.app/"]'
  );

projectLinks.forEach(link => {

  link.addEventListener("click", () => {

    console.log(
      "Opening Enrich.DEV Client Project Portal."
    );

  });

});


/* =========================================
   SMOOTH INTERNAL NAVIGATION
========================================= */

const internalLinks =
  document.querySelectorAll(
    'a[href^="#"]'
  );

internalLinks.forEach(link => {

  link.addEventListener("click", event => {

    const targetId =
      link.getAttribute("href");

    if (
      !targetId ||
      targetId === "#"
    ) {
      return;
    }

    const target =
      document.querySelector(targetId);

    if (target) {

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    }

  });

});


/* =========================================
   CONSOLE MESSAGE
========================================= */

console.log(
  "ENRICH.DEV loaded successfully."
);

console.log(
  "Building digital solutions for Kenya and beyond."
);