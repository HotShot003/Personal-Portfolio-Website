/* eslint-disable no-unused-vars */
import React from "react";
import styles from "./SkillsStyles.module.css";
import checkMarkIcon from "../../assets/checkmark-dark.svg";
import SkillList from "../../common/SkillList";
function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skill</h1>

      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="HTML" />
        <SkillList src={checkMarkIcon} skill="CSS" />
        <SkillList src={checkMarkIcon} skill="JAVASCRIPT" />
        <SkillList src={checkMarkIcon} skill="PYTHON" />
        <SkillList src={checkMarkIcon} skill="PYGAME" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="REACT" />
        <SkillList src={checkMarkIcon} skill="BULMA CSS" />
        <SkillList src={checkMarkIcon} skill="SASS" />

      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="FRONTEND WEB DEVELOPER" />
        <SkillList src={checkMarkIcon} skill="GAME DEVELOPER " />
        <SkillList src={checkMarkIcon} skill="REACT DEVELOPER" />

      </div>
      <hr />
    </section>
  );
}

export default Skills;
