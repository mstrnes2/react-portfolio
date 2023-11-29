import Project from "../components/Projects";

function Portfolio() {
  // fill in the required data, image file should be in the assets/projects folder and name should match the "default as " statment in index.js
  const projects = [
    {
      name: "ShelfMovies",
      description: "HTML/JS/CSS",
      link: "https://miekooooo.github.io/project-1/ ",
      repo: "https://github.com/Miekooooo/project-1",
      image: "movie",
    },
    {
      name: "Weather-Dashboard",
      description: "HTML/JS/CSS",
      link: "https://mstrnes2.github.io/weather-dashboard/",
      repo: "https://github.com/mstrnes2/weather-dashboard",
      image: "weather",
    },
    {
      name: "social-network-api",
      description: "JS",
      repo: "https://github.com/mstrnes2/social-network-api",
      image: "social",
    },
    {
      name: "Text-editor",
      description: "HTML/JS/CSS",
      link: "https://vast-atoll-50595-74292f751e5b.herokuapp.com/",
      repo: "https://github.com/mstrnes2/text-editor",
      image: "text",
    },
    {
      name: "Mischief-Managed",
      description: "Handlebars/JS/CSS",
      link: "https://mischief-managed-04c91ebdf0c9.herokuapp.com/",
      repo: "https://github.com/joseph-s-foster/Mischief-Managed",
      image: "mischief",
    },
    {
      name: "Password-generator",
      description: "HTML/JS/CSS",
      link: "https://mstrnes2.github.io/password-generator/",
      repo: "https://github.com/mstrnes2/password-generator.com/mstrnes2",
      image: "password",
    },
  ];

  return (
    <div className="container">
    <div className="projects-container">
      {projects.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </div>
  </div>
  );
}

export default Portfolio;