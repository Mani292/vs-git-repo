import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

export default function Home() {
  const { isDark } = useTheme();

  const features = [
    {
      icon: '📚',
      title: 'Academic Resources',
      description: 'Comprehensive study materials for all engineering years',
      link: '/resources',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: '🎯',
      title: 'Learning Roadmaps',
      description: 'Structured learning paths for different technologies',
      link: '/roadmaps',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: '💻',
      title: 'Coding Practice',
      description: 'Hands-on coding challenges and projects',
      link: '/coding',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: '🚀',
      title: 'Career Placement',
      description: 'Interview preparation and career guidance',
      link: '/placement',
      color: 'from-orange-500 to-red-600'
    }
  ];

  const yearCards = [
    {
      year: 'Year 1',
      subjects: ['Programming', 'Mathematics', 'Physics', 'Chemistry'],
      link: '/year1',
      color: 'from-blue-600 to-cyan-600',
      icon: '🎓'
    },
    {
      year: 'Year 2',
      subjects: ['DBMS', 'Networks', 'Digital Logic', 'Data Structures'],
      link: '/year2',
      color: 'from-green-600 to-teal-600',
      icon: '🔬'
    },
    {
      year: 'Year 3',
      subjects: ['Machine Learning', 'React', 'Operating Systems', 'Software Engineering'],
      link: '/year3',
      color: 'from-purple-600 to-violet-600',
      icon: '⚡'
    },
    {
      year: 'Year 4',
      subjects: ['Deep Learning', 'Cloud DevOps', 'AI', 'Big Data'],
      link: '/year4',
      color: 'from-red-600 to-pink-600',
      icon: '🚀'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-800 dark:via-purple-800 dark:to-indigo-800 text-white py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
            Tech Hub Learning
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-blue-100 leading-relaxed">
            Your comprehensive platform for engineering education, featuring structured learning paths, 
            practical coding exercises, and career preparation resources.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/resources"
              className="px-8 py-4 bg-white text-blue-600 rounded-2xl font-semibold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Start Learning
            </Link>
            <Link
              to="/roadmaps"
              className="px-8 py-4 border-2 border-white text-white rounded-2xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              View Roadmaps
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Comprehensive resources designed to accelerate your engineering journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Link
                key={index}
                to={feature.link}
                className="group bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-gray-100 dark:border-gray-600"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Years Section */}
      <section className="py-24 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Academic Resources by Year
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Structured learning materials organized by academic year for easy navigation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {yearCards.map((year, index) => (
              <Link
                key={index}
                to={year.link}
                className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
              >
                <div className={`w-20 h-20 bg-gradient-to-r ${year.color} rounded-2xl flex items-center justify-center text-4xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {year.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {year.year}
                </h3>
                <ul className="space-y-2 mb-6">
                  {year.subjects.map((subject, subIndex) => (
                    <li key={subIndex} className="text-gray-600 dark:text-gray-300 text-sm flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      {subject}
                    </li>
                  ))}
                </ul>
                <div className="text-blue-600 dark:text-blue-400 font-semibold group-hover:underline">
                  Explore Resources →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-4">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">100+</div>
              <div className="text-gray-600 dark:text-gray-400">Video Tutorials</div>
            </div>
            <div className="space-y-4">
              <div className="text-4xl font-bold text-green-600 dark:text-green-400">50+</div>
              <div className="text-gray-600 dark:text-gray-400">Practice Projects</div>
            </div>
            <div className="space-y-4">
              <div className="text-4xl font-bold text-purple-600 dark:text-purple-400">25+</div>
              <div className="text-gray-600 dark:text-gray-400">Learning Paths</div>
            </div>
            <div className="space-y-4">
              <div className="text-4xl font-bold text-orange-600 dark:text-orange-400">24/7</div>
              <div className="text-gray-600 dark:text-gray-400">Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-800 dark:to-purple-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Accelerate Your Learning?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of students who are already advancing their careers with our platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/resources"
              className="px-8 py-4 bg-white text-blue-600 rounded-2xl font-semibold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Started Now
            </Link>
            <Link
              to="/about"
              className="px-8 py-4 border-2 border-white text-white rounded-2xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
