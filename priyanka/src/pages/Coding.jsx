import { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Link } from 'react-router-dom';
import anime from 'animejs/lib/anime.es.js';

export default function Coding() {
  const { isDark } = useTheme();
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');

  const difficulties = ['all', 'Easy', 'Medium', 'Hard'];

  const codingChallenges = [
    {
      id: 1,
      title: "Two Sum",
      difficulty: "Easy",
      description: "Find two numbers in an array that add up to a target sum",
      tags: ["Array", "Hash Table"],
      timeComplexity: "O(n)",
      spaceComplexity: "O(n)",
      link: "#"
    },
    {
      id: 2,
      title: "Reverse Linked List",
      difficulty: "Easy",
      description: "Reverse a singly linked list iteratively and recursively",
      tags: ["Linked List", "Recursion"],
      timeComplexity: "O(n)",
      spaceComplexity: "O(1)",
      link: "#"
    },
    {
      id: 3,
      title: "Binary Tree Inorder Traversal",
      difficulty: "Medium",
      description: "Traverse a binary tree in inorder (left, root, right)",
      tags: ["Tree", "DFS", "Recursion"],
      timeComplexity: "O(n)",
      spaceComplexity: "O(h)",
      link: "#"
    },
    {
      id: 4,
      title: "Maximum Subarray",
      difficulty: "Medium",
      description: "Find the contiguous subarray with the largest sum",
      tags: ["Array", "Dynamic Programming"],
      timeComplexity: "O(n)",
      spaceComplexity: "O(1)",
      link: "#"
    },
    {
      id: 5,
      title: "Merge k Sorted Lists",
      difficulty: "Hard",
      description: "Merge k sorted linked lists and return as one sorted list",
      tags: ["Linked List", "Divide and Conquer", "Heap"],
      timeComplexity: "O(n log k)",
      spaceComplexity: "O(log k)",
      link: "#"
    },
    {
      id: 6,
      title: "Serialize and Deserialize Binary Tree",
      difficulty: "Hard",
      description: "Design an algorithm to serialize and deserialize a binary tree",
      tags: ["Tree", "Design", "String"],
      timeComplexity: "O(n)",
      spaceComplexity: "O(n)",
      link: "#"
    }
  ];

  const projects = [
    {
      id: 1,
      title: "Todo List App",
      difficulty: "Easy",
      description: "Build a complete todo application with CRUD operations",
      tech: ["React", "CSS", "LocalStorage"],
      estimatedTime: "4-6 hours",
      features: ["Add/Edit/Delete tasks", "Mark as complete", "Filter by status"]
    },
    {
      id: 2,
      title: "Weather Dashboard",
      difficulty: "Medium",
      description: "Create a weather app using external API with location search",
      tech: ["React", "API Integration", "CSS"],
      estimatedTime: "8-10 hours",
      features: ["Current weather", "5-day forecast", "Location search", "Responsive design"]
    },
    {
      id: 3,
      title: "E-commerce Platform",
      difficulty: "Hard",
      description: "Full-stack e-commerce platform with payment integration",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      estimatedTime: "3-4 weeks",
      features: ["User authentication", "Product catalog", "Shopping cart", "Payment processing"]
    }
  ];

  const filteredChallenges = selectedDifficulty === 'all' 
    ? codingChallenges 
    : codingChallenges.filter(challenge => challenge.difficulty === selectedDifficulty);

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
        targets: '.challenge-grid',
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 600,
        delay: anime.stagger(100),
        easing: 'easeOutCubic'
      }, '-=400')
      .add({
        targets: '.projects-section',
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 600,
        easing: 'easeOutCubic'
      }, '-=200');
  }, [selectedDifficulty]);

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return 'from-green-500 to-emerald-600';
      case 'Medium': return 'from-yellow-500 to-orange-600';
      case 'Hard': return 'from-red-500 to-pink-600';
      default: return 'from-blue-500 to-indigo-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="hero-section bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 dark:from-purple-800 dark:via-pink-800 dark:to-red-800 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-100">
            Coding Practice
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-purple-100">
            Sharpen your coding skills with algorithmic challenges and hands-on projects
          </p>
          <div className="flex justify-center space-x-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-2">
              <span className="text-sm">💻 {codingChallenges.length} Challenges</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-2">
              <span className="text-sm">🚀 {projects.length} Projects</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-2">
              <span className="text-sm">🎯 All Levels</span>
            </div>
          </div>
        </div>
      </section>

      {/* Difficulty Filter */}
      <section className="py-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-b border-gray-200/50 dark:border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {difficulties.map((difficulty) => (
              <button
                key={difficulty}
                onClick={() => setSelectedDifficulty(difficulty)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 transform hover:scale-105 ${
                  selectedDifficulty === difficulty
                    ? `bg-gradient-to-r ${getDifficultyColor(difficulty)} text-white shadow-lg`
                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 border border-gray-200 dark:border-gray-600'
                }`}
              >
                {difficulty === 'all' ? 'All Levels' : difficulty}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Coding Challenges */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Coding Challenges
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Practice algorithmic thinking with these curated coding problems
            </p>
          </div>

          <div className="challenge-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredChallenges.map((challenge) => (
              <div
                key={challenge.id}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                  <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {challenge.title}
                        </h3>
                  <span className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${getDifficultyColor(challenge.difficulty)} text-white`}>
                    {challenge.difficulty}
                            </span>
                </div>

                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {challenge.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {challenge.tags.map((tag, index) => (
                        <span
                      key={index}
                      className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"
                        >
                      {tag}
                        </span>
                      ))}
                  </div>

                <div className="space-y-1 text-xs text-gray-500 dark:text-gray-400 mb-4">
                  <div>Time: {challenge.timeComplexity}</div>
                  <div>Space: {challenge.spaceComplexity}</div>
                </div>

                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200">
                  Solve Challenge
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section py-16 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Hands-on Projects
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Build real-world applications to strengthen your development skills
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <span className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${getDifficultyColor(project.difficulty)} text-white`}>
                    {project.difficulty}
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
              </div>
            </div>

                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Key Features:</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
              </div>

                <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  Estimated time: {project.estimatedTime}
            </div>

                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200">
                  Start Project
                </button>
              </div>
            ))}
            </div>
              </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Level Up Your Coding Skills?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Practice makes perfect. Start with challenges or dive into projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/profile"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              Track Progress
            </Link>
            <Link
              to="/resources"
              className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-medium rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200"
            >
              Learn Fundamentals
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}