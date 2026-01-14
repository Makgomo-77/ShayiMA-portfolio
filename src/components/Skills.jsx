import { 
  CodeBracketIcon, 
  DevicePhoneMobileIcon, 
  ServerIcon,
  BoltIcon,
  CheckCircleIcon 
} from '@heroicons/react/24/outline';

const skillCategories = [
  {
    title: "Frontend",
    icon: <CodeBracketIcon className="h-8 w-8" />,
    skills: [
      { name: "React", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "HTML/CSS", level: 98 },
      { name: "Tailwind CSS", level: 92 },
      { name: "TypeScript", level: 85 }
    ],
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Responsive Design",
    icon: <DevicePhoneMobileIcon className="h-8 w-8" />,
    skills: [
      { name: "Mobile First", level: 95 },
      { name: "Cross-browser", level: 90 },
      { name: "Performance", level: 88 },
      { name: "Accessibility", level: 92 },
      { name: "UI/UX Principles", level: 85 }
    ],
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Tools & Backend",
    icon: <ServerIcon className="h-8 w-8" />,
    skills: [
      { name: "Git/GitHub", level: 90 },
      { name: "Node.js", level: 80 },
      { name: "Vite/Webpack", level: 85 },
      { name: "REST APIs", level: 88 },
      { name: "Firebase", level: 82 }
    ],
    color: "from-green-500 to-emerald-500"
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive set of skills that I've developed through projects and continuous learning.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="glass-card rounded-2xl p-8 hover:scale-105 transition-transform duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${category.color} mb-6`}>
                <div className="text-white">
                  {category.icon}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-6">{category.title}</h3>
              
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-blue-600 dark:text-blue-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${category.color} transition-all duration-1000`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="glass-card rounded-2xl p-8 max-w-4xl mx-auto animate-slide-up">
          <div className="flex items-center gap-3 mb-6">
            <BoltIcon className="h-8 w-8 text-yellow-500" />
            <h3 className="text-2xl font-bold">Development Approach</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Write clean, maintainable code with proper documentation",
              "Implement responsive designs that work on all devices",
              "Optimize for performance and fast loading times",
              "Ensure accessibility standards (WCAG 2.1)",
              "Test across multiple browsers and devices",
              "Follow best practices for SEO optimization",
              "Use version control and collaborative workflows",
              "Continuously learn and adapt to new technologies"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircleIcon className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <span className="text-gray-700 dark:text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
