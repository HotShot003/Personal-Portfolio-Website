/* eslint-disable no-unused-vars */
import React from "react";
import Typical from "react-typical";
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
import certificate from "../../assets/certificate.pdf";
import leetlight from '../../assets/leetcode-light.svg';
import leetdark from '../../assets/leetcode-dark.svg';
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;
  const leet = theme === "light" ? leetlight : leetdark;

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
          <Typical
            steps={['Anurag', 1500, 'Anurag Padhiyar', 1500]}
            loop={Infinity}
            wrapper="span"
            className={styles.typicalText}
          />
        </h1>
        <h2>
          | Python | JavaScript | React.js | Frontend Web Development | Game Development
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
          <a
            href="https://leetcode.com/u/HotShotx003/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={leet} alt="LeetCode profile link" />
          </a>
        </span>
        <p className={styles.description}>
          I am passionate about learning new things and exploring more into technologies. I love coding in Python.
        </p>
        <br />
        <div className={styles.buttonContainer}>
          <a href={CV} target="_blank" rel="noopener noreferrer">
            <button className={styles.button}>View Resume</button>
          </a>
          <a href={certificate} target="_blank" rel="noopener noreferrer">
            <button className={styles.button}>View Certificate</button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;