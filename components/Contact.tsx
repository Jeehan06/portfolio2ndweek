export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="content-card">

        <h2 className="section-title">Let's Connect</h2>

        <p className="section-subtitle">
          Whether you have an internship opportunity, a project idea,
          or just want to connect, I'd love to hear from you.
        </p>

        <div className="contact-container">

          {/* Left Side */}
          <div className="contact-info">

            <div className="contact-item">

              <h3>
                <i className="fa-solid fa-envelope"></i>
                {" "}Email
              </h3>

              <a href="mailto:syedjeeshanjaved@gmail.com">
                syedjeeshanjaved@gmail.com
              </a>

            </div>

            <div className="contact-item">

              <h3>
                <i className="fa-brands fa-github"></i>
                {" "}GitHub
              </h3>

              <a
                href="https://github.com/Jeehan06"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/Jeehan06
              </a>

            </div>

            <div className="contact-item">

              <h3>
                <i className="fa-brands fa-linkedin"></i>
                {" "}LinkedIn
              </h3>

              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/yourprofile
              </a>

            </div>

            <div className="contact-item">

              <h3>
                <i className="fa-solid fa-location-dot"></i>
                {" "}Location
              </h3>

              <p>India</p>

            </div>

          </div>

          {/* Right Side */}
          <div className="contact-cta">

            <h3>Ready to collaborate?</h3>

            <p>
              I'm currently looking for internship opportunities where I
              can contribute, learn, and grow as a backend developer.
              If you'd like to work together or simply connect, feel free
              to reach out.
            </p>

            <a
              href="mailto:syedjeeshanjaved@gmail.com"
              className="btn-primary"
            >
              Send Message
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}