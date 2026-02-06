import "./AboutPreview.css";
import aboutImage from "../assets/about-sectionimagemainpage.jpg";

function AboutPreview() {
  const stats = [
    {
      icon: "🏗️",
      number: "100+",
      label: "Projects Completed",
      description: "Delivering excellence in every build, every time",
    },
    {
      icon: "👷",
      number: "50+",
      label: "Skilled Professionals",
      description: "Experts driven by precision, passion, and professionalism",
    },
    {
      icon: "🏆",
      number: "10+",
      label: "Industry Excellence",
      description: "Leading with innovative solutions that set standards",
    },
    {
      icon: "📦",
      number: "1K+",
      label: "Tons of Materials",
      description: "Providing quality resources to meet all project needs",
    },
  ];

  return (
    <section className="about-preview">
      <div className="container">
        <div className="about-header">
          <div className="about-left">
            <span className="about-label">About Us</span>
            <p className="about-description">
              Innovative Solutions for Modern Construction
            </p>
          </div>
          <h2 className="about-heading">
            Committed to Redefining Construction Standards with Innovation,
            Expertise, and Unwavering Dedication to Excellence
          </h2>
        </div>

        <div className="about-content">
          <div className="about-image-container">
            <img
              src={aboutImage}
              alt="Modern construction building"
              className="about-image"
            />
          </div>

          <div className="about-stats">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-number">{stat.number}</div>
                <h4 className="stat-label">{stat.label}</h4>
                <p className="stat-description">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPreview;
