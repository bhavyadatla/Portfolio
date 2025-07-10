import React from 'react';
import { Building, Briefcase, ExternalLink } from 'lucide-react';
import { experiences } from '../data/portfolioData';

const Experience = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Professional Experience</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Internships and practical experience with leading technology companies
          </p>
        </div>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="grid md:grid-cols-4 gap-4">
                <div className="md:col-span-3">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-lg font-bold text-gray-800">{exp.title}</h3>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      {exp.type}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <Building className="text-gray-500" size={16} />
                    <span className="font-medium text-gray-700">{exp.company}</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-500">{exp.duration}</span>
                  </div>
                  <p className="text-gray-600 mb-3">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-3">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                    <Briefcase className="text-white" size={24} />
                  </div>
                  {exp.certificateUrl && (
                    <a
                      href={exp.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors"
                    >
                      <ExternalLink size={14} />
                      View Certificate
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;