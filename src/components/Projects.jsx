import { ExternalLinkIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured online shopping platform with cart functionality, user authentication, and payment integration.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    liveLink: "https://demo-ecommerce.com",
    githubLink: "https://github.com/username/ecommerce",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A productivity app with drag-and-drop functionality, real-time updates, and team collaboration features.",
    technologies: ["React", "Firebase", "Tailwind CSS", "Framer Motion"],
    liveLink: "https://taskapp-demo.com",
    githubLink: "https://github.com/username/task-app",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w-800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Real-time weather application with geolocation, 7-day forecast, and interactive maps.",
    technologies: ["JavaScript", "OpenWeather API", "Chart.js", "CSS3"],
    liveLink: "https://weather-dash-demo.com",
    githubLink: "https://github.com/username/weather-app",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Social Media Analytics",
    description: "Dashboard for tracking social media metrics with data visualization and export capabilities.",
    technologies: ["React", "D3.js", "Express", "PostgreSQL"],
    liveLink: "https://analytics-demo.com",
    githubLink: "https://github.com/username/social-analytics",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent works that showcase my skills and approach to development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                  >
                    <ExternalLinkIcon className="h-5 w-5" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                  >
                    <CodeBracketIcon className="h-5 w-5" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
