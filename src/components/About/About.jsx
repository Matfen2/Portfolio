import PhotoMe from "../../assets/photoMe.jpg";
import "../About/About.scss";

function About() {
  return (
    <section id="about-section" className="about">
      <h2 className="nameAbout">A PROPOS DE MOI</h2>
      <div className="about-content">
        <div className="row">
          <div className="col-lg-4 photo-section">
          <img src={PhotoMe} className="img-fluid" alt="Profile" />
          </div>
          <div className="col-lg-8 text-section">
            <p className="web">Je suis passionné par le développement front-end et le web design, étant sensibilisé à l&apos;expérience utilisateur et l&apos;accessibilité, je développe des projets centrés autour de l&apos;Humain.</p>
            <p className="gaming">Grand passionné des jeux vidéos, je souhaite créer des sites autour de ce média.</p>
            <div className="listBtnInfo">
            <a href="/src/assets/CV Mathieu FENOUIL.pdf" download="CV MATHIEU FENOUIL" className="btn-cv">MON CV</a>
            <a href="https://github.com/Matfen2/" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;