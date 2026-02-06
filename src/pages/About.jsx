import { Link } from "react-router-dom";
import "./About.css";
import aboutImage from "../assets/aboutpageimage.jpg";

function About() {
  const stats = [
    { number: "100+", label: "Projects Completed" },
    { number: "50+", label: "Licensed Professionals" },
    { number: "98%", label: "Client Satisfaction Rate" },
    { number: "5+", label: "Years of Experience" },
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero-section">
        <div className="container">
          <div className="about-hero-content">
            <div className="about-hero-left">
              <h1>About Us</h1>
            </div>
            <div className="about-hero-right">
              <p>
                We are committed to creating a safe and reliable environment
                where you can bring your construction dreams to life through
                expert guidance, innovative solutions, and achieve your project
                goals with excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image and Stats Section */}
      <section className="about-image-stats">
        <div className="container">
          <div className="about-main-image">
            <img src={aboutImage} alt="Mizuho Enterprise Team" />
          </div>

          <div className="about-stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="about-stat-item">
                <h2 className="stat-number">{stat.number}</h2>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="about-mission-vision">
        <div className="container">
          <div className="mission-vision-content">
            <div className="mission-vision-left">
              <h2>Empowering Kenya's Construction Excellence</h2>
            </div>
            <div className="mission-vision-right">
              <div className="vision-block">
                <h3>OUR VISION</h3>
                <p>
                  To be the leading construction platform, providing accessible,
                  comprehensive, and innovative solutions for residential and
                  commercial well-being across Kenya and beyond.
                </p>
              </div>
              <div className="mission-block">
                <h3>OUR MISSION</h3>
                <p>
                  To support individuals in achieving structural and functional
                  excellence through tailored strategy, quality construction,
                  ensuring everyone has access to professional care and superior
                  craftsmanship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Project?</h2>
            <p>
              Let's discuss how Mizuho Enterprise can bring your construction
              vision to life with our expertise and dedication.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn-primary">
                Get in Touch
              </Link>
              <Link to="/services" className="btn-secondary">
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
