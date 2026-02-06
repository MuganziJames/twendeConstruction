import { Link } from "react-router-dom";
import "./CTASection.css";

function CTASection() {
  return (
    <section className="cta-section">
      <div className="container cta-container">
        <h2 className="cta-title">Ready to Build Your Dream Project?</h2>
        <p className="cta-description">
          Let's transform your vision into reality with our expert construction
          services and unwavering commitment to excellence
        </p>
        <div className="cta-buttons">
          <Link to="/contact" className="cta-btn-primary">
            Start Your Project →
          </Link>
          <Link to="/services" className="cta-btn-secondary">
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
