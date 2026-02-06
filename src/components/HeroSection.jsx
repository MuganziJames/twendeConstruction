import { Link } from "react-router-dom";
import "./HeroSection.css";

function HeroSection() {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Redefining Modern Construction</h1>
          <p className="hero-subtitle">
            Blending Cutting-Edge Technology with Timeless Craftsmanship to
            Deliver Exceptional Construction Solutions
          </p>
          <div className="hero-cta">
            <Link to="/contact" className="btn btn-primary btn-large">
              Discuss Project →
            </Link>
          </div>

          <div className="hero-testimonial">
            <div className="testimonial-header">
              <span className="testimonial-title">
                Consumers
                <br />
                Testimonials
              </span>
              <div className="testimonial-icon">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className="testimonial-rating">
              <div className="testimonial-score">
                4.9/5.0
                <span className="testimonial-stars">⭐</span>
              </div>
              <p className="testimonial-reviews">Reviews</p>
            </div>
          </div>
        </div>

        <div className="hero-image-container">
          <img
            src="https://pixabay.com/images/download/construction-site-2733678_1920.jpg"
            alt="Construction workers on site"
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
