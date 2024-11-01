import { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../Card/Card.scss';

function Card({ title, cover, description, pictures, hrefSite, hrefGithub, tools }) {
  const [isHovered, setIsHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <>
      <div 
        className="card"
        onClick={handleShow}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={cover} alt={title} className="card-image" />
        <div className={`infoLocation ${isHovered ? 'visible' : ''}`}>
          <p>{title}</p>
        </div>
      </div>

      <Modal show={showModal} onHide={handleClose} className='modal fade' centered>
        <div className="modal-content">
          <Modal.Body>
            <Button variant="secondary" onClick={handleClose} className="close-btn">
              <i className="fa-solid fa-xmark"></i>
            </Button>

            <Swiper
              spaceBetween={30}
              pagination={{ clickable: true }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {pictures.map((picture, index) => (
                <SwiperSlide key={index}>
                  <img src={picture} alt={`${title} - Slide ${index + 1}`} className="img-fluid mb-3 w-100" id='showProject' />
                </SwiperSlide>
              ))}
            </Swiper>

            <p className='description'>{description}</p>
            <div className="modal-tools d-flex mt-4">
              <div className='row'>
                <div className='col-lg-6 listHref'>
                  <a href={hrefSite} target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-dribbble"></i></a>
                  <a href={hrefGithub} target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a>
                </div>
                <div className='col-lg-6 listTools'>
                  {tools.map((tool, index) => (
                    <img src={tool} alt={`Tool ${index}`} className="tool-icon mx-2 img-fluid w-100" key={index} />
                  ))}
                </div>
              </div>
            </div>
          </Modal.Body>
        </div>
      </Modal>
    </>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  problem: PropTypes.string.isRequired,
  pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
  hrefSite: PropTypes.string.isRequired,
  hrefGithub: PropTypes.string.isRequired,
  tools: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Card;
