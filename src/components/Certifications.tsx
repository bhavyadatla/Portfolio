import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { certifications } from '../data/portfolioData';

const Certifications = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Certifications</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Continuous learning through industry-recognized certifications and courses
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Award className="text-green-600" size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-800 mb-1">{cert.name}</h3>
                  <p className="text-gray-600 text-sm">{cert.issuer}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-gray-500 text-xs">{cert.year}</span>
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-medium hover:bg-green-200 transition-colors"
                    >
                      <ExternalLink size={12} />
                      View
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;