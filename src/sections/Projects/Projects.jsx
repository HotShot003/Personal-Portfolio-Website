/* eslint-disable no-unused-vars */

import styles from "./ProjectsStyles.module.css";
import fps from '../../assets/fpsgameproject.png'
import ProjectCard from "../../common/ProjectCard";
function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
      <ProjectCard
          src={fps}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Fps-Video-Game"
          p="First-Person-Shooter (FPS) Game "
        />
        
      </div>
    </section>
  );
}

export default Projects;
Projects;
