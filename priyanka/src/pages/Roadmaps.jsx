import { useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Link } from 'react-router-dom';
import anime from 'animejs/lib/anime.es.js';

export default function Roadmaps() {
  const { isDark } = useTheme();

  const roadmaps = [
    {
      id: 'frontend',
      title: '🎨 Frontend Development',
      description: 'Master modern web development with HTML, CSS, JavaScript, and React',
      duration: '6-8 months',
      difficulty: 'Beginner to Intermediate',
      topics: ['HTML & CSS', 'JavaScript', 'React', 'TypeScript', 'Next.js'],
      color: 'from-green-500 to-emerald-600',
      icon: '🎨'
    },
    {
      id: 'backend',
      title: '⚙️ Backend Development',
      description: 'Build robust server-side applications with Node.js, Python, and databases',
      duration: '8-10 months',
      difficulty: 'Intermediate to Advanced',
      topics: ['Node.js', 'Python', 'Databases', 'APIs', 'Authentication'],
      color: 'from-purple-500 to-pink-600',
      icon: '⚙️'
    },
    {
      id: 'fullstack',
      title: '🌐 Full Stack Development',
      description: 'Complete web development from frontend to backend and deployment',
      duration: '12-15 months',
      difficulty: 'Intermediate to Advanced',
      topics: ['Frontend', 'Backend', 'Databases', 'DevOps', 'Deployment'],
      color: 'from-blue-500 to-indigo-600',
      icon: '🌐'
    },
    {
      id: 'dataScience',
      title: '📊 Data Science & AI',
      description: 'Learn data analysis, machine learning, and artificial intelligence',
      duration: '10-12 months',
      difficulty: 'Intermediate to Advanced',
      topics: ['Python', 'Statistics', 'Machine Learning', 'Deep Learning', 'AI'],
      color: 'from-orange-500 to-red-600',
      icon: '📊'
    },
    {
      id: 'mobile',
      title: '📱 Mobile Development',
      description: 'Create mobile applications for iOS and Android platforms',
      duration: '8-10 months',
      difficulty: 'Intermediate to Advanced',
      topics: ['React Native', 'Flutter', 'iOS Development', 'Android Development'],
      color: 'from-teal-500 to-cyan-600',
      icon: '📱'
    },
    {
      id: 'cybersecurity',
      title: '🔒 Cybersecurity',
      description: 'Learn to protect systems, networks, and programs from digital attacks',
      duration: '10-12 months',
      difficulty: 'Advanced',
      topics: ['Network Security', 'Ethical Hacking', 'Cryptography', 'Security Tools'],
      color: 'from-red-500 to-pink-600',
      icon: '🔒'
    },
    {
      id: 'cloud',
      title: '☁️ Cloud & DevOps',
      description: 'Master cloud computing, containerization, and deployment automation',
      duration: '8-10 months',
      difficulty: 'Intermediate to Advanced',
      topics: ['AWS/Azure', 'Docker', 'Kubernetes', 'CI/CD', 'Infrastructure'],
      color: 'from-indigo-500 to-purple-600',
      icon: '☁️'
    },
    {
      id: 'systemDesign',
      title: '🏗️ System Design',
      description: 'Design scalable and efficient software systems and architectures',
      duration: '6-8 months',
      difficulty: 'Advanced',
      topics: ['Architecture', 'Scalability', 'Performance', 'Design Patterns'],
      color: 'from-yellow-500 to-orange-600',
      icon: '🏗️'
    }
  ];

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
        targets: '.roadmap-grid',
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 600,
        delay: anime.stagger(100),
        easing: 'easeOutCubic'
      }, '-=400')
      .add({
        targets: '.how-it-works',
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 600,
        delay: 400,
        easing: 'easeOutCubic'
      }, '-=200');
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="hero-section bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-800 dark:via-purple-800 dark:to-pink-800 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-100">
            Learning Roadmaps
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-purple-100">
            Structured learning paths to master different areas of technology
          </p>
          <div className="flex justify-center space-x-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-2">
              <span className="text-sm">🎯 {roadmaps.length} Roadmaps</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-2">
              <span className="text-sm">📚 8 Categories</span>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmaps Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="roadmap-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roadmaps.map((roadmap) => (
              <div
                key={roadmap.id}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
              >
                {/* Header */}
                <div className={`bg-gradient-to-r ${roadmap.color} p-6 text-white`}>
                  <div className="text-4xl mb-3">{roadmap.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{roadmap.title}</h3>
                  <p className="text-sm opacity-90">{roadmap.description}</p>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Stats */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-center">
                      <p className="text-sm text-gray-600 dark:text-gray-400">Duration</p>
                      <p className="font-semibold text-gray-900 dark:text-white">{roadmap.duration}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-gray-600 dark:text-gray-400">Difficulty</p>
                      <p className="font-semibold text-gray-900 dark:text-white">{roadmap.difficulty}</p>
                    </div>
                  </div>

                  {/* Topics */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">What You'll Learn</h4>
                    <div className="space-y-2">
                      {roadmap.topics.map((topic, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-sm text-gray-600 dark:text-gray-300">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <Link
                    to={`/resources?category=${roadmap.id}`}
                    className={`w-full bg-gradient-to-r ${roadmap.color} hover:opacity-90 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 text-center block transform hover:scale-105`}
                  >
                    Start Learning
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works py-16 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Follow our structured learning paths to achieve your tech goals efficiently
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Choose Your Path
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Select from our curated learning roadmaps based on your interests and career goals
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Learn Step by Step
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Follow our structured curriculum with video tutorials, projects, and hands-on exercises
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Build & Deploy
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Apply your knowledge by building real projects and deploying them to production
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Choose a roadmap and begin your path to becoming a tech expert
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/resources"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              Explore Resources
            </Link>
            <Link
              to="/profile"
              className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-medium rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200"
            >
              Track Progress
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
