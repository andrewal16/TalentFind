import React from 'react';
import { Award, Target, Star } from 'lucide-react';

const CVAnalysisResults = ({ analysisResults }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-xl mx-auto">
      <div className="flex items-center justify-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center">
          <Award className="mr-3 text-blue-600" size={32} />
          Top Career Recommendations
        </h2>
      </div>

      {analysisResults && analysisResults.length > 0 ? (
        <div className="space-y-4">
          {analysisResults.slice(0, 3).map((career, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-lg p-4 border-l-4 border-blue-500 hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold text-gray-900">
                  {career.job_title}
                </h3>
                <div className="flex items-center text-yellow-500">
                  <Star className="mr-1" size={20} />
                  <span className="font-medium">
                    {(career.confidence * 100).toFixed(2)}%
                  </span>
                </div>
              </div>

              <div className="mt-2">
                <p className="text-sm text-gray-600 mb-2">
                  <Target className="inline-block mr-2 text-green-500" size={16} />
                  Skills to Develop:
                </p>
                <div className="flex flex-wrap gap-2">
                  {career.skills_to_develop.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex} 
                      className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500">
          No analysis results available
        </div>
      )}
    </div>
  );
};

export default CVAnalysisResults;