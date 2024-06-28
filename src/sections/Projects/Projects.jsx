/* eslint-disable no-unused-vars */

import React from "react";
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
          p="development of an exciting First-Person Shooter (FPS) game project where I've implemented smart NPC (Non-Player Character) behaviors to enhance the gaming experience."
        />
        
      </div>
    </section>
  );
}

export default Projects;
Projects;
