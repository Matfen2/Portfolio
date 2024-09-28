import { useState } from 'react';
import PropTypes from 'prop-types';
import './Collapse.scss';

function Collapse({ icon, capacitie, details, listCapacities }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div 
      className={`capacitie-card ${isHovered ? 'hovered' : ''} ${isOpen ? 'open' : ''}`} 
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)} 
      onClick={toggleCollapse}
    >
      <div className="capacitie-header">
        <div className="icon" dangerouslySetInnerHTML={{ __html: icon }} />
        <p className="capacitie-title">{capacitie}</p>
        <p className={`capacitie-details ${isHovered ? 'show' : ''}`}>{details}</p>
        <i className={`chevron-icon fa-solid fa-chevron-down ${isOpen ? 'open' : ''}`}></i>
      </div>
      <div className={`collapse-content ${isOpen ? 'open' : ''}`}>
        <ul className="listCapacities">
          {listCapacities.map((capacity, index) => (
            <li key={index}>{capacity}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Collapse.propTypes = {
  icon: PropTypes.string.isRequired,
  capacitie: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
  listCapacities: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Collapse;
