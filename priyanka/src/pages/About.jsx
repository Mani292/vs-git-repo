import { useTheme } from '../contexts/ThemeContext';

export default function About() {
  const { isDark } = useTheme();

  const teamMembers = [
    {
      name: "Tech Hub Team",
      role: "AI-Powered Learning Platform",
      avatar: "🚀",
      description: "Dedicated to revolutionizing B.Tech education through advanced AI technology and comprehensive learning resources."
    }
  ];

  const features = [
    {
      icon: "🤖",
      title: "Advanced AI Assistant",
      description: "Super AI-powered chatbot with multiple skills for personalized learning guidance."
    },
    {
      icon: "📚",
      title: "Comprehensive Resources",
      description: "Complete study materials, notes, and resources for all B.Tech semesters."
    },
    {
      icon: "💻",
      title: "Coding Platforms",
      description: "Access to 12+ professional coding platforms for practice and skill development."
    },
    {
      icon: "🎯",
      title: "Career Guidance",
      description: "AI-powered career planning, interview preparation, and placement assistance."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gradient-dark transition-colors duration-300">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 dark:from-gray-900 dark:via-indigo-900 dark:to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="bg-gradient-to-r from-neon-blue to-neon-pink bg-clip-text text-transparent">Tech Hub</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Revolutionizing B.Tech education with AI-powered learning, comprehensive resources, 
            and advanced technology to help students excel in their academic and career journey.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                To provide B.Tech students with the most advanced, comprehensive, and personalized 
                learning experience through cutting-edge AI technology and curated educational resources.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                We believe every student deserves access to world-class education tools that adapt 
                to their learning style and help them achieve their full potential.
              </p>
              <div className="flex space-x-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-neon-blue">500+</div>
                  <div className="text-gray-600 dark:text-gray-400">Study Resources</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-neon-purple">1000+</div>
                  <div className="text-gray-600 dark:text-gray-400">Students Helped</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-neon-pink">95%</div>
                  <div className="text-gray-600 dark:text-gray-400">Success Rate</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-neon-blue to-neon-purple p-8 rounded-xl text-white">
              <h3 className="text-2xl font-bold mb-4">Why Choose Tech Hub?</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="mr-3">✅</span>
                  AI-Powered Personalized Learning
                </li>
                <li className="flex items-center">
                  <span className="mr-3">✅</span>
                  Comprehensive Study Materials
                </li>
                <li className="flex items-center">
                  <span className="mr-3">✅</span>
                  Advanced Coding Platforms
                </li>
                <li className="flex items-center">
                  <span className="mr-3">✅</span>
                  Career Guidance & Placement
                </li>
                <li className="flex items-center">
                  <span className="mr-3">✅</span>
                  Real-time AI Assistance
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What Makes Us Special
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Advanced features that set Tech Hub apart from traditional learning platforms
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-200 dark:border-gray-700"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Dedicated to revolutionizing B.Tech education
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="text-6xl mb-4">{member.avatar}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-neon-blue font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-400">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-700 dark:to-purple-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Learning?
          </h2>
          <p className="text-xl mb-8 text-indigo-100">
            Join thousands of students who are already achieving their goals with Tech Hub
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-white text-indigo-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </a>
            <a
              href="/resources"
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-indigo-600 transition-all duration-300 transform hover:scale-105"
            >
              Explore Resources
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}


