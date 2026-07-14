import Image from "next/image";

type HeroProps = {
  name: string;
  role: string;
  description: string;
};

export default function Hero({
  name,
  role,
  description,
}: HeroProps) {
  return (
    <section className="hero">

      <div className="hero-text">

        <p className="hero-tag">
          👋 Hello, I'm
        </p>

        <h1>{name}</h1>

        <h2>{role}</h2>

        <p className="hero-description">
          {description}
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