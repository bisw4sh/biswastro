export function setupNav() {
  const navButton = document.querySelector(".navbar-icon-button");
  const navMenu = document.querySelector(".w-nav-menu");

  if (!navButton || !navMenu) {
    console.error("Nav elements not found");
    return () => {};
  }

  const toggleNav = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const isOpen = navMenu.classList.contains("is-open");

    if (isOpen) {
      navMenu.classList.remove("is-open");
      setTimeout(() => {
        navMenu.classList.remove("is-visible");
      }, 250);
    } else {
      navMenu.classList.add("is-visible");
      setTimeout(() => {
        navMenu.classList.add("is-open");
      }, 10);
    }
  };

  // Close menu when clicking outside
  const handleOutsideClick = (e) => {
    if (!navButton.contains(e.target) && !navMenu.contains(e.target)) {
      if (navMenu.classList.contains("is-open")) {
        navMenu.classList.remove("is-open");
        setTimeout(() => {
          navMenu.classList.remove("is-visible");
        }, 250);
      }
    }
  };

  // Close menu when clicking a nav link
  const handleNavLinkClick = () => {
    if (navMenu.classList.contains("is-open")) {
      navMenu.classList.remove("is-open");
      setTimeout(() => {
        navMenu.classList.remove("is-visible");
      }, 250);
    }
  };

  // Add event listeners
  navButton.addEventListener("click", toggleNav);
  document.addEventListener("click", handleOutsideClick);

  const navLinks = navMenu.querySelectorAll("a");
  navLinks.forEach((link) => {
    link.addEventListener("click", handleNavLinkClick);
  });

  // Keyboard support (ESC to close)
  const handleKeyPress = (e) => {
    if (e.key === "Escape" && navMenu.classList.contains("is-open")) {
      navMenu.classList.remove("is-open");
      setTimeout(() => {
        navMenu.classList.remove("is-visible");
      }, 250);
      navButton.focus();
    }
  };
  document.addEventListener("keydown", handleKeyPress);

  // Cleanup function
  return () => {
    navButton.removeEventListener("click", toggleNav);
    document.removeEventListener("click", handleOutsideClick);
    document.removeEventListener("keydown", handleKeyPress);
    navLinks.forEach((link) => {
      link.removeEventListener("click", handleNavLinkClick);
    });
  };
}
