import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/ScadAmar.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.png";
import linkedinLight from "../../assets/linkedin.svg";
import githubLight from "../../assets/github.svg";
import linkedinDark from "../../assets/linkedinDark.svg";
import githubDark from "../../assets/githubDark.svg";
import CV from "../../assets/Scad_Resume.pdf";
import { useTheme } from "../../common/ThemeContext.jsx";

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme == "light" ? sun : moon;
  const linkedinIcon = theme == "light" ? linkedinLight : linkedinDark;
  const githubIcon = theme == "light" ? githubLight : githubDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile picture of Scad Kevin Amar"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Scad Kevin <br />
          Amar
        </h1>
        <h2>
          Front-End Developer <br />
          Electronics Engineer
        </h2>
        <span>
          <a href="https://linkedin.com/in/scadkevinamar" target="_blank">
            <img src={linkedinIcon} alt="LinkedIn Icon" />
          </a>
          <a href="https://github.com/ScadAmar" target="_blank">
            <img src={githubIcon} alt="Github Icon" />
          </a>
        </span>
        <p className={styles.description}>
          I bring a detail-oriented approach and a passion for creating
          user-friendly, innovative web solutions.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
