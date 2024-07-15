import styles from "./ProjectsStyles.module.css";
import aboutme from "../../assets/Resume_Sample.png";
import ProjectCard from "../../common/ProjectCard";
import contactlist from "../../assets/Contact_Form.png";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectContainer}>
        <ProjectCard
          src={aboutme}
          link="https://scadamar.github.io/about-me/"
          h3="About Me"
          p="Sample resume using html and css"
        />
        <ProjectCard
          src={contactlist}
          link="https://github.com/ScadAmar/contact-list-app.git"
          h3="Contact Form"
          p="Sample contact form using Laravel"
        />

        <ProjectCard
          src={contactlist}
          link="https://github.com/ScadAmar/contact-list-app.git"
          h3="Contact Form"
          p="Sample contact form using Laravel"
        />
        <ProjectCard
          src={contactlist}
          link="https://github.com/ScadAmar/contact-list-app.git"
          h3="Contact Form"
          p="Sample contact form using Laravel"
        />
      </div>
    </section>
  );
}

export default Projects;
