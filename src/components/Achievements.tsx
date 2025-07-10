import React from 'react';
import { Trophy } from 'lucide-react';
import { achievements } from '../data/portfolioData';

const Achievements = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Leadership & Achievements</h2>
      <div className="space-y-6">
        {achievements.map((achievement, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                <Trophy className="text-orange-600" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-800">{achievement.title}</h3>
                <p className="text-gray-600 font-medium">{achievement.organization}</p>
                <p className="text-gray-600 mt-2">{achievement.description}</p>
                <span className="inline-block mt-2 px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                  {achievement.impact}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;