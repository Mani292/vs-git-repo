import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

export default function Roadmaps() {
  const [selectedRoadmap, setSelectedRoadmap] = useState(null);
  const { isDark } = useTheme();

  const roadmaps = [
    {
      id: 'frontend',
      title: 'Frontend Development',
      icon: '🎨',
      description: 'Master modern frontend technologies and build stunning user interfaces',
      duration: '6-8 months',
      difficulty: 'Beginner to Advanced',
      skills: ['HTML/CSS', 'JavaScript', 'React', 'Vue.js', 'TypeScript'],
      steps: [
        {
          phase: 'Foundation',
          topics: ['HTML5 & CSS3', 'JavaScript ES6+', 'Responsive Design', 'CSS Grid & Flexbox'],
          duration: '2-3 months'
        },
        {
          phase: 'Framework',
          topics: ['React.js', 'State Management', 'Hooks', 'Component Architecture'],
          duration: '2-3 months'
        },
        {
          phase: 'Advanced',
          topics: ['TypeScript', 'Testing', 'Performance', 'Deployment'],
          duration: '2 months'
        }
      ]
    },
    {
      id: 'backend',
      title: 'Backend Development',
      icon: '⚙️',
      description: 'Build robust server-side applications and APIs',
      duration: '8-10 months',
      difficulty: 'Intermediate to Advanced',
      skills: ['Node.js', 'Python', 'Databases', 'APIs', 'DevOps'],
      steps: [
        {
          phase: 'Programming',
          topics: ['Node.js', 'Express.js', 'Python', 'FastAPI', 'REST APIs'],
          duration: '3-4 months'
        },
        {
          phase: 'Database',
          topics: ['SQL', 'MongoDB', 'Redis', 'Database Design', 'ORM'],
          duration: '2-3 months'
        },
        {
          phase: 'Advanced',
          topics: ['Authentication', 'Security', 'Testing', 'Deployment', 'CI/CD'],
          duration: '3 months'
        }
      ]
    },
    {
      id: 'fullstack',
      title: 'Full-Stack Development',
      icon: '🚀',
      description: 'Complete web development from frontend to backend',
      duration: '10-12 months',
      difficulty: 'Intermediate to Advanced',
      skills: ['Frontend', 'Backend', 'Databases', 'DevOps', 'Architecture'],
      steps: [
        {
          phase: 'Frontend',
          topics: ['React/Vue', 'State Management', 'UI/UX', 'Responsive Design'],
          duration: '3-4 months'
        },
        {
          phase: 'Backend',
          topics: ['Node.js/Python', 'APIs', 'Databases', 'Authentication'],
          duration: '3-4 months'
        },
        {
          phase: 'Integration',
          topics: ['Full-Stack Apps', 'Deployment', 'Performance', 'Security'],
          duration: '4 months'
        }
      ]
    },
    {
      id: 'mobile',
      title: 'Mobile Development',
      icon: '📱',
      description: 'Create cross-platform mobile applications',
      duration: '6-8 months',
      difficulty: 'Intermediate',
      skills: ['React Native', 'Flutter', 'Mobile UI', 'APIs', 'Deployment'],
      steps: [
        {
          phase: 'Foundation',
          topics: ['React Native', 'Flutter', 'Mobile UI/UX', 'Navigation'],
          duration: '2-3 months'
        },
        {
          phase: 'Advanced',
          topics: ['State Management', 'APIs', 'Native Modules', 'Testing'],
          duration: '2-3 months'
        },
        {
          phase: 'Deployment',
          topics: ['App Store', 'Play Store', 'CI/CD', 'Performance'],
          duration: '2 months'
        }
      ]
    },
    {
      id: 'ai-ml',
      title: 'AI & Machine Learning',
      icon: '🤖',
      description: 'Master artificial intelligence and machine learning',
      duration: '12-15 months',
      difficulty: 'Advanced',
      skills: ['Python', 'TensorFlow', 'PyTorch', 'Mathematics', 'Data Science'],
      steps: [
        {
          phase: 'Foundation',
          topics: ['Python', 'Mathematics', 'Statistics', 'Data Analysis'],
          duration: '3-4 months'
        },
        {
          phase: 'ML Basics',
          topics: ['Supervised Learning', 'Unsupervised Learning', 'Scikit-learn'],
          duration: '3-4 months'
        },
        {
          phase: 'Deep Learning',
          topics: ['Neural Networks', 'TensorFlow', 'PyTorch', 'Computer Vision'],
          duration: '6 months'
        }
      ]
    },
    {
      id: 'devops',
      title: 'DevOps & Cloud',
      icon: '☁️',
      description: 'Master cloud infrastructure and deployment automation',
      duration: '8-10 months',
      difficulty: 'Intermediate to Advanced',
      skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Monitoring'],
      steps: [
        {
          phase: 'Cloud',
          topics: ['AWS/Azure', 'Cloud Services', 'Infrastructure as Code'],
          duration: '3-4 months'
        },
        {
          phase: 'Containers',
          topics: ['Docker', 'Kubernetes', 'Microservices', 'Orchestration'],
          duration: '3-4 months'
        },
        {
          phase: 'Automation',
          topics: ['CI/CD', 'Monitoring', 'Security', 'Performance'],
          duration: '2 months'
        }
      ]
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      icon: '🔒',
      description: 'Learn to protect systems and networks from digital attacks',
      duration: '10-12 months',
      difficulty: 'Intermediate to Advanced',
      skills: ['Network Security', 'Ethical Hacking', 'Cryptography', 'Incident Response'],
      steps: [
        {
          phase: 'Foundation',
          topics: ['Networking', 'Linux', 'Programming', 'Security Fundamentals'],
          duration: '3-4 months'
        },
        {
          phase: 'Security',
          topics: ['Ethical Hacking', 'Penetration Testing', 'Vulnerability Assessment'],
          duration: '4-5 months'
        },
        {
          phase: 'Advanced',
          topics: ['Cryptography', 'Incident Response', 'Security Tools', 'Compliance'],
          duration: '3 months'
        }
      ]
    },
    {
      id: 'data-science',
      title: 'Data Science',
      icon: '📊',
      description: 'Extract insights from data and build predictive models',
      duration: '12-15 months',
      difficulty: 'Intermediate to Advanced',
      skills: ['Python', 'Statistics', 'Machine Learning', 'Data Visualization'],
      steps: [
        {
          phase: 'Foundation',
          topics: ['Python', 'Statistics', 'Mathematics', 'Data Analysis'],
          duration: '4-5 months'
        },
        {
          phase: 'Data Processing',
          topics: ['Pandas', 'NumPy', 'Data Cleaning', 'Feature Engineering'],
          duration: '3-4 months'
        },
        {
          phase: 'ML & Visualization',
          topics: ['Scikit-learn', 'Matplotlib', 'Seaborn', 'Predictive Modeling'],
          duration: '5-6 months'
        }
      ]
    },
    {
      id: 'blockchain',
      title: 'Blockchain Development',
      icon: '⛓️',
      description: 'Build decentralized applications and smart contracts',
      duration: '8-10 months',
      difficulty: 'Advanced',
      skills: ['Solidity', 'Web3.js', 'Smart Contracts', 'DeFi'],
      steps: [
        {
          phase: 'Foundation',
          topics: ['Blockchain Basics', 'Cryptography', 'Ethereum', 'Smart Contracts'],
          duration: '3-4 months'
        },
        {
          phase: 'Development',
          topics: ['Solidity', 'Web3.js', 'DApp Development', 'Testing'],
          duration: '3-4 months'
        },
        {
          phase: 'Advanced',
          topics: ['DeFi', 'NFTs', 'Security', 'Deployment'],
          duration: '2 months'
        }
      ]
    },
    {
      id: 'game-dev',
      title: 'Game Development',
      icon: '🎮',
      description: 'Create engaging games and interactive experiences',
      duration: '10-12 months',
      difficulty: 'Intermediate to Advanced',
      skills: ['Unity', 'C#', 'Game Design', '3D Modeling'],
      steps: [
        {
          phase: 'Foundation',
          topics: ['Game Design', 'C# Programming', 'Unity Basics', '2D Games'],
          duration: '4-5 months'
        },
        {
          phase: 'Advanced',
          topics: ['3D Games', 'Physics', 'Animation', 'Audio'],
          duration: '4-5 months'
        },
        {
          phase: 'Polish',
          topics: ['UI/UX', 'Optimization', 'Testing', 'Publishing'],
          duration: '2 months'
        }
      ]
    },
    {
      id: 'ui-ux',
      title: 'UI/UX Design',
      icon: '🎨',
      description: 'Design beautiful and user-friendly digital experiences',
      duration: '8-10 months',
      difficulty: 'Beginner to Advanced',
      skills: ['Figma', 'Adobe XD', 'User Research', 'Prototyping'],
      steps: [
        {
          phase: 'Foundation',
          topics: ['Design Principles', 'Color Theory', 'Typography', 'User Research'],
          duration: '3-4 months'
        },
        {
          phase: 'Tools',
          topics: ['Figma', 'Adobe XD', 'Sketch', 'Prototyping'],
          duration: '3-4 months'
        },
        {
          phase: 'Advanced',
          topics: ['User Testing', 'Design Systems', 'Accessibility', 'Portfolio'],
          duration: '2 months'
        }
      ]
    },
    {
      id: 'cloud-computing',
      title: 'Cloud Computing',
      icon: '☁️',
      description: 'Master cloud platforms and scalable infrastructure',
      duration: '8-10 months',
      difficulty: 'Intermediate to Advanced',
      skills: ['AWS', 'Azure', 'Google Cloud', 'Serverless'],
      steps: [
        {
          phase: 'Foundation',
          topics: ['Cloud Basics', 'AWS Services', 'Virtual Machines', 'Storage'],
          duration: '3-4 months'
        },
        {
          phase: 'Advanced',
          topics: ['Serverless', 'Containers', 'Microservices', 'Security'],
          duration: '3-4 months'
        },
        {
          phase: 'Specialization',
          topics: ['Multi-cloud', 'DevOps', 'Cost Optimization', 'Architecture'],
          duration: '2 months'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gradient-dark transition-colors duration-300">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 dark:from-gray-900 dark:via-indigo-900 dark:to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Learning <span className="bg-gradient-to-r from-neon-blue to-neon-pink bg-clip-text text-transparent">Roadmaps</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Structured learning paths designed to take you from beginner to expert in your chosen field. 
            Follow these roadmaps to build a solid foundation and advance your career.
          </p>
        </div>
      </section>

      {/* Roadmaps Grid */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Choose Your Path
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Select a roadmap that aligns with your career goals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roadmaps.map((roadmap) => (
              <div
                key={roadmap.id}
                onClick={() => setSelectedRoadmap(roadmap)}
                className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-200 dark:border-gray-600 group"
              >
                <div className="text-4xl mb-4">{roadmap.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-neon-blue transition-colors">
                  {roadmap.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {roadmap.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <span className="mr-2">⏱️</span>
                    {roadmap.duration}
                  </div>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <span className="mr-2">📊</span>
                    {roadmap.difficulty}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {roadmap.skills.slice(0, 3).map((skill, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-white dark:bg-gray-600 text-gray-600 dark:text-gray-300 text-xs rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                  {roadmap.skills.length > 3 && (
                    <span className="px-2 py-1 bg-white dark:bg-gray-600 text-gray-600 dark:text-gray-300 text-xs rounded-md">
                      +{roadmap.skills.length - 3} more
                    </span>
                  )}
                </div>

                <button className="w-full px-4 py-2 bg-gradient-to-r from-neon-blue to-neon-purple text-white rounded-lg hover:from-neon-purple hover:to-neon-pink transition-all duration-300 font-medium">
                  View Roadmap
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Roadmap View */}
      {selectedRoadmap && (
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8">
              {/* Header */}
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">{selectedRoadmap.icon}</div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {selectedRoadmap.title} Roadmap
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                  {selectedRoadmap.description}
                </p>
                
                <div className="flex justify-center space-x-8 text-sm">
                  <div className="text-center">
                    <div className="text-neon-blue font-semibold">Duration</div>
                    <div className="text-gray-600 dark:text-gray-400">{selectedRoadmap.duration}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-neon-purple font-semibold">Difficulty</div>
                    <div className="text-gray-600 dark:text-gray-400">{selectedRoadmap.difficulty}</div>
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Skills You'll Learn
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedRoadmap.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gradient-to-r from-neon-blue to-neon-purple text-white rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Learning Steps */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  Learning Path
                </h3>
                <div className="space-y-6">
                  {selectedRoadmap.steps.map((step, index) => (
                    <div
                      key={index}
                      className="border-l-4 border-neon-blue pl-6 relative"
                    >
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-neon-blue rounded-full"></div>
                      <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Phase {index + 1}: {step.phase}
                          </h4>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {step.duration}
                          </span>
                        </div>
                        <div className="grid md:grid-cols-2 gap-3">
                          {step.topics.map((topic, topicIndex) => (
                            <div
                              key={topicIndex}
                              className="flex items-center text-gray-600 dark:text-gray-400"
                            >
                              <span className="text-neon-green mr-2">✓</span>
                              {topic}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button className="flex-1 px-6 py-3 bg-gradient-to-r from-neon-blue to-neon-purple text-white rounded-lg hover:from-neon-purple hover:to-neon-pink transition-all duration-300 font-medium">
                  Start Learning
                </button>
                <button 
                  onClick={() => setSelectedRoadmap(null)}
                  className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  Back to Roadmaps
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Tips Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Learning Tips
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Maximize your learning potential with these proven strategies
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Set Clear Goals
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Define specific, measurable objectives for each phase of your learning journey.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Practice Regularly
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Consistent practice is key to mastering any skill. Build projects and solve problems daily.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Join Communities
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Connect with fellow learners, share knowledge, and get support from the community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-700 dark:to-purple-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 text-indigo-100">
            Choose a roadmap and begin your path to becoming a tech expert
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-indigo-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-indigo-600 transition-all duration-300 transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
