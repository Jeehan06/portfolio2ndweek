import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero">

      <div className="hero-text">

        <p className="hero-tag">
          👋 Hello, I'm
        </p>

        <h1>Jeeshan</h1>

        <h2>Full Stack Developer</h2>

        <p className="hero-description">
          I build modern web applications using Django, HTML, CSS and
          JavaScript.
        </p>

        <div className="hero-buttons">

          <a href="#contact" className="btn-primary">
            Contact Me
          </a>

          <a href="#projects" className="btn-secondary">
            View Projects
          </a>

        </div>

      </div>

      <div className="hero-image">

        <Image
          src="/images/profileee.jpeg"
          alt="Profile"
          width={450}
          height={450}
          priority
        />

      </div>

    </section>
  );
}