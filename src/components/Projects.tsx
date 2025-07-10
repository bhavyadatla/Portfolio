import React from 'react';
import { Github, ExternalLink, Star } from 'lucide-react';
import { projects } from '../data/portfolioData';

const Projects = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Featured Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real-world applications demonstrating technical skills and problem-solving abilities
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className={`bg-white rounded-xl shadow-lg border-2 transition-all hover:shadow-xl ${
              project.featured ? 'border-blue-200 bg-gradient-to-br from-blue-50 to-white' : 'border-gray-100'
            }`}>
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                    {project.featured && (
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                        <Star size={14} />
                        Featured
                      </span>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <a href={project.github} className="p-2 text-gray-600 hover:text-gray-800 transition-colors">
                      <Github size={18} />
                    </a>
                    <a href={project.demo} className="p-2 text-gray-600 hover:text-gray-800 transition-colors">
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;