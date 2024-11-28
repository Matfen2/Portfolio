import { useState } from 'react';
import PropTypes from 'prop-types';
import './Collapse.scss';

function Collapse({ title, description, pict, synopsis, hrefSite, hrefGithub }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`project-card ${isHovered ? 'hovered' : ''} ${isOpen ? 'open' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={toggleCollapse}
    >
      <div className="project-header">
        {/* Image */}
        <img src={pict} alt={title} className="project-image" />
        {/* Title */}
        <h3 className="project-title">{title}</h3>
        {/* Description */}
        <p className="project-description">{description}</p>
      </div>
      {/* Expanded content */}
      {isOpen && (
        <div className="project-details">
          <p className="synopsis">{synopsis}</p>
          <div className="project-buttons">
            {hrefSite && (
              <a href={hrefSite} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Voir le site
              </a>
            )}
            {hrefGithub && (
              <a href={hrefGithub} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                Voir le code
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  pict: PropTypes.string.isRequired,
  synopsis: PropTypes.string,
  hrefSite: PropTypes.string,
  hrefGithub: PropTypes.string,
};

export default Collapse;
