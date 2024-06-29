/* eslint-disable no-unused-vars */

import styles from "./ProjectsStyles.module.css";
import fps from "../../assets/fpsgameproject.png";
import news from '../../assets/newsaggregator.png'
import ProjectCard from "../../common/ProjectCard";
import res from '../../assets/restaurentwebsite.png'
import wet from '../../assets/weatherapp.png'
import box from '../../assets/boxjumping.png'
import D from '../../assets/3dwebgame.png'
import dsa from '../../assets/dsa.png'
function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={fps}
          link="https://github.com/HotShot003/FPS-Video-Game"
          h3="Fps-Video-Game"
          p=""
        />
        <ProjectCard
          src={news}
          link="https://github.com/HotShot003/News-Aggregator"
          h3="News Aggregator App"
          p=""
        />
        <ProjectCard
          src={res}
          link="https://github.com/HotShot003/react-restaurent-website"
          h3="Restaurent Website"
          p=""
        />
        <ProjectCard
          src={wet}
          link="https://github.com/HotShot003/WeatherApp"
          h3="Weather App"
          p=""
        />
        <ProjectCard
          src={box}
          link="https://github.com/HotShot003/Box-Jump-Animation"
          h3="Box Jumping"
          p=""
        />
        <ProjectCard
          src={D}
          link="https://github.com/HotShot003/3D-Web-Game"
          h3="3D Web Game"
          p=""
        />
        <ProjectCard
          src={dsa}
          link="https://github.com/HotShot003/Data-Structure-Practice-Questions"
          h3="DSA-Practice-Questions"
          p=""
        />
      </div>
    </section>
  );
}

export default Projects;
Projects;
