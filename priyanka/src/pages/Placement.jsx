import { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Link } from 'react-router-dom';
import anime from 'animejs/lib/anime.es.js';

export default function Placement() {
  const { isDark } = useTheme();
  const [activeTab, setActiveTab] = useState('interview');

  const interviewTopics = [
    {
      category: "Technical Skills",
      icon: "💻",
      topics: [
        "Data Structures & Algorithms",
        "System Design",
        "Object-Oriented Programming",
        "Database Management",
        "Web Development",
        "Problem Solving"
      ]
    },
    {
      category: "Behavioral Skills",
      icon: "🗣️",
      topics: [
        "Communication Skills",
        "Leadership Experience",
        "Teamwork & Collaboration",
        "Problem-Solving Approach",
        "Adaptability",
        "Time Management"
      ]
    },
    {
      category: "Company Research",
      icon: "🔍",
      topics: [
        "Company Values & Culture",
        "Recent News & Updates",
        "Products & Services",
        "Competitors Analysis",
        "Growth Opportunities",
        "Interview Process"
      ]
    }
  ];

  const companies = [
    {
      name: "Google",
      logo: "🟩",
      difficulty: "Very Hard",
      process: ["Online Assessment", "Phone Interview", "Onsite (4-5 rounds)"],
      tips: "Focus on algorithms, system design, and Googleyness",
      averageSalary: "$180k - $350k"
    },
    {
      name: "Microsoft",
      logo: "🟦",
      difficulty: "Hard",
      process: ["Online Assessment", "Phone Screen", "Onsite (3-4 rounds)"],
      tips: "Emphasize collaboration and growth mindset",
      averageSalary: "$160k - $300k"
    },
    {
      name: "Amazon",
      logo: "🟧",
      difficulty: "Hard", 
      process: ["Online Assessment", "Phone Interview", "Onsite (5-6 rounds)"],
      tips: "Know the Leadership Principles deeply",
      averageSalary: "$150k - $280k"
    },
    {
      name: "Meta",
      logo: "🟪",
      difficulty: "Very Hard",
      process: ["Phone Screen", "Technical Interview", "Onsite (4-5 rounds)"],
      tips: "Focus on impact and building for people",
      averageSalary: "$170k - $320k"
    },
    {
      name: "Apple",
      logo: "⚪",
      difficulty: "Hard",
      process: ["Phone Screen", "Technical Interview", "Onsite (3-4 rounds)"],
      tips: "Show passion for products and attention to detail",
      averageSalary: "$165k - $310k"
    },
    {
      name: "Netflix",
      logo: "🔴",
      difficulty: "Very Hard",
      process: ["Phone Screen", "Technical Round", "Onsite (2-3 rounds)"],
      tips: "Demonstrate high performance and culture fit",
      averageSalary: "$200k - $400k"
    }
  ];

  const resumeTips = [
    {
      title: "Contact Information",
      description: "Include full name, phone, email, LinkedIn, and GitHub",
      icon: "📞"
    },
    {
      title: "Professional Summary",
      description: "2-3 lines highlighting your key skills and experience",
      icon: "📝"
    },
    {
      title: "Technical Skills",
      description: "List programming languages, frameworks, and tools",
      icon: "⚙️"
    },
    {
      title: "Experience",
      description: "Use action verbs and quantify achievements",
      icon: "💼"
    },
    {
      title: "Projects",
      description: "Showcase 2-3 significant projects with tech stack",
      icon: "🚀"
    },
    {
      title: "Education",
      description: "Include degree, university, GPA (if above 3.5)",
      icon: "🎓"
    }
  ];

  const interviewTips = [
    "Practice coding on a whiteboard or paper",
    "Explain your thought process out loud",
    "Ask clarifying questions before starting",
    "Consider edge cases and time complexity",
    "Practice system design problems",
    "Prepare STAR format behavioral stories",
    "Research the company thoroughly",
    "Prepare thoughtful questions to ask"
  ];

  useEffect(() => {
    anime.timeline()
      .add({
        targets: '.hero-section',
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 800,
        easing: 'easeOutCubic'
      })
      .add({
        targets: '.content-section',
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 600,
        delay: anime.stagger(100),
        easing: 'easeOutCubic'
      }, '-=400');
  }, [activeTab]);

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return 'from-green-500 to-emerald-600';
      case 'Medium': return 'from-yellow-500 to-orange-600';
      case 'Hard': return 'from-orange-500 to-red-600';
      case 'Very Hard': return 'from-red-500 to-pink-600';
      default: return 'from-blue-500 to-indigo-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="hero-section bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-800 dark:via-indigo-800 dark:to-purple-800 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
            Career Placement
      </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100">
            Get interview-ready with comprehensive preparation guides and insider tips
          </p>
          <div className="flex justify-center space-x-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-2">
              <span className="text-sm">🎯 Interview Prep</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-2">
              <span className="text-sm">📄 Resume Guide</span>
        </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-2">
              <span className="text-sm">🏢 Top Companies</span>
              </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-b border-gray-200/50 dark:border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-1 bg-gray-100 dark:bg-gray-700 rounded-xl p-1 max-w-2xl mx-auto">
            {['interview', 'resume', 'companies'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-3 px-6 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeTab === tab
                    ? 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {tab === 'interview' && '💼 Interview Prep'}
                {tab === 'resume' && '📄 Resume Guide'}
                {tab === 'companies' && '🏢 Top Companies'}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeTab === 'interview' && (
            <div className="content-section space-y-12">
              {/* Interview Topics */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                  Interview Preparation Topics
            </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {interviewTopics.map((category, index) => (
                    <div
                      key={index}
                      className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
                    >
                      <div className="text-center mb-6">
                        <div className="text-4xl mb-3">{category.icon}</div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {category.category}
                </h3>
                      </div>
                      <ul className="space-y-3">
                        {category.topics.map((topic, topicIndex) => (
                          <li key={topicIndex} className="flex items-center text-gray-600 dark:text-gray-300">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                            {topic}
                          </li>
                        ))}
                      </ul>
                      </div>
                    ))}
                  </div>
                </div>

              {/* Interview Tips */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                  🎯 Essential Interview Tips
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {interviewTips.map((tip, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm"
                    >
                      <span className="text-blue-500 font-bold text-lg">{index + 1}</span>
                      <span className="text-gray-700 dark:text-gray-300">{tip}</span>
              </div>
            ))}
          </div>
        </div>
            </div>
          )}

          {activeTab === 'resume' && (
            <div className="content-section">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                Resume Building Guide
            </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {resumeTips.map((tip, index) => (
              <div
                key={index}
                    className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="text-center mb-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-2xl">{tip.icon}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {tip.title}
                    </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-center">
                      {tip.description}
                    </p>
                  </div>
                ))}
                </div>

              {/* Resume Template */}
              <div className="mt-12 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                  📄 Resume Template Structure
                </h3>
                <div className="space-y-4 text-gray-600 dark:text-gray-300">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <strong>Header:</strong> Name, Phone, Email, LinkedIn, GitHub
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <strong>Summary:</strong> 2-3 lines highlighting key skills and experience
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <strong>Technical Skills:</strong> Programming languages, frameworks, databases, tools
                  </div>
                  <div className="border-l-4 border-orange-500 pl-4">
                    <strong>Experience:</strong> Company, Role, Duration, Key achievements with metrics
                  </div>
                  <div className="border-l-4 border-red-500 pl-4">
                    <strong>Projects:</strong> Project name, technologies used, brief description
                  </div>
                  <div className="border-l-4 border-indigo-500 pl-4">
                    <strong>Education:</strong> Degree, University, GPA (if above 3.5)
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'companies' && (
            <div className="content-section">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                Top Tech Companies
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {companies.map((company, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <span className="text-3xl">{company.logo}</span>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {company.name}
              </h3>
                      </div>
                      <span className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${getDifficultyColor(company.difficulty)} text-white`}>
                        {company.difficulty}
                      </span>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white mb-2">Interview Process:</h4>
                        <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                          {company.process.map((step, stepIndex) => (
                            <li key={stepIndex} className="flex items-center">
                              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                              {step}
                            </li>
                          ))}
                        </ul>
            </div>

                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white mb-2">Key Tips:</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{company.tips}</p>
            </div>

                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white mb-2">Average Salary:</h4>
                        <p className="text-sm font-semibold text-green-600 dark:text-green-400">
                          {company.averageSalary}
              </p>
            </div>
          </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-800 dark:to-purple-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 text-white">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Land Your Dream Job?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Start practicing and build your profile to track your progress
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/coding"
              className="px-8 py-4 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-all duration-200 transform hover:scale-105"
            >
              Practice Coding
            </Link>
            <Link
              to="/profile"
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              Track Progress
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}