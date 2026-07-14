type Project = {
  title: string;
  image: string;
  tech: string[];
  description: string;
  github: string;
};

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="featured-project">

      <div className="project-image">
        <img
          src={project.image}
          alt={project.title}
        />
      </div>

      <div className="project-info">

        <h3>{project.title}</h3>

        <div className="project-tech">
          {project.tech.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        <p>{project.description}</p>

        <div className="project-buttons">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            GitHub
          </a>
        </div>

      </div>

    </div>
  );
}