import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="HTML" />
        <SkillList src={checkMarkIcon} skill="CSS" />
        <SkillList src={checkMarkIcon} skill="JAVASCRIPT" />
        <SkillList src={checkMarkIcon} skill="PYTHON" />
        <SkillList src={checkMarkIcon} skill="PYGAME" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="REACTJS" />
        <SkillList src={checkMarkIcon} skill="VITE" />
        <SkillList src={checkMarkIcon} skill="YARN" />
        <SkillList src={checkMarkIcon} skill="BULMA CSS FRAMEWORK" />
        <SkillList src={checkMarkIcon} skill="SASS" />
    
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="FRONTEND WEB DEVELOPEMENT" />
        <SkillList src={checkMarkIcon} skill="GAME DEVELOPMENT " />
        <SkillList src={checkMarkIcon} skill="GIT" />
        <SkillList src={checkMarkIcon} skill="GITHUB" />
        <SkillList src={checkMarkIcon} skill="MYSQL" />
        <SkillList src={checkMarkIcon} skill="MONGODB" />

      </div>
    </section>
  );
}

export default Skills;
