import styles from "./SkillsStyles.module.css";
import checkMarkIcon from "../../assets/checkIcon.png";
import SkillList from "../../common/SkillList";

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="HTML" />
        <SkillList src={checkMarkIcon} skill="JavaScript" />
        <SkillList src={checkMarkIcon} skill="CSS" />
        <SkillList src={checkMarkIcon} skill="React JS" />
        <SkillList src={checkMarkIcon} skill="Tailwind CSS" />
      </div>
      <hr />
      <h3 className="sectionSubTitle">Content Management System</h3>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Wordpress" />
        <SkillList src={checkMarkIcon} skill="Wix" />
        <SkillList src={checkMarkIcon} skill="Squarespace" />
      </div>
      <hr />
      <h3 className="sectionSubTitle">Wordpress Builders</h3>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Elementor" />
        <SkillList src={checkMarkIcon} skill="Oxygen" />
        <SkillList src={checkMarkIcon} skill="Divi" />
      </div>
    </section>
  );
}

export default Skills;
