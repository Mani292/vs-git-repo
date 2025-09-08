import { useState, useEffect } from 'react';
import { useUser } from '../contexts/UserContext';
import { useTheme } from '../contexts/ThemeContext';
import anime from 'animejs/lib/anime.es.js';

export default function Profile() {
  const { 
    user, 
    progress, 
    completedVideos, 
    watchHistory, 
    learningGoals,
    logout,
    addLearningGoal,
    completeLearningGoal,
    getOverallProgress,
    getCategoryProgress
  } = useUser();
  
  const { isDark } = useTheme();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [newGoal, setNewGoal] = useState({ title: '', deadline: '', category: '' });

  useEffect(() => {
    // Animate elements on mount
    anime.timeline()
      .add({
        targets: '.profile-header',
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 800,
        easing: 'easeOutCubic'
      })
      .add({
        targets: '.stats-grid',
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 600,
        delay: anime.stagger(100),
        easing: 'easeOutCubic'
      }, '-=400')
      .add({
        targets: '.tab-content',
        opacity: [0, 1],
        translateX: [20, 0],
        duration: 600,
        easing: 'easeOutCubic'
      }, '-=200');
  }, [activeTab]);

  const categories = [
    { id: 'frontend', name: 'Frontend', color: 'from-green-500 to-emerald-600' },
    { id: 'backend', name: 'Backend', color: 'from-purple-500 to-pink-600' },
    { id: 'dataScience', name: 'Data Science', color: 'from-orange-500 to-red-600' },
    { id: 'cybersecurity', name: 'Cybersecurity', color: 'from-red-500 to-pink-600' },
    { id: 'cloud', name: 'Cloud & DevOps', color: 'from-indigo-500 to-purple-600' },
    { id: 'mobile', name: 'Mobile', color: 'from-teal-500 to-cyan-600' },
    { id: 'systemDesign', name: 'System Design', color: 'from-yellow-500 to-orange-600' }
  ];

  const handleAddGoal = (e) => {
    e.preventDefault();
    if (newGoal.title && newGoal.category) {
      addLearningGoal({
        title: newGoal.title,
        deadline: newGoal.deadline,
        category: newGoal.category
      });
      setNewGoal({ title: '', deadline: '', category: '' });
    }
  };

  const handleLogout = () => {
    logout();
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Please log in to view your profile
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            You need to be logged in to access your learning dashboard.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Profile Header */}
      <section className="profile-header bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-800 dark:via-purple-800 dark:to-pink-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Welcome back, {user.name || 'Learner'} 👋
              </h1>
              <p className="text-xl text-blue-100">
                Track your progress and continue your learning journey
              </p>
            </div>
            <div className="text-right">
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-2">
                <span className="text-sm">Overall Progress</span>
                <div className="text-2xl font-bold">{getOverallProgress()}%</div>
              </div>
              <button
                onClick={handleLogout}
                className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full px-4 py-2 text-sm transition-all duration-200"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="stats-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Videos Completed</p>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">{completedVideos.length}</p>
                </div>
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                  <span className="text-2xl">✅</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Learning Goals</p>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">{learningGoals.length}</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Watch History</p>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">{watchHistory.length}</p>
                </div>
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                  <span className="text-2xl">📺</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Categories</p>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">{categories.length}</p>
                </div>
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center">
                  <span className="text-2xl">📚</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-1 bg-gray-100 dark:bg-gray-700 rounded-xl p-1 mb-8">
            {['dashboard', 'progress', 'goals', 'history'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-3 px-6 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeTab === tab
                    ? 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="tab-content">
            {activeTab === 'dashboard' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Category Progress */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Category Progress</h3>
                  <div className="space-y-4">
                    {categories.map((category) => {
                      const progress = getCategoryProgress(category.id);
                      return (
                        <div key={category.id} className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600 dark:text-gray-400">{category.name}</span>
                            <span className="font-medium text-gray-900 dark:text-white">{progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                            <div
                              className={`h-2 bg-gradient-to-r ${category.color} rounded-full transition-all duration-500`}
                              style={{ width: `${progress}%` }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Recent Activity</h3>
                  <div className="space-y-4">
                    {watchHistory.slice(0, 5).map((video, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
                          <span className="text-lg">📺</span>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-900 dark:text-white">{video.title}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">Watched recently</p>
                        </div>
                      </div>
                    ))}
                    {watchHistory.length === 0 && (
                      <p className="text-gray-500 dark:text-gray-400 text-center py-4">
                        No recent activity
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'progress' && (
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Detailed Progress</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categories.map((category) => {
                    const progress = getCategoryProgress(category.id);
                    const categoryVideos = progress[category.id] || {};
                    const totalVideos = Object.keys(categoryVideos).length;
                    
                    return (
                      <div key={category.id} className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-semibold text-gray-900 dark:text-white">{category.name}</h4>
                          <span className="text-sm text-gray-500 dark:text-gray-400">{totalVideos} videos</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3 mb-2">
                          <div
                            className={`h-3 bg-gradient-to-r ${category.color} rounded-full transition-all duration-500`}
                            style={{ width: `${progress}%` }}
                          />
                        </div>
                        <p className="text-2xl font-bold text-gray-900 dark:text-white">{progress}%</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {activeTab === 'goals' && (
              <div className="space-y-6">
                {/* Add New Goal */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Add New Learning Goal</h3>
                  <form onSubmit={handleAddGoal} className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <input
                      type="text"
                      placeholder="Goal title"
                      value={newGoal.title}
                      onChange={(e) => setNewGoal({ ...newGoal, title: e.target.value })}
                      className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                    <select
                      value={newGoal.category}
                      onChange={(e) => setNewGoal({ ...newGoal, category: e.target.value })}
                      className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    >
                      <option value="">Select Category</option>
                      {categories.map((cat) => (
                        <option key={cat.id} value={cat.id}>{cat.name}</option>
                      ))}
                    </select>
                    <input
                      type="date"
                      value={newGoal.deadline}
                      onChange={(e) => setNewGoal({ ...newGoal, deadline: e.target.value })}
                      className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button
                      type="submit"
                      className="md:col-span-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-2 px-6 rounded-lg transition-all duration-200"
                    >
                      Add Goal
                    </button>
                  </form>
                </div>

                {/* Goals List */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Your Learning Goals</h3>
                  <div className="space-y-4">
                    {learningGoals.map((goal) => (
                      <div
                        key={goal.id}
                        className={`flex items-center justify-between p-4 rounded-lg border ${
                          goal.completed
                            ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800'
                            : 'bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() => completeLearningGoal(goal.id)}
                            className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                              goal.completed
                                ? 'bg-green-500 border-green-500 text-white'
                                : 'border-gray-300 dark:border-gray-600 hover:border-green-500'
                            }`}
                          >
                            {goal.completed && <span className="text-sm">✓</span>}
                          </button>
                          <div>
                            <p className={`font-medium ${
                              goal.completed
                                ? 'text-green-800 dark:text-green-200 line-through'
                                : 'text-gray-900 dark:text-white'
                            }`}>
                              {goal.title}
                            </p>
                            <div className="flex space-x-4 text-sm text-gray-500 dark:text-gray-400">
                              <span>{goal.category}</span>
                              {goal.deadline && <span>Due: {new Date(goal.deadline).toLocaleDateString()}</span>}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    {learningGoals.length === 0 && (
                      <p className="text-gray-500 dark:text-gray-400 text-center py-8">
                        No learning goals yet. Add your first goal above!
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'history' && (
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Watch History</h3>
                <div className="space-y-4">
                  {watchHistory.map((video, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div className="w-16 h-12 bg-gray-200 dark:bg-gray-600 rounded-lg flex items-center justify-center">
                        <span className="text-2xl">📺</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 dark:text-white">{video.title}</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{video.description}</p>
                        <p className="text-xs text-gray-400 dark:text-gray-500">Duration: {video.duration}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-xs text-gray-400 dark:text-gray-500">
                          {index === 0 ? 'Recently' : `${index + 1} videos ago`}
                        </span>
                      </div>
                    </div>
                  ))}
                  {watchHistory.length === 0 && (
                    <p className="text-gray-500 dark:text-gray-400 text-center py-8">
                      No watch history yet. Start watching videos to build your history!
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
