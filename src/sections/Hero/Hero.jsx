import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/mypic.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/cv.pdf";

import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Anurag Padhiyar"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Toggle color mode"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Anurag
          <br />
          Padhiyar
        </h1>
        <h2>
          Pursuing Computer Science and Engineering at Parul University
          <br /><br />
          | Python | JavaScript | React.js | Frontend Web Development | Game Development
          <br />
        </h2>
        <span>
          <a
            href="https://twitter.com/AnuragPad6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitterIcon} alt="Twitter profile link" />
          </a>
          <a
            href="https://github.com/HotShot003"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubIcon} alt="GitHub profile link" />
          </a>
          <a
            href="https://www.linkedin.com/in/anurag-padhiyar-149210257/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinIcon} alt="LinkedIn profile link" />
          </a>
        </span>
        <p className={styles.description}>
          I am passionate about learning new things and exploring more into technologies. I love coding in Python.
        </p>
        <a href={CV} download>
          <button className={styles.hover}>Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;