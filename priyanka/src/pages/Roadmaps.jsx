import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

import YouTubeVideo from '../components/YouTubeVideo';
import { getVideosByCategory } from '../data/videoData';

export default function Roadmaps() {
  const [selectedRoadmap, setSelectedRoadmap] = useState(null);
  const { isDark } = useTheme();


  const roadmaps = [
    {
      id: 1,
      title: 'Frontend Web Development',
      description: 'Learn web design with HTML, CSS, JavaScript, and React',
      duration: '6-8 months',
      difficulty: 'Beginner',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'TypeScript'],
      category: 'frontend'
    },
    {
      id: 2,
      title: 'Backend Development',
      description: 'Server-side programming with Node.js, Python, and databases',
      duration: '8-10 months',
      difficulty: 'Intermediate',
      skills: ['Node.js', 'Python', 'Express.js', 'MongoDB', 'PostgreSQL'],
      category: 'backend'
    },
    {
      id: 3,
      title: 'Mobile App Development',
      description: 'Cross-platform apps with React Native and Flutter',
      duration: '6-9 months',
      difficulty: 'Intermediate',
      skills: ['React Native', 'Flutter', 'Dart', 'Mobile UI/UX'],
      category: 'mobile'
    },
    {
      id: 4,
      title: 'Data Science & AI',
      description: 'Machine learning and artificial intelligence fundamentals',
      duration: '10-12 months',
      difficulty: 'Advanced',
      skills: ['Python', 'TensorFlow', 'PyTorch', 'Pandas', 'NumPy'],
      category: 'dataScience'
    },
    {
      id: 5,
      title: 'Cybersecurity',
      description: 'Network security, ethical hacking, and security concepts',
      duration: '8-10 months',
      difficulty: 'Intermediate',
      skills: ['Network Security', 'Ethical Hacking', 'Cryptography', 'Penetration Testing'],
      category: 'cybersecurity'
    },
    {
      id: 6,
      title: 'Cloud Computing & DevOps',
      description: 'AWS, Azure, and cloud infrastructure with DevOps practices',
      duration: '6-8 months',
      difficulty: 'Intermediate',
      skills: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'DevOps'],
      category: 'cloud'
    }
  ];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200';
      case 'Intermediate': return 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200';
      case 'Advanced': return 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200';
      default: return 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200';
    }
  };

  const getRoadmapVideos = (roadmap) => {
    return getVideosByCategory(roadmap.category);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-800 dark:via-purple-800 dark:to-pink-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Learning Roadmaps
          </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Choose the right path for your career and learn step-by-step
          </p>
          </div>
        </div>
      </section>

      {/* Roadmaps Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roadmaps.map((roadmap) => (
              <div
                key={roadmap.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105"
                onClick={() => setSelectedRoadmap(roadmap)}
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {roadmap.title}
                </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {roadmap.description}
                </p>
                
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Duration: {roadmap.duration}
                  </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Difficulty: {roadmap.difficulty}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                    {roadmap.skills.map((skill, index) => (
                    <span
                      key={index}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                  </div>

                  <button className="w-full bg-indigo-600 dark:bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Roadmap Modal */}
      {selectedRoadmap && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {selectedRoadmap.title}
                </h2>
                <button
                  onClick={() => setSelectedRoadmap(null)}
                  className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {selectedRoadmap.description}
                </p>
                
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Duration: {selectedRoadmap.duration}
                  </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Difficulty: {selectedRoadmap.difficulty}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Required Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedRoadmap.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* YouTube Videos Section */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Learning Videos
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {getRoadmapVideos(selectedRoadmap).map((video, index) => (
                    <YouTubeVideo
                      key={index}
                      videoId={video.id}
                      title={video.title}
                      description={video.description}

                    />
                  ))}
                </div>
              </div>

              <div className="flex justify-end">
                <button 
                  onClick={() => setSelectedRoadmap(null)}
                  className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
