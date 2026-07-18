import ProjectCard from "./ProjectCard";


type Project = {
  title: string;
  image: string;
  tech: string[];
  description: string;
  github: string;
};


const projects: Project[] = [

  {
    title: "Cloud Vault",

    image: "/images/cloud_vault.jpeg",

    tech: [
      "Flask",
      "Python",
      "SQLite",
      "HTML",
      "CSS",
    ],

    description:
      "Cloud Vault is a secure web application that enables users to upload, organize, and manage files through a clean and intuitive interface. Built using Flask and SQLite, it demonstrates user authentication, database integration, and file management.",

    github:
      "https://github.com/Jeehan06/cloud-vault",
  },


  {
    title: "Resume Ranker",

    image: "/images/resume_ranker.png",

    tech: [
      "Python",
      "Machine Learning",
      "NLP",
      "PDF Processing",
    ],

    description:
      "Resume Ranker is an AI-powered application that analyzes PDF resumes and ranks candidates against job roles using Natural Language Processing techniques. It extracts resume data, compares candidate skills with job requirements, and helps streamline the recruitment process.",

    github:
      "https://github.com/Jeehan06/resume-ranker-",
  },

];



export default function Projects() {

  return (

    <section className="projects" id="projects">

      <div className="content-card">


        <h2 className="section-title">
          Featured Projects
        </h2>


        <p className="section-subtitle">

          A selection of projects that showcase my skills in backend development,
          Python programming, web technologies, and problem solving.

        </p>



        {
          projects.map((project) => (

            <ProjectCard

              key={project.title}

              project={project}

            />

          ))
        }


      </div>

    </section>

  );

}