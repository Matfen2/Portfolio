"use client";

import { useState, useEffect } from "react";
import "../Header/Header.scss"; // Importation des styles SASS

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    setScrolled(window.scrollY > 50); // Définit l'état lorsque l'utilisateur défile
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" }); // Défilement fluide vers une section
    }
  };

  return (
    <header className={scrolled ? "scrolled" : ""}>
      <nav>
        <ul>
          <li className={scrolled ? "scrolled" : ""} onClick={() => scrollToSection("about-section")}>A PROPOS DE MOI</li>
          <li className={scrolled ? "scrolled" : ""} onClick={() => scrollToSection("capacities-section")}>CAPACITES</li>
          <li className={scrolled ? "scrolled" : ""} onClick={() => scrollToSection("projects-section")}>PROJETS</li>
          <li className={scrolled ? "scrolled" : ""} onClick={() => scrollToSection("contact-section")}>CONTACT</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
