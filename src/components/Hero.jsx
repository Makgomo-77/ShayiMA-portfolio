import { ArrowDownIcon } from '@heroicons/react/24/outline';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 opacity-50"></div>
      
      <div className="container mx-auto px-6 py-20 text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block px-4 py-2 rounded-full glass-card mb-6 animate-float">
            <span className="text-sm font-semibold gradient-text">✨ Welcome to My Digital Space</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Hi, I'm <span className="gradient-text">Alex</span>
            <br />
            <span className="text-4xl md:text-6xl">Frontend Developer</span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto animate-slide-up">
            I build exceptional digital experiences that are fast, accessible, visually appealing, and responsive.
            Let's bring your ideas to life!
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center animate-slide-up">
            <a
              href="#projects"
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-full font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#projects" aria-label="Scroll to projects">
            <ArrowDownIcon className="h-8 w-8 text-gray-400" />
          </a>
        </div>
      </div>
    </section>
  );
}
