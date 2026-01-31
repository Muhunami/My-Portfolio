"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const mobileMenuBtn = document.getElementById("mobileMenuBtn");
    const navLinks = document.getElementById("navLinks");
    const header = document.querySelector("header");
    const contactForm = document.getElementById(
      "contactForm"
    ) as HTMLFormElement | null;
    const fadeElements = Array.from(
      document.querySelectorAll<HTMLElement>(".fade-in")
    );
    const navLinkItems = Array.from(
      document.querySelectorAll<HTMLAnchorElement>(".nav-links a")
    );
    const anchorLinks = Array.from(
      document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]')
    );

    const toggleMenu = () => {
      if (!navLinks || !mobileMenuBtn) {
        return;
      }
      navLinks.classList.toggle("active");
      mobileMenuBtn.innerHTML = navLinks.classList.contains("active")
        ? '<i class="fas fa-times"></i>'
        : '<i class="fas fa-bars"></i>';
    };

    const closeMenu = () => {
      if (!navLinks || !mobileMenuBtn) {
        return;
      }
      navLinks.classList.remove("active");
      mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    };

    const fadeInOnScroll = () => {
      fadeElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add("visible");
          const progressBar = element.querySelector<HTMLElement>(".skill-progress");
          if (progressBar && !progressBar.style.width) {
            const width = progressBar.getAttribute("data-width");
            if (width) {
              progressBar.style.width = `${width}%`;
            }
          }
        }
      });
    };

    const handleAnchorClick = (event: Event) => {
      const target = event.currentTarget as HTMLAnchorElement | null;
      if (!target) {
        return;
      }
      const targetId = target.getAttribute("href");
      if (!targetId || targetId === "#") {
        return;
      }
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        event.preventDefault();
        window.scrollTo({
          top: targetElement.getBoundingClientRect().top + window.scrollY - 80,
          behavior: "smooth",
        });
      }
    };

    const handleFormSubmit = (event: Event) => {
      event.preventDefault();
      alert("Thank you for your message! I'll get back to you soon.");
      contactForm?.reset();
    };

    const handleScrollHeader = () => {
      if (!header) {
        return;
      }
      if (window.scrollY > 100) {
        header.style.padding = "15px 0";
        header.style.boxShadow = "0 5px 20px rgba(0, 0, 0, 0.1)";
      } else {
        header.style.padding = "20px 0";
        header.style.boxShadow = "0 5px 20px rgba(0, 0, 0, 0.05)";
      }
    };

    mobileMenuBtn?.addEventListener("click", toggleMenu);
    navLinkItems.forEach((link) => link.addEventListener("click", closeMenu));
    anchorLinks.forEach((link) => link.addEventListener("click", handleAnchorClick));
    contactForm?.addEventListener("submit", handleFormSubmit);

    fadeInOnScroll();
    window.addEventListener("scroll", fadeInOnScroll);
    window.addEventListener("scroll", handleScrollHeader);

    return () => {
      mobileMenuBtn?.removeEventListener("click", toggleMenu);
      navLinkItems.forEach((link) => link.removeEventListener("click", closeMenu));
      anchorLinks.forEach((link) =>
        link.removeEventListener("click", handleAnchorClick)
      );
      contactForm?.removeEventListener("submit", handleFormSubmit);
      window.removeEventListener("scroll", fadeInOnScroll);
      window.removeEventListener("scroll", handleScrollHeader);
    };
  }, []);

  return (
    <>
      <header>
        <div className="container">
          <nav className="navbar">
            <a href="#home" className="logo">
              Manuel
            </a>
            <button className="mobile-menu-btn" id="mobileMenuBtn" type="button">
              <i className="fas fa-bars" />
            </button>
            <ul className="nav-links" id="navLinks">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content fade-in">
            <h1>Manuel Muhunami</h1>
            <p>I build ideas in code, writing, and conversation.</p>
            <div className="hero-btns">
              <a href="#projects" className="btn btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn btn-secondary">
                Contact Me
              </a>
            </div>
          </div>
        </div>
        <div className="hero-bg" />
      </section>

      <section id="about">
        <div className="container">
          <h2 className="section-title fade-in">About Me</h2>
          <div className="about-content">
            <div className="about-text fade-in">
              <p>
                I'm a 16-year-old Kenyan student passionate about the
                intersection of technology, creativity, and human expression.
                For me, coding is not just about building applications - it's a
                form of creative problem-solving that brings ideas to life.
              </p>
              <p>
                My interests span programming, writing, debate, and digital
                innovation. I'm particularly fascinated by AI's potential to
                augment human creativity and solve complex challenges facing
                communities like ours in Kenya.
              </p>
              <p>
                When I'm not coding or writing, you'll find me engaged in
                debates, researching emerging technologies, or collaborating on
                projects that aim to make a meaningful impact. I believe in the
                power of well-articulated ideas to drive change.
              </p>
              <a href="#contact" className="btn btn-primary">
                Let's Connect
              </a>
            </div>
            <div className="about-visual fade-in">
              <div className="visual-card">
                <div className="card-icon">
                  <i className="fas fa-lightbulb" />
                </div>
                <h3>Creative Technologist</h3>
                <p>
                  Blending technical skills with creative thinking to build
                  meaningful solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects">
        <div className="container">
          <h2 className="section-title fade-in">My Projects</h2>
          <div className="projects-grid">
            <div className="project-card fade-in">
              <div className="project-img">
                <i className="fas fa-robot" />
              </div>
              <div className="project-content">
                <h3>AI Debate Assistant</h3>
                <p>
                  An AI-powered tool that helps debaters structure arguments,
                  find evidence, and anticipate counterpoints. Built with Python
                  and natural language processing.
                </p>
                <div className="tech-tags">
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">NLP</span>
                  <span className="tech-tag">Flask</span>
                </div>
                <a href="#" className="btn btn-secondary">
                  View Details
                </a>
              </div>
            </div>

            <div className="project-card fade-in">
              <div className="project-img">
                <i className="fas fa-book-open" />
              </div>
              <div className="project-content">
                <h3>Digital Student Journal</h3>
                <p>
                  A platform for Kenyan students to publish essays, research,
                  and creative writing. Features categorization, peer feedback,
                  and writing analytics.
                </p>
                <div className="tech-tags">
                  <span className="tech-tag">JavaScript</span>
                  <span className="tech-tag">Node.js</span>
                  <span className="tech-tag">MongoDB</span>
                </div>
                <a href="#" className="btn btn-secondary">
                  View Details
                </a>
              </div>
            </div>

            <div className="project-card fade-in">
              <div className="project-img">
                <i className="fas fa-chart-line" />
              </div>
              <div className="project-content">
                <h3>Community Tech Literacy Dashboard</h3>
                <p>
                  Interactive dashboard visualizing technology adoption and
                  digital literacy trends in local Kenyan communities. Created
                  for a community research project.
                </p>
                <div className="tech-tags">
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">D3.js</span>
                  <span className="tech-tag">API</span>
                </div>
                <a href="#" className="btn btn-secondary">
                  View Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills">
        <div className="container">
          <h2 className="section-title fade-in">Skills &amp; Expertise</h2>
          <div className="skills-container">
            <div className="skill-item fade-in">
              <div className="skill-icon">
                <i className="fas fa-code" />
              </div>
              <h3>Programming</h3>
              <p>Python, JavaScript, HTML/CSS, Web Development</p>
              <div className="skill-bar">
                <div className="skill-progress" data-width="85" />
              </div>
            </div>

            <div className="skill-item fade-in">
              <div className="skill-icon">
                <i className="fas fa-pen-fancy" />
              </div>
              <h3>Writing</h3>
              <p>Technical writing, essays, research papers, creative writing</p>
              <div className="skill-bar">
                <div className="skill-progress" data-width="90" />
              </div>
            </div>

            <div className="skill-item fade-in">
              <div className="skill-icon">
                <i className="fas fa-microphone" />
              </div>
              <h3>Public Speaking</h3>
              <p>Debate, presentations, persuasive communication</p>
              <div className="skill-bar">
                <div className="skill-progress" data-width="80" />
              </div>
            </div>

            <div className="skill-item fade-in">
              <div className="skill-icon">
                <i className="fas fa-lightbulb" />
              </div>
              <h3>Creative Problem Solving</h3>
              <p>Innovative thinking, design thinking, solution development</p>
              <div className="skill-bar">
                <div className="skill-progress" data-width="88" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="container">
          <h2 className="section-title fade-in">Get In Touch</h2>
          <div className="contact-container">
            <div className="contact-info fade-in">
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-envelope" />
                </div>
                <div>
                  <h3>Email</h3>
                  <p>muhunanimg@gmail.com</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-map-marker-alt" />
                </div>
                <div>
                  <h3>Location</h3>
                  <p>Nairobi, Kenya</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-graduation-cap" />
                </div>
                <div>
                  <h3>Education</h3>
                  <p>
                    High School Student
                    <br />
                    Focus: Technology &amp; Creative Arts
                  </p>
                </div>
              </div>
            </div>

            <div className="contact-form fade-in">
              <form id="contactForm">
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Subject" required />
                </div>
                <div className="form-group">
                  <textarea rows={5} placeholder="Your Message" required />
                </div>
                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <a href="#home" className="logo" style={{ color: "#ffffff" }}>
            Manuel Muhunami
          </a>
          <p style={{ marginTop: 20, opacity: 0.8 }}>
            Building the future with code, words, and ideas.
          </p>

          <div className="social-links">
            <a href="#" className="social-icon">
              <i className="fab fa-github" />
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-linkedin-in" />
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-twitter" />
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-medium" />
            </a>
          </div>

          <div className="copyright">
            <p>&copy; 2023 Manuel Muhunami. All rights reserved.</p>
            <p style={{ marginTop: 10 }}>Nairobi, Kenya</p>
          </div>
        </div>
      </footer>
    </>
  );
}
