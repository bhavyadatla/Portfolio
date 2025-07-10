import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Education</h2>
      <div className="space-y-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <GraduationCap className="text-blue-600" size={24} />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-800">Bachelor of Technology</h3>
              <p className="text-gray-600">Computer Science Engineering</p>
              <p className="text-gray-500">VVIT, Guntur</p>
              <div className="flex items-center gap-2 mt-2">
                <Calendar size={14} className="text-gray-400" />
                <span className="text-sm text-gray-500">2022 - 2026</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                  Current
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
              <GraduationCap className="text-purple-600" size={24} />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-800">Intermediate (MPC)</h3>
              <p className="text-gray-600">Mathematics, Physics, Chemistry</p>
              <p className="text-gray-500">NRI Junior College, Tenali</p>
              <div className="flex items-center gap-2 mt-2">
                <Calendar size={14} className="text-gray-400" />
                <span className="text-sm text-gray-500">2020 - 2022</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;