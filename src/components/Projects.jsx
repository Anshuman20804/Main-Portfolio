const Projects = () => {
  const projects = [
    {
      title: "Payzo",
      description:
        "Payzo is a modern digital payment platform built with cutting-edge web technologies including Next.js 15, React 19, Tailwind CSS, and TypeScript. Designed for performance, scalability, and a smooth user experience, Payzo features a clean UI and modular architecture ready for real-world expansion.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS v4"],
      features: [
        "Modern and responsive payment UI",
        "Smooth animations using js-confetti",
        "Built with Next.js 15, React 19, and TypeScript",
        "Fast performance with Turbopack",
      ],
    },
    {
      title: "Quiz App",
      description:
        "A lightweight, interactive web application built using HTML, CSS, and JavaScript. It features a 5-question multiple-choice quiz with instant feedback and dynamic score display.",
      technologies: ["HTML", "CSS", "JavaScript"],
      features: [
        "Dynamic question loading and answer validation",
        "Score tracking with instant result display",
        "Responsive user interface",
        "Pure vanilla JavaScript implementation",
      ],
    },
    {
      title: "GitHub User Finder",
      description:
        "A web app that allows users to search for any GitHub username and view their public profile data using the GitHub API. It’s responsive, lightweight, and demonstrates API integration.",
      technologies: ["HTML", "CSS", "JavaScript", "GitHub API"],
      features: [
        "Real-time search of GitHub users",
        "Displays avatar, name, repos, followers, etc.",
        "Error handling for invalid users",
        "Responsive layout with modern UI",
      ],
    },
  ];

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 text-center">
            Featured Projects
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in web development and creative problem-solving.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 hover:border-black transition-colors duration-300 group"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-3 group-hover:text-gray-700 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-black mb-2">
                      Key Features:
                    </h4>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-gray-100 text-gray-700 px-2 py-1 text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
