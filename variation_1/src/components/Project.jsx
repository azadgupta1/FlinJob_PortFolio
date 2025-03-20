const projects = [
    {
      title: "AI Interview Analyzer",
      description: "AI-driven interview platform analyzing facial expressions.",
      link: "https://github.com/yourproject",
    },
    {
      title: "Social Media App",
      description: "Built a full-stack social media app with Prisma & PostgreSQL.",
      link: "https://yourapp.com",
    },
    {
      title: "Grocery Store ERP",
      description: "Business management system for local grocery stores.",
      link: "https://groceryerp.com",
    },
  ];
  
  const Projects = () => (
    <section id="projects" className="bg-gray-900 text-white py-16 px-8">
      <h2 className="text-4xl font-bold mb-8 text-yellow-500">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 hover:shadow-yellow-500 transition-transform duration-300"
          >
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-400">{project.description}</p>
            <span className="text-yellow-400 mt-2 inline-block hover:underline">
              View Project →
            </span>
          </a>
        ))}
      </div>
    </section>
  );
  
  export default Projects;
  