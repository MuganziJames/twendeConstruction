import { Link } from "react-router-dom";
import "./Services.css";
import serviceImage from "../assets/servicepage.jpg";

function Services() {
  const services = [
    {
      number: "01",
      title: "Architectural Design",
      description:
        "Creating innovative and functional designs that blend aesthetics with structural integrity for timeless construction excellence.",
      features: [
        "Custom design solutions",
        "3D modeling and visualization",
        "Sustainable architecture",
        "Interior and exterior planning",
      ],
    },
    {
      number: "02",
      title: "Construction Management",
      description:
        "Comprehensive project oversight ensuring every phase is executed flawlessly, on time, and within budget.",
      features: [
        "Project planning and scheduling",
        "Budget management",
        "Quality control and inspection",
        "Risk mitigation strategies",
      ],
    },
    {
      number: "03",
      title: "Structural Engineering",
      description:
        "Expert engineering solutions that guarantee safety, durability, and compliance with the highest industry standards.",
      features: [
        "Load-bearing analysis",
        "Foundation design",
        "Seismic and wind engineering",
        "Material specification",
      ],
    },
    {
      number: "04",
      title: "Renovation & Remodeling",
      description:
        "Transforming existing spaces into modern, functional environments while preserving structural integrity and character.",
      features: [
        "Interior renovations",
        "Building extensions",
        "Modernization upgrades",
        "Heritage restoration",
      ],
    },
    {
      number: "05",
      title: "Project Consultation",
      description:
        "Professional guidance from concept to completion, helping you make informed decisions for your construction project.",
      features: [
        "Feasibility studies",
        "Cost estimation",
        "Regulatory compliance",
        "Site assessment",
      ],
    },
    {
      number: "06",
      title: "Interior Finishing",
      description:
        "Premium interior finishing services that bring your spaces to life with attention to detail and quality craftsmanship.",
      features: [
        "Flooring and tiling",
        "Painting and wall finishes",
        "Ceiling and lighting design",
        "Custom cabinetry and fixtures",
      ],
    },
  ];

  return (
    <div className="services-page">
      {/* Hero */}
      <section className="services-hero">
        <div className="container">
          <div className="services-hero-content">
            <div className="services-hero-left">
              <span className="services-tag">Our Services</span>
              <h1>What We Do</h1>
              <p>
                From concept to completion, Mizuho Enterprise delivers
                comprehensive construction solutions tailored to meet the unique
                needs of every project across Kenya.
              </p>
            </div>
            <div className="services-hero-right">
              <img src={serviceImage} alt="Mizuho Enterprise Services" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-list">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-item">
                <span className="service-num">{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="service-features-list">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="services-process">
        <div className="container">
          <h2 className="process-title">How We Work</h2>
          <div className="process-grid">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Consultation</h3>
              <p>
                We listen to your vision, assess your needs, and provide expert
                advice to shape the project direction.
              </p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Planning & Design</h3>
              <p>
                Our team develops detailed plans, timelines, and budgets to
                ensure a smooth construction process.
              </p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Construction</h3>
              <p>
                Skilled professionals execute the project with precision,
                quality materials, and strict safety protocols.
              </p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Delivery</h3>
              <p>
                We complete a thorough inspection and hand over a finished
                project that exceeds expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="services-cta">
        <div className="container">
          <div className="services-cta-content">
            <h2>Have a Project in Mind?</h2>
            <p>
              Let's talk about how Mizuho Enterprise can bring your construction
              vision to life.
            </p>
            <Link to="/contact" className="btn-primary">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
