import "./ServicesSection.css";

function ServicesSection() {
  const services = [
    {
      number: "01",
      title: "Architectural Design Services",
      description:
        "Our expert team creates modern, functional, and visually captivating architectural designs. We blend creativity with technical precision.",
      tagline: "Innovative designs",
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop",
    },
    {
      number: "02",
      title: "Construction Management Services",
      description:
        "From start to finish, we handle every aspect of your project with unmatched efficiency. Our services include scheduling, budgeting, and on-site coordination.",
      tagline: "Efficient management",
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop",
    },
    {
      number: "03",
      title: "Advanced Structural Engineering Expertise",
      description:
        "Delivering robust and reliable structural solutions with cutting-edge technology to ensure safety, durability, and efficiency in every build.",
      tagline: "Structural excellence",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
    },
  ];

  return (
    <section className="services-section">
      <div className="container">
        <div className="services-header">
          <span className="services-label">Our Services</span>
          <h2 className="services-heading">
            Comprehensive Construction Solutions Tailored to Your Vision
          </h2>
        </div>

        <div className="home-services-list">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <span className="service-number">{service.number}</span>

              <div className="service-top-row">
                <h3 className="service-title">{service.title}</h3>
                <div className="service-image-container">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="service-image"
                  />
                  <a href="/services" className="service-read-more">
                    Read More
                  </a>
                </div>
              </div>

              <p className="service-description">{service.description}</p>

              <span className="service-tagline">{service.tagline}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
