import { Building, Code, Star, Target } from 'lucide-react';
import { technicalSkills } from '../data/portfolioData';

const TechnicalSkills = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Technical Skills</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Proficient in modern technologies and frameworks with hands-on project experience
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-4">
              <Code className="text-blue-600" size={24} />
              <h3 className="font-semibold text-gray-800">Languages</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {technicalSkills.languages.map((skill, index) => (
                <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-4">
              <Building className="text-green-600" size={24} />
              <h3 className="font-semibold text-gray-800">Frameworks</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {technicalSkills.frameworks.map((skill, index) => (
                <span key={index} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-4">
              <Target className="text-purple-600" size={24} />
              <h3 className="font-semibold text-gray-800">Tools</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {technicalSkills.tools.map((skill, index) => (
                <span key={index} className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-4">
              <Star className="text-orange-600" size={24} />
              <h3 className="font-semibold text-gray-800">Concepts</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {technicalSkills.concepts.map((skill, index) => (
                <span key={index} className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;