export function setupNav() {
  const mobileMenuButton = document.querySelector(".mobile-menu-button");
  const navMenu = document.querySelector(".w-nav-menu");

  if (!mobileMenuButton || !navMenu) {
    console.error("Mobile menu elements not found");
    return () => {};
  }

  const toggleMobileMenu = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const isOpen = navMenu.classList.contains("nav-menu--open");

    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  const openMenu = () => {
    navMenu.classList.add("nav-menu--open");
    mobileMenuButton.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  };

  const closeMenu = () => {
    navMenu.classList.remove("nav-menu--open");
    mobileMenuButton.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  };

  const handleOutsideClick = (e) => {
    if (!mobileMenuButton.contains(e.target) && !navMenu.contains(e.target)) {
      closeMenu();
    }
  };

  const handleNavLinkClick = () => {
    closeMenu();
  };

  const handleKeyPress = (e) => {
    if (e.key === "Escape" && navMenu.classList.contains("nav-menu--open")) {
      closeMenu();
      mobileMenuButton.focus();
    }
  };

  mobileMenuButton.addEventListener("click", toggleMobileMenu);
  document.addEventListener("click", handleOutsideClick);
  document.addEventListener("keydown", handleKeyPress);

  const navLinks = navMenu.querySelectorAll(".nav-link-container");
  navLinks.forEach((link) => {
    link.addEventListener("click", handleNavLinkClick);
  });

  return () => {
    mobileMenuButton.removeEventListener("click", toggleMobileMenu);
    document.removeEventListener("click", handleOutsideClick);
    document.removeEventListener("keydown", handleKeyPress);
    navLinks.forEach((link) => {
      link.removeEventListener("click", handleNavLinkClick);
    });
    closeMenu(); // Ensure menu is closed on cleanup
    document.body.style.overflow = "";
  };
}
