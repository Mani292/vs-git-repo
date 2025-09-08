import { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { getVideosByCategory, getAllVideos, getCategoryStats } from '../data/videoData';
import YouTubeVideo from '../components/YouTubeVideo';
import anime from 'animejs/lib/anime.es.js';

export default function Resources() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const { isDark } = useTheme();

  const categories = [
    { id: 'all', name: 'All Categories', icon: '📚', color: 'from-blue-500 to-indigo-600' },
    { id: 'frontend', name: 'Frontend', icon: '🎨', color: 'from-green-500 to-emerald-600' },
    { id: 'backend', name: 'Backend', icon: '⚙️', color: 'from-purple-500 to-pink-600' },
    { id: 'dataScience', name: 'Data Science', icon: '📊', color: 'from-orange-500 to-red-600' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: '🔒', color: 'from-red-500 to-pink-600' },
    { id: 'cloud', name: 'Cloud & DevOps', icon: '☁️', color: 'from-indigo-500 to-purple-600' },
    { id: 'mobile', name: 'Mobile', icon: '📱', color: 'from-teal-500 to-cyan-600' },
    { id: 'systemDesign', name: 'System Design', icon: '🏗️', color: 'from-yellow-500 to-orange-600' }
  ];

    const allVideos = getAllVideos();
  const categoryStats = getCategoryStats();
  
  const filteredVideos = allVideos.filter(video => {
    const matchesCategory = selectedCategory === 'all' || video.category === selectedCategory;
    
    const matchesSearch = searchQuery === '' || 
      video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  useEffect(() => {
    // Animate elements on mount
    anime.timeline()
      .add({
        targets: '.hero-section',
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 800,
        easing: 'easeOutCubic'
      })
      .add({
        targets: '.search-section',
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 600,
        delay: 200,
        easing: 'easeOutCubic'
      }, '-=400')
      .add({
        targets: '.category-filters',
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 600,
        delay: anime.stagger(100),
        easing: 'easeOutCubic'
      }, '-=200')
      .add({
        targets: '.video-grid',
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 600,
        delay: 400,
        easing: 'easeOutCubic'
      }, '-=200');
  }, []);

  const getTotalDuration = () => {
    return Object.values(categoryStats).reduce((acc, stat) => acc + stat.totalDuration, 0);
  };

  const getTotalVideos = () => {
    return Object.values(categoryStats).reduce((acc, stat) => acc + stat.totalVideos, 0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="hero-section bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 dark:from-green-800 dark:via-blue-800 dark:to-purple-800 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-green-100">
              Learning Resources
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-green-100">
            Comprehensive collection of video tutorials, projects, and learning materials
          </p>
          <div className="flex justify-center space-x-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-2">
              <span className="text-sm">📚 {getTotalVideos()} Resources</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-2">
              <span className="text-sm">⏱️ {Math.round(getTotalDuration() / 60)} Hours</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-2">
              <span className="text-sm">🎯 8 Categories</span>
            </div>
          </div>
        </div>
      </section>
          
      {/* Search and Filters */}
      <section className="search-section py-12 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-b border-gray-200/50 dark:border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 pl-14 border border-gray-300 dark:border-gray-600 rounded-2xl bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
              />
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
        </div>
        
          {/* Category Filters */}
          <div className="category-filters flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 transform hover:scale-105 ${
                  selectedCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                      : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 border border-gray-200 dark:border-gray-600'
                  }`}
                >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              {selectedCategory === 'all' ? 'All Resources' : categories.find(c => c.id === selectedCategory)?.name}
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              {filteredVideos.length} resources found
            </p>
          </div>

          {filteredVideos.length > 0 ? (
            <div className="video-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredVideos.map((video) => (
                <YouTubeVideo
                  key={video.id}
                  videoId={video.videoId}
                  title={video.title}
                  description={video.description}
                  duration={video.duration}
                  difficulty={video.difficulty}
                  category={video.category}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                No resources found
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Try adjusting your search or category filter
            </p>
          </div>
          )}
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Learning Statistics
                </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.slice(1).map((category) => {
              const stats = categoryStats[category.id];
              return (
                <div key={category.id} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                  <div className="text-center">
                    <div className="text-4xl mb-3">{category.icon}</div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {category.name}
                    </h3>
                    <div className="space-y-2">
                      <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                        {stats?.totalVideos || 0}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Videos
                      </p>
                      <p className="text-lg font-semibold text-green-600 dark:text-green-400">
                        {Math.round((stats?.totalDuration || 0) / 60)}h
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Total Duration
                      </p>
              </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
