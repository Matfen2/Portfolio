import PropTypes from 'prop-types';
import '../Offcanvas/Offcanvas.scss';

function Offcanvas({ scrollToSection }) {
  return (
    <div 
      className="offcanvas offcanvas-end" 
      tabIndex="-1" 
      id="offcanvasNavbar" 
      aria-labelledby="offcanvasNavbarLabel"
    >
      <div className="offcanvas-header">
        <button 
          type="button" 
          className="btnClose" 
          data-bs-dismiss="offcanvas" 
          aria-label="Close"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
      <div className="offcanvas-body">
        <nav className="navbar">
          <ul className="navbar-nav">
            <li>
              <button className="active-link" onClick={() => scrollToSection('about-section')}>
                A PROPOS DE MOI
              </button>
            </li>
            <li>
              <button className="active-link" onClick={() => scrollToSection('projects-section')}>
                PROJETS
              </button>
            </li>
            <li>
              <button className="active-link" onClick={() => scrollToSection('capacities-section')}>
                CAPACITES
              </button>
            </li>
            <li>
              <button className="active-link" onClick={() => scrollToSection('contact-section')}>
                CONTACT
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

Offcanvas.propTypes = {
  scrollToSection: PropTypes.func.isRequired,
};

export default Offcanvas;
