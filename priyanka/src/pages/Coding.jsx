import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

export default function Coding() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { isDark } = useTheme();

  const categories = [
    { id: 'all', name: 'All Platforms', icon: '🌐' },
    { id: 'practice', name: 'Practice', icon: '💻' },
    { id: 'contest', name: 'Contests', icon: '🏆' },
    { id: 'learn', name: 'Learning', icon: '📚' },
    { id: 'interview', name: 'Interview', icon: '🎯' }
  ];

  const codingPlatforms = [
    {
      name: 'LeetCode',
      description: 'The world\'s leading platform for technical interview preparation',
      category: 'practice',
      icon: '🧠',
      color: 'orange',
      features: ['1900+ Problems', 'Company Questions', 'Contests', 'Discuss'],
      url: 'https://leetcode.com',
      difficulty: 'Easy to Hard',
      rating: 4.9
    },
    {
      name: 'HackerRank',
      description: 'Practice coding skills, prepare for interviews, and get hired',
      category: 'practice',
      icon: '⚡',
      color: 'green',
      features: ['1000+ Problems', 'Skill Certifications', 'Company Challenges', 'Leaderboards'],
      url: 'https://hackerrank.com',
      difficulty: 'Beginner to Advanced',
      rating: 4.7
    },
    {
      name: 'Codeforces',
      description: 'Programming competitions and contests, programming community',
      category: 'contest',
      icon: '🔥',
      color: 'red',
      features: ['Regular Contests', 'Rating System', 'Educational Rounds', 'Global Community'],
      url: 'https://codeforces.com',
      difficulty: 'Intermediate to Expert',
      rating: 4.8
    },
    {
      name: 'AtCoder',
      description: 'Japanese programming contest website with regular competitions',
      category: 'contest',
      icon: '🇯🇵',
      color: 'blue',
      features: ['ABC Contests', 'ARC Contests', 'AGC Contests', 'Beginner Friendly'],
      url: 'https://atcoder.jp',
      difficulty: 'Beginner to Expert',
      rating: 4.6
    },
    {
      name: 'CodeChef',
      description: 'Non-profit educational initiative for programming community',
      category: 'contest',
      icon: '🍽️',
      color: 'brown',
      features: ['Monthly Contests', 'Practice Problems', 'Tutorials', 'Discussion Forums'],
      url: 'https://codechef.com',
      difficulty: 'Easy to Hard',
      rating: 4.5
    },
    {
      name: 'GeeksforGeeks',
      description: 'Computer science portal for geeks with practice problems',
      category: 'learn',
      icon: '📖',
      color: 'green',
      features: ['DSA Practice', 'Company Questions', 'Tutorials', 'Interview Prep'],
      url: 'https://geeksforgeeks.org',
      difficulty: 'Beginner to Advanced',
      rating: 4.4
    },
    {
      name: 'InterviewBit',
      description: 'Platform to learn programming and prepare for interviews',
      category: 'interview',
      icon: '🎯',
      color: 'purple',
      features: ['Interview Questions', 'Company Specific', 'Mock Interviews', 'Progress Tracking'],
      url: 'https://interviewbit.com',
      difficulty: 'Intermediate to Hard',
      rating: 4.6
    },
    {
      name: 'TopCoder',
      description: 'Competitive programming platform with algorithm competitions',
      category: 'contest',
      icon: '🏅',
      color: 'yellow',
      features: ['SRM Contests', 'Marathon Matches', 'Tutorials', 'Community'],
      url: 'https://topcoder.com',
      difficulty: 'Advanced to Expert',
      rating: 4.7
    },
    {
      name: 'SPOJ',
      description: 'Sphere Online Judge with classical algorithm problems',
      category: 'practice',
      icon: '🌍',
      color: 'blue',
      features: ['Classical Problems', 'Challenge Problems', 'Tutorials', 'Community'],
      url: 'https://spoj.com',
      difficulty: 'Easy to Expert',
      rating: 4.3
    },
    {
      name: 'UVa Online Judge',
      description: 'Programming contest training archive with thousands of problems',
      category: 'practice',
      icon: '📚',
      color: 'orange',
      features: ['1000+ Problems', 'Training Sets', 'Contest Archives', 'Statistics'],
      url: 'https://onlinejudge.org',
      difficulty: 'Intermediate to Expert',
      rating: 4.2
    },
    {
      name: 'Project Euler',
      description: 'Mathematical and computational programming problems',
      category: 'learn',
      icon: '🔢',
      color: 'gray',
      features: ['Mathematical Problems', 'Progressive Difficulty', 'Community', 'Achievements'],
      url: 'https://projecteuler.net',
      difficulty: 'Intermediate to Expert',
      rating: 4.8
    },
    {
      name: 'Coderbyte',
      description: 'Coding challenges and interview preparation platform',
      category: 'interview',
      icon: '💼',
      color: 'indigo',
      features: ['Coding Challenges', 'Interview Prep', 'Skill Assessments', 'Tutorials'],
      url: 'https://coderbyte.com',
      difficulty: 'Beginner to Advanced',
      rating: 4.3
    },
    {
      name: 'HackerEarth',
      description: 'Innovation management and remote hiring platform',
      category: 'contest',
      icon: '🌍',
      color: 'teal',
      features: ['Hiring Challenges', 'Practice Problems', 'Hackathons', 'Skill Assessments'],
      url: 'https://hackerearth.com',
      difficulty: 'Beginner to Expert',
      rating: 4.4
    },
    {
      name: 'Kaggle',
      description: 'Data science and machine learning platform',
      category: 'learn',
      icon: '📊',
      color: 'purple',
      features: ['Data Science Competitions', 'Datasets', 'Notebooks', 'Courses'],
      url: 'https://kaggle.com',
      difficulty: 'Intermediate to Expert',
      rating: 4.8
    },
    {
      name: 'Exercism',
      description: 'Learn programming languages through guided exercises',
      category: 'learn',
      icon: '🎯',
      color: 'pink',
      features: ['Language Tracks', 'Mentorship', 'Community', 'Progressive Learning'],
      url: 'https://exercism.org',
      difficulty: 'Beginner to Advanced',
      rating: 4.6
    },
    {
      name: 'Codewars',
      description: 'Improve your skills by training with others on real code challenges',
      category: 'practice',
      icon: '⚔️',
      color: 'red',
      features: ['Kata Challenges', 'Ranking System', 'Community', 'Multiple Languages'],
      url: 'https://codewars.com',
      difficulty: 'Beginner to Expert',
      rating: 4.5
    },
    {
      name: 'AlgoExpert',
      description: 'Learn algorithms and data structures with video explanations',
      category: 'interview',
      icon: '🧮',
      color: 'blue',
      features: ['Video Explanations', 'Practice Problems', 'Mock Interviews', 'Study Plans'],
      url: 'https://algoexpert.io',
      difficulty: 'Intermediate to Hard',
      rating: 4.7
    },
    {
      name: 'BinarySearch',
      description: 'Learn algorithms and data structures through interactive problems',
      category: 'practice',
      icon: '🔍',
      color: 'green',
      features: ['Interactive Problems', 'Progress Tracking', 'Community', 'Multiple Languages'],
      url: 'https://binarysearch.com',
      difficulty: 'Beginner to Advanced',
      rating: 4.4
    },
    {
      name: 'CodeSignal',
      description: 'Technical assessment platform for hiring and skill development',
      category: 'interview',
      icon: '📡',
      color: 'orange',
      features: ['Technical Assessments', 'Practice Problems', 'Certification', 'Company Challenges'],
      url: 'https://codesignal.com',
      difficulty: 'Intermediate to Expert',
      rating: 4.5
    },
    {
      name: 'Edabit',
      description: 'Learn to code with interactive tutorials and challenges',
      category: 'learn',
      icon: '📚',
      color: 'indigo',
      features: ['Interactive Tutorials', 'Challenges', 'Progress Tracking', 'Community'],
      url: 'https://edabit.com',
      difficulty: 'Beginner to Advanced',
      rating: 4.3
    },
    {
      name: 'CodePen',
      description: 'Front-end development playground and community',
      category: 'learn',
      icon: '🎨',
      color: 'pink',
      features: ['Front-end Playground', 'Community Showcase', 'Collaboration', 'Templates'],
      url: 'https://codepen.io',
      difficulty: 'Beginner to Advanced',
      rating: 4.6
    },
    {
      name: 'Replit',
      description: 'Online IDE and coding platform for learning and collaboration',
      category: 'learn',
      icon: '💻',
      color: 'green',
      features: ['Online IDE', 'Collaboration', 'Hosting', 'Templates'],
      url: 'https://replit.com',
      difficulty: 'Beginner to Advanced',
      rating: 4.4
    },
    {
      name: 'Glitch',
      description: 'Create and share web apps with a friendly community',
      category: 'learn',
      icon: '⚡',
      color: 'purple',
      features: ['Web App Creation', 'Community', 'Templates', 'Collaboration'],
      url: 'https://glitch.com',
      difficulty: 'Beginner to Intermediate',
      rating: 4.3
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      orange: 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400',
      green: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400',
      red: 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400',
      blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
      brown: 'bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400',
      purple: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
      yellow: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400',
      gray: 'bg-gray-100 dark:bg-gray-900/30 text-gray-600 dark:text-gray-400',
      indigo: 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400',
      teal: 'bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400',
      pink: 'bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400'
    };
    return colors[color] || 'bg-gray-100 dark:bg-gray-900/30 text-gray-600 dark:text-gray-400';
  };

  const filteredPlatforms = selectedCategory === 'all' 
    ? codingPlatforms 
    : codingPlatforms.filter(platform => platform.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 dark:from-gray-900 dark:via-indigo-900 dark:to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Master Coding with the Best Platforms
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover top coding platforms for practice, contests, learning, and interview preparation. 
            Choose your path to programming excellence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category.id
                    ? 'bg-white text-indigo-900 shadow-lg'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPlatforms.map((platform, index) => (
              <div
                key={platform.name}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-200 dark:border-gray-700 overflow-hidden group"
              >
                {/* Platform Header */}
                <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-12 h-12 ${getColorClasses(platform.color)} rounded-lg flex items-center justify-center text-2xl`}>
                        {platform.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {platform.name}
                        </h3>
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                className={`w-4 h-4 ${
                                  i < Math.floor(platform.rating) 
                                    ? 'text-yellow-400' 
                                    : 'text-gray-300 dark:text-gray-600'
                                }`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                            <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                              {platform.rating}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {platform.description}
                  </p>
                </div>

                {/* Platform Features */}
                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {platform.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      <span className="font-medium">Difficulty:</span> {platform.difficulty}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <a
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-indigo-600 dark:bg-indigo-500 text-white text-center py-2 px-4 rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors font-medium"
                    >
                      Visit Platform
                    </a>
                    <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose These Platforms?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Comprehensive coverage for all your coding needs
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">10,000+ Problems</h3>
              <p className="text-gray-600 dark:text-gray-400">Extensive problem sets across all difficulty levels</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Regular Contests</h3>
              <p className="text-gray-600 dark:text-gray-400">Weekly and monthly coding competitions</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💼</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Interview Prep</h3>
              <p className="text-gray-600 dark:text-gray-400">Company-specific questions and mock interviews</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Global Community</h3>
              <p className="text-gray-600 dark:text-gray-400">Connect with millions of developers worldwide</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
