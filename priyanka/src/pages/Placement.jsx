// src/pages/Placement.tsx
import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

export default function Placement() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { isDark } = useTheme();

  const categories = [
    { id: 'all', name: 'All Categories', icon: '🎯' },
    { id: 'preparation', name: 'Interview Prep', icon: '📚' },
    { id: 'companies', name: 'Top Companies', icon: '🏢' },
    { id: 'skills', name: 'Skill Development', icon: '💻' },
    { id: 'resources', name: 'Resources', icon: '📖' }
  ];

  const placementData = [
    {
      id: 1,
      title: "Complete Interview Preparation Guide",
      category: "preparation",
      description: "Comprehensive guide covering technical interviews, behavioral questions, and coding challenges.",
      type: "Guide",
      difficulty: "All Levels",
      duration: "2-3 months",
      features: ["Technical Questions", "Behavioral Prep", "Coding Challenges", "Mock Interviews"]
    },
    {
      id: 2,
      title: "FAANG Company Interview Patterns",
      category: "companies",
      description: "Detailed analysis of interview patterns and preparation strategies for top tech companies.",
      type: "Analysis",
      difficulty: "Advanced",
      duration: "4-6 months",
      features: ["Company Specific", "Question Patterns", "Success Stories", "Tips & Tricks"]
    },
    {
      id: 3,
      title: "Data Structures & Algorithms Mastery",
      category: "skills",
      description: "Master DSA concepts with 500+ practice problems and detailed solutions.",
      type: "Course",
      difficulty: "Intermediate",
      duration: "3-4 months",
      features: ["500+ Problems", "Video Solutions", "Practice Tests", "Progress Tracking"]
    },
    {
      id: 4,
      title: "System Design Interview Prep",
      category: "preparation",
      description: "Learn system design concepts and practice with real-world scenarios.",
      type: "Course",
      difficulty: "Advanced",
      duration: "2-3 months",
      features: ["Design Patterns", "Scalability", "Case Studies", "Mock Sessions"]
    },
    {
      id: 5,
      title: "Resume Building Workshop",
      category: "resources",
      description: "Create a compelling resume that stands out to recruiters and hiring managers.",
      type: "Workshop",
      difficulty: "Beginner",
      duration: "1-2 weeks",
      features: ["Template Library", "ATS Optimization", "Review Service", "Portfolio Tips"]
    },
    {
      id: 6,
      title: "Behavioral Interview Mastery",
      category: "preparation",
      description: "Master behavioral questions with the STAR method and compelling storytelling.",
      type: "Guide",
      difficulty: "All Levels",
      duration: "1-2 months",
      features: ["STAR Method", "Story Examples", "Practice Questions", "Video Coaching"]
    }
  ];

  const topCompanies = [
    { name: "Google", logo: "🔍", hiring: "Active", difficulty: "Very High", avgSalary: "$150K+" },
    { name: "Microsoft", logo: "🪟", hiring: "Active", difficulty: "High", avgSalary: "$130K+" },
    { name: "Amazon", logo: "📦", hiring: "Active", difficulty: "High", avgSalary: "$140K+" },
    { name: "Apple", logo: "🍎", hiring: "Active", difficulty: "Very High", avgSalary: "$160K+" },
    { name: "Meta", logo: "📘", hiring: "Active", difficulty: "High", avgSalary: "$145K+" },
    { name: "Netflix", logo: "🎬", hiring: "Selective", difficulty: "Very High", avgSalary: "$180K+" }
  ];

  const stats = [
    { label: "Students Placed", value: "500+", icon: "🎓" },
    { label: "Average Package", value: "$85K", icon: "💰" },
    { label: "Success Rate", value: "92%", icon: "📈" },
    { label: "Partner Companies", value: "50+", icon: "🤝" }
  ];

  const filteredData = selectedCategory === 'all' 
    ? placementData 
    : placementData.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gradient-dark transition-colors duration-300">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 dark:from-gray-900 dark:via-indigo-900 dark:to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Career <span className="bg-gradient-to-r from-neon-blue to-neon-pink bg-clip-text text-transparent">Placement</span>
      </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive placement assistance, interview preparation, and career guidance 
            to help you land your dream job in the tech industry.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-neon-blue mb-2">{stat.value}</div>
                <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-white shadow-neon'
                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-neon-blue hover:to-neon-purple hover:text-white'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Resources */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Placement Resources
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Everything you need to prepare for your dream job
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredData.map((item) => (
              <div
                key={item.id}
                className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-200 dark:border-gray-600"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-neon-blue to-neon-purple text-white rounded-full text-xs font-medium">
                    {item.type}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {item.difficulty}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {item.description}
                </p>

                <div className="mb-4">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                    <span className="mr-2">⏱️</span>
                    {item.duration}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Features:
                  </h4>
                  <div className="space-y-1">
                    {item.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <span className="text-neon-green mr-2">✓</span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <button className="w-full px-4 py-2 bg-gradient-to-r from-neon-blue to-neon-purple text-white rounded-lg hover:from-neon-purple hover:to-neon-pink transition-all duration-300 font-medium">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Companies */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Top Hiring Companies
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Companies actively hiring B.Tech graduates
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topCompanies.map((company, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-4">{company.logo}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {company.name}
                    </h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      company.hiring === 'Active' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                        : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'
                    }`}>
                      {company.hiring}
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Difficulty:</span>
                    <span className="text-gray-900 dark:text-white font-medium">{company.difficulty}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Avg Salary:</span>
                    <span className="text-neon-green font-medium">{company.avgSalary}</span>
                  </div>
                </div>

                <button className="w-full mt-4 px-4 py-2 border border-neon-blue text-neon-blue rounded-lg hover:bg-neon-blue hover:text-white transition-all duration-300 font-medium">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interview Tips */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Interview Success Tips
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Proven strategies to ace your technical interviews
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Master DSA
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Practice 300+ problems covering all data structures and algorithms.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🏗️</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                System Design
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Learn scalable architecture patterns and design principles.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Communication
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Practice explaining your solutions clearly and confidently.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Mock Interviews
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Simulate real interview conditions with our AI-powered platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-700 dark:to-purple-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Land Your Dream Job?
          </h2>
          <p className="text-xl mb-8 text-indigo-100">
            Start your placement preparation journey today and join thousands of successful graduates
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-indigo-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Start Preparation
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-indigo-600 transition-all duration-300 transform hover:scale-105">
              Book Mock Interview
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
