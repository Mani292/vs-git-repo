import { useState } from 'react';

export default function ProgressTracker() {
  const [progress, setProgress] = useState({
    dsa: 65,
    webDev: 40,
    dbms: 80,
    oop: 90,
    networking: 30,
    os: 55
  });

  const [selectedSkill, setSelectedSkill] = useState('dsa');

  const skills = [
    { id: 'dsa', name: 'Data Structures & Algorithms', color: 'indigo' },
    { id: 'webDev', name: 'Web Development', color: 'purple' },
    { id: 'dbms', name: 'Database Management', color: 'pink' },
    { id: 'oop', name: 'Object-Oriented Programming', color: 'green' },
    { id: 'networking', name: 'Computer Networks', color: 'blue' },
    { id: 'os', name: 'Operating Systems', color: 'yellow' }
  ];

  const updateProgress = (skill, value) => {
    setProgress(prev => ({
      ...prev,
      [skill]: Math.max(0, Math.min(100, value))
    }));
  };

  const getColorClasses = (color) => {
    const colors = {
      indigo: 'bg-indigo-600',
      purple: 'bg-purple-600',
      pink: 'bg-pink-600',
      green: 'bg-green-600',
      blue: 'bg-blue-600',
      yellow: 'bg-yellow-600'
    };
    return colors[color] || 'bg-indigo-600';
  };

  const getBgColorClasses = (color) => {
    const colors = {
      indigo: 'bg-indigo-100',
      purple: 'bg-purple-100',
      pink: 'bg-pink-100',
      green: 'bg-green-100',
      blue: 'bg-blue-100',
      yellow: 'bg-yellow-100'
    };
    return colors[color] || 'bg-indigo-100';
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Learning Progress Tracker</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        {/* Progress Bars */}
        <div className="space-y-4">
          {skills.map((skill) => (
            <div key={skill.id} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                <span className="text-sm text-gray-500">{progress[skill.id]}%</span>
              </div>
              <div className={`w-full h-2 ${getBgColorClasses(skill.color)} rounded-full overflow-hidden`}>
                <div
                  className={`h-full ${getColorClasses(skill.color)} transition-all duration-500 ease-out`}
                  style={{ width: `${progress[skill.id]}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Controls */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Skill to Update
            </label>
            <select
              value={selectedSkill}
              onChange={(e) => setSelectedSkill(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            >
              {skills.map((skill) => (
                <option key={skill.id} value={skill.id}>
                  {skill.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Update Progress: {progress[selectedSkill]}%
            </label>
            <input
              type="range"
              min="0"
              max="100"
              value={progress[selectedSkill]}
              onChange={(e) => updateProgress(selectedSkill, parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>0%</span>
              <span>50%</span>
              <span>100%</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={() => updateProgress(selectedSkill, progress[selectedSkill] - 10)}
              className="px-3 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors text-sm"
            >
              -10%
            </button>
            <button
              onClick={() => updateProgress(selectedSkill, progress[selectedSkill] + 10)}
              className="px-3 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors text-sm"
            >
              +10%
            </button>
            <button
              onClick={() => updateProgress(selectedSkill, 100)}
              className="px-3 py-2 bg-indigo-100 text-indigo-700 rounded-lg hover:bg-indigo-200 transition-colors text-sm"
            >
              Complete
            </button>
          </div>

          {/* Progress Summary */}
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-medium text-gray-900 mb-2">Overall Progress</h3>
            <div className="text-2xl font-bold text-indigo-600">
              {Math.round(Object.values(progress).reduce((a, b) => a + b, 0) / Object.keys(progress).length)}%
            </div>
            <p className="text-sm text-gray-600 mt-1">
              Average completion across all skills
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
