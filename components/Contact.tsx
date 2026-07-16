"use client";

import { useEffect, useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    document.title = "Contact | Jeeshan";
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (name.trim() === "") {
      setError("Please enter your name.");
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    if (message.trim().length < 10) {
      setError("Message should be at least 10 characters.");
      return;
    }

    setSuccess("Message submitted successfully!");

    setName("");
    setEmail("");
    setMessage("");
  };

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
                <i className="fa-solid fa-envelope"></i> Email
              </h3>

              <a href="mailto:syedjeeshanjaved@gmail.com">
                syedjeeshanjaved@gmail.com
              </a>
            </div>

            <div className="contact-item">
              <h3>
                <i className="fa-brands fa-github"></i> GitHub
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
                <i className="fa-brands fa-linkedin"></i> LinkedIn
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
                <i className="fa-solid fa-location-dot"></i> Location
              </h3>

              <p>India</p>
            </div>
          </div>

          {/* Right Side */}
          <div className="contact-cta">
            <h3>Send Me a Message</h3>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <textarea
                rows={5}
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />

              <p>{message.length}/300 characters</p>

              {error && (
                <p style={{ color: "red", marginBottom: "10px" }}>
                  {error}
                </p>
              )}

              {success && (
                <p style={{ color: "limegreen", marginBottom: "10px" }}>
                  {success}
                </p>
              )}

              <button type="submit" className="btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}