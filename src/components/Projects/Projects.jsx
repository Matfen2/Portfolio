import Card from '../Card/Card';
import "../Projects/Projects.scss";
import projects from '../../data/projects';

function Projects() {
  return (
    <section id="projects-section" className="projects">
      <h2 className="nameProjects">MES PROJETS</h2>
      <div className="listProjects row">
        {projects.map((project) => (
          <div className="col-lg-4 col-md-6 mb-4" key={project.id}>
            <Card 
              title={project.title}
              cover={project.imgShow}
              description={project.description}
              problem={project.problem}
              pictures={project.pictures}
              hrefSite={project.hrefSite}      
              hrefGithub={project.hrefGithub} 
              tools={[project.firstTools, project.secondTools]}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
