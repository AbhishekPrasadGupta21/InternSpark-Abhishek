/**
 * Abhishek Prasad Gupta — Portfolio System Controls Engine
 * Built to support Native Performance Metrics
 */

document.addEventListener("DOMContentLoaded", () => {
  initTypewriter();
  initThemeEngine();
  initScrollAnimations();
  initContactForm();
  initBackToTop(); // <-- Add this line right here!
});

/* ==========================================
 * USP 1: Core Typewriter Script Logic
 * ========================================== */
function initTypewriter() {
  const words = ["Frontend Developer.", "UI/UX Specialist.", "Problem Solver."];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const targetElement = document.getElementById("typewriter");

  function type() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
      charIndex--;
    } else {
      charIndex++;
    }

    targetElement.textContent = currentWord.substring(0, charIndex);

    let typeSpeed = isDeleting ? 40 : 100;

    if (!isDeleting && charIndex === currentWord.length) {
      typeSpeed = 1600; // Standstill delay at peak word write
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typeSpeed = 400; // Idle delay before typing next string loop
    }

    setTimeout(type, typeSpeed);
  }

  if (targetElement) type();
}

/* ==========================================
 * USP 7: Responsive Light/Dark Synchronizer Engine
 * ========================================== */
function initThemeEngine() {
  const toggleBtn = document.getElementById("themeToggle");
  const htmlElement = document.documentElement;
  const toggleIcon = toggleBtn.querySelector("i");

  // Checking client terminal memory cache state values
  const cachedTheme = localStorage.getItem("portfolio-theme") || "dark";
  htmlElement.setAttribute("data-theme", cachedTheme);
  updateIcon(cachedTheme);

  toggleBtn.addEventListener("click", () => {
    const activeTheme = htmlElement.getAttribute("data-theme");
    const targetTheme = activeTheme === "dark" ? "light" : "dark";

    htmlElement.setAttribute("data-theme", targetTheme);
    localStorage.setItem("portfolio-theme", targetTheme);
    updateIcon(targetTheme);
  });

  function updateIcon(theme) {
    if (theme === "light") {
      toggleIcon.className = "bi bi-brightness-high-fill";
    } else {
      toggleIcon.className = "bi bi-moon-stars-fill";
    }
  }
}

/* ==========================================
 * USP 3, 6 & 8: High Performance Intersection Observer Engine
 * This orchestrates Skill Bars, Scroll Reveals, and Navbar Tracking.
 * ========================================== */
function initScrollAnimations() {
  // --- Section 1: Scroll Reveal Triggers & Skill Progress Fill ---
  const sectionsAndBars = document.querySelectorAll(
    ".scroll-reveal, .progress-bar-fill",
  );

  const scrollObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains("scroll-reveal")) {
            entry.target.classList.add("reveal-active");
          } else if (entry.target.classList.contains("progress-bar-fill")) {
            const targetValue = entry.target.getAttribute("data-progress");
            entry.target.style.width = targetValue;
          }
          // Unobserve once element is animated to maximize frame performance
          scrollObserver.unobserve(entry.target);
        }
      });
    },
    {
      root: null,
      threshold: 0.12, // Element must fill 12% viewport frame to execute
      rootMargin: "0px 0px -20px 0px",
    },
  );

  sectionsAndBars.forEach((item) => scrollObserver.observe(item));

  // --- Section 2: Active Navigation Track Link Highlighting ---
  const trackingSections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  const navTrackObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const activeId = entry.target.getAttribute("id");

          navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${activeId}`) {
              link.classList.add("active");
            }
          });
        }
      });
    },
    {
      root: null,
      threshold: 0.55, // Fires when a section covers majority of user view
    },
  );

  trackingSections.forEach((section) => navTrackObserver.observe(section));
}

/* ==========================================
 * Contact Processing Verification Action
 * ========================================== */
function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Stop page from reloading brutally

    const currentSubmitBtn = form.querySelector("button[type='submit']");
    const originalText = currentSubmitBtn.textContent;

    // 1. Trigger premium visual loading state
    currentSubmitBtn.textContent = "Processing Handshake...";
    currentSubmitBtn.disabled = true;

    // 2. Capture form input data values natively
    const formData = new FormData(form);

    // 3. Dispatch data payload straight to your live Formspree endpoint
    fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          // Success! Real email has been routed
          alert(
            "Success! Message transmitted securely. Check your Gmail inbox!",
          );
          form.reset();
        } else {
          // Handle framework endpoint errors
          alert(
            "Oops! There was a problem submitting your form. Please try again.",
          );
        }
      })
      .catch((error) => {
        alert("Connection error. Could not reach server.");
      })
      .finally(() => {
        // Reset button interactive state
        currentSubmitBtn.textContent = originalText;
        currentSubmitBtn.disabled = false;
      });
  });
}
/* ==========================================
 * Interactive Back to Top Scroll Controller Engine
 * ========================================== */
function initBackToTop() {
  const topBtn = document.getElementById("backToTopBtn");
  if (!topBtn) return;

  // Toggle button visibility based on scroll distance
  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      topBtn.classList.add("show-btn");
    } else {
      topBtn.classList.remove("show-btn");
    }
  });

  // Execute smooth native window scroll reset on click action
  topBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Gives it that modern fluid glide behavior instead of an instant jump
    });
  });
}
