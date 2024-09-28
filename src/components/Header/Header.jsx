import "../Header/Header.scss";
import Offcanvas from "../Offcanvas/Offcanvas";
import { useState, useEffect } from "react";

function Header() {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <nav className="navbar">
          <ul className="navbar-nav">
            <li>
              <button className="active-link" onClick={() => scrollToSection('about-section')} aria-label="À propos de moi">
                A PROPOS DE MOI
              </button>
            </li>
            <li>
              <button className="active-link" onClick={() => scrollToSection('projects-section')} aria-label="Projets">
                PROJETS
              </button>
            </li>
            <li>
              <button className="active-link" onClick={() => scrollToSection('capacities-section')} aria-label="Capacités">
                CAPACITES
              </button>
            </li>
            <li>
              <button className="active-link" onClick={() => scrollToSection('contact-section')} aria-label="Contact">
                CONTACT
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <button 
          className="btnCanvas" 
          type="button" 
          data-bs-toggle="offcanvas" 
          data-bs-target="#offcanvasNavbar" 
          aria-controls="offcanvasNavbar"
          aria-label="Menu"
        >
          <i className="fa-solid fa-bars"></i>
      </button>

      <Offcanvas scrollToSection={scrollToSection} />
    </>
  );
}

export default Header;
