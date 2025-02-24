
import PageHeader from '../components/PageHeader';

const Projects = () => {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Our Projects"
        description="Discover our latest work and see how we've helped businesses achieve their digital goals."
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl glass-card hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const projects = [
  {
    title: "E-commerce Platform",
    description: "A fully responsive e-commerce solution with advanced filtering and search capabilities.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    technologies: ["React", "Node.js", "MongoDB"]
  },
  {
    title: "Portfolio Website",
    description: "A modern portfolio website with smooth animations and optimized performance.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"]
  },
  {
    title: "Booking System",
    description: "An intuitive booking platform for a healthcare provider with real-time availability.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    technologies: ["React", "Firebase", "Material UI"]
  }
];

export default Projects;
