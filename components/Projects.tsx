export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="content-card">

        <h2 className="section-title">Featured Projects</h2>

        <p className="section-subtitle">
          A selection of projects that showcase my skills in backend development,
          Python programming, web technologies, and problem solving.
        </p>

        {/* ================= PROJECT 1 ================= */}

        <div className="featured-project">

          <div className="project-image">
            <img
              src="/images/cloud_vault.jpeg"
              alt="Cloud Vault"
            />
          </div>

          <div className="project-info">

            <h3>Cloud Vault</h3>

            <div className="project-tech">
              <span>Flask</span>
              <span>Python</span>
              <span>SQLite</span>
              <span>HTML</span>
              <span>CSS</span>
            </div>

            <p>
              Cloud Vault is a secure web application that enables users to
              upload, organize, and manage files through a clean and intuitive
              interface. Built using Flask and SQLite, it demonstrates user
              authentication, database integration, and file management.
            </p>

            <div className="project-buttons">
              <a
                href="https://github.com/Jeehan06/cloud-vault"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                GitHub
              </a>
            </div>

          </div>

        </div>

        {/* ================= PROJECT 2 ================= */}

        <div className="featured-project">

          <div className="project-image">
            <img
              src="/images/resume_ranker.png"
              alt="Resume Ranker"
            />
          </div>

          <div className="project-info">

            <h3>Resume Ranker</h3>

            <div className="project-tech">
              <span>Python</span>
              <span>Machine Learning</span>
              <span>NLP</span>
              <span>PDF Processing</span>
            </div>

            <p>
              Resume Ranker is an AI-powered application that analyzes PDF
              resumes and ranks candidates against job roles using Natural
              Language Processing techniques. It extracts resume data,
              compares candidate skills with job requirements, and helps
              streamline the recruitment process.
            </p>

            <div className="project-buttons">
              <a
                href="https://github.com/Jeehan06/resume-ranker-"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                GitHub
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}