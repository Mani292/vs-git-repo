import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

import YouTubeVideo from '../components/YouTubeVideo';
import { getVideosByCategory, getAllVideos } from '../data/videoData';

export default function Resources() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedResource, setSelectedResource] = useState(null);
  const { isDark } = useTheme();


  const categories = [
    { id: 'all', name: 'All Resources', icon: '📚', color: 'from-blue-500 to-cyan-500' },
    { id: 'frontend', name: 'Frontend Development', icon: '💻', color: 'from-green-500 to-emerald-500' },
    { id: 'backend', name: 'Backend Development', icon: '🌐', color: 'from-purple-500 to-pink-500' },
    { id: 'mobile', name: 'Mobile Development', icon: '📱', color: 'from-orange-500 to-red-500' },
    { id: 'dataScience', name: 'Data Science & AI', icon: '📊', color: 'from-indigo-500 to-blue-500' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: '🔒', color: 'from-red-500 to-orange-500' },
    { id: 'cloud', name: 'Cloud & DevOps', icon: '☁️', color: 'from-cyan-500 to-blue-500' },
    { id: 'systemDesign', name: 'System Design & DSA', icon: '🏗️', color: 'from-yellow-500 to-orange-500' }
  ];

  // Generate resources from video data
  const generateResources = () => {
    const allVideos = getAllVideos();
    return allVideos.map((video, index) => ({
      id: index + 1,
      title: video.title,
      description: video.description,
      category: getCategoryFromVideo(video),
      type: 'video',
      difficulty: video.difficulty,
      duration: video.duration,
      rating: 4.5 + Math.random() * 0.5, // Random rating between 4.5-5.0
      url: `https://www.youtube.com/watch?v=${video.id}`,
      videoId: video.id
    }));
  };

  const getCategoryFromVideo = (video) => {
    // Map video to category based on content
    if (video.title.toLowerCase().includes('html') || video.title.toLowerCase().includes('css') || video.title.toLowerCase().includes('react') || video.title.toLowerCase().includes('vue') || video.title.toLowerCase().includes('angular') || video.title.toLowerCase().includes('typescript')) {
      return 'frontend';
    } else if (video.title.toLowerCase().includes('node') || video.title.toLowerCase().includes('python') || video.title.toLowerCase().includes('java') || video.title.toLowerCase().includes('c++') || video.title.toLowerCase().includes('django') || video.title.toLowerCase().includes('spring')) {
      return 'backend';
    } else if (video.title.toLowerCase().includes('mobile') || video.title.toLowerCase().includes('flutter') || video.title.toLowerCase().includes('android') || video.title.toLowerCase().includes('ios') || video.title.toLowerCase().includes('react native')) {
      return 'mobile';
    } else if (video.title.toLowerCase().includes('machine') || video.title.toLowerCase().includes('data') || video.title.toLowerCase().includes('pandas') || video.title.toLowerCase().includes('numpy') || video.title.toLowerCase().includes('tensorflow') || video.title.toLowerCase().includes('pytorch')) {
      return 'dataScience';
    } else if (video.title.toLowerCase().includes('security') || video.title.toLowerCase().includes('hacking') || video.title.toLowerCase().includes('cyber') || video.title.toLowerCase().includes('ethical')) {
      return 'cybersecurity';
    } else if (video.title.toLowerCase().includes('aws') || video.title.toLowerCase().includes('docker') || video.title.toLowerCase().includes('cloud') || video.title.toLowerCase().includes('azure') || video.title.toLowerCase().includes('kubernetes') || video.title.toLowerCase().includes('terraform')) {
      return 'cloud';
    } else if (video.title.toLowerCase().includes('system') || video.title.toLowerCase().includes('design') || video.title.toLowerCase().includes('algorithm') || video.title.toLowerCase().includes('data structure')) {
      return 'systemDesign';
    }
    return 'frontend'; // Default category
  };

  const resources = generateResources();

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200';
      case 'Intermediate': return 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200';
      case 'Advanced': return 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200';
      default: return 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200';
    }
  };

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-800 dark:via-purple-800 dark:to-pink-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Learning Resources
          </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              High-quality resources for various programming languages and technologies
          </p>
          </div>
        </div>
      </section>
          
      {/* Search and Filter Section */}
      <section className="py-8 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4">
          {/* Search Bar */}
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
        </div>
        
            {/* Category Filter */}
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                  selectedCategory === category.id
                      ? 'bg-indigo-600 text-white shadow-lg'
                      : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 border border-gray-200 dark:border-gray-600'
                  }`}
                >
                  <span>{category.icon}</span>
                  <span>{category.name}</span>
              </button>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredResources.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                No resources found
              </h3>
              <p className="text-gray-600 dark:text-gray-200">
                Try changing your search terms
            </p>
          </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.map((resource) => (
              <div
                key={resource.id}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105"
                onClick={() => setSelectedResource(resource)}
              >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl">{categories.find(c => c.id === resource.category)?.icon}</span>
                      <div className="flex items-center space-x-1">
                        <span className="text-yellow-400">★</span>
                        <span className="text-sm text-gray-600 dark:text-gray-200">{resource.rating}</span>
                  </div>
                </div>

                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {resource.title}
                  </h3>
                    <p className="text-gray-600 dark:text-gray-200 mb-4 line-clamp-2">
                    {resource.description}
                  </p>

                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(resource.difficulty)}`}>
                      {resource.difficulty}
                    </span>
                      <span className="text-sm text-gray-500 dark:text-gray-200">
                        {resource.duration}
                      </span>
                  </div>

                    <div className="flex items-center justify-between">
                                            <span className="text-sm text-gray-500 dark:text-gray-200">
                        Video
                      </span>
                      <button className="px-4 py-2 bg-indigo-600 dark:bg-indigo-500 text-white text-sm rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors">
                        Watch
                  </button>
                    </div>
                </div>
              </div>
            ))}
          </div>
          )}
        </div>
      </section>

      {/* Selected Resource Modal */}
      {selectedResource && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {selectedResource.title}
                </h2>
              <button
                onClick={() => setSelectedResource(null)}
                  className="text-gray-500 dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-100"
              >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
              </button>
            </div>
            
              <p className="text-gray-600 dark:text-gray-200 mb-6 text-lg leading-relaxed">
                {selectedResource.description}
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-sm text-gray-500 dark:text-gray-200 mb-1">
                    Difficulty
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(selectedResource.difficulty)}`}>
                  {selectedResource.difficulty}
                </span>
              </div>
                <div className="text-center">
                  <div className="text-sm text-gray-500 dark:text-gray-200 mb-1">
                    Duration
                  </div>
                  <div className="text-gray-900 dark:text-white font-medium">{selectedResource.duration}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-500 dark:text-gray-200 mb-1">
                    Rating
                  </div>
                  <div className="flex items-center justify-center space-x-1">
                    <span className="text-yellow-400">★</span>
                    <span className="text-gray-900 dark:text-white font-medium">{selectedResource.rating}</span>
                </div>
                </div>
              </div>
              
              {/* YouTube Video */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Learning Video
                </h3>
                <YouTubeVideo
                  videoId={selectedResource.videoId}
                  title={selectedResource.title}
                  description={selectedResource.description}

                />
              </div>
              
              <div className="flex justify-end space-x-4">
                <a
                  href={selectedResource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Watch on YouTube
                </a>
                <button
                  onClick={() => setSelectedResource(null)}
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
