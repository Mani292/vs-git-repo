import { useState } from "react";
import { Link } from "react-router-dom";
import ProgressTracker from "../components/ProgressTracker";
import InteractiveQuiz from "../components/InteractiveQuiz";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  const recentActivities = [
    { id: 1, type: 'resource', title: 'Completed C Programming Notes', time: '2 hours ago', icon: '📚' },
    { id: 2, type: 'quiz', title: 'Scored 85% in DSA Quiz', time: '1 day ago', icon: '🎯' },
    { id: 3, type: 'progress', title: 'Updated Web Development Progress', time: '2 days ago', icon: '📈' },
    { id: 4, type: 'placement', title: 'Completed Google Interview Prep', time: '3 days ago', icon: '💼' }
  ];

  const quickActions: Array<{
    title: string;
    icon: string;
    link: string;
    color: 'indigo' | 'purple' | 'pink' | 'green' | 'blue' | 'yellow';
  }> = [
    { title: 'Study Resources', icon: '📚', link: '/resources', color: 'indigo' },
    { title: 'Take Quiz', icon: '🎯', link: '#quiz', color: 'purple' },
    { title: 'Track Progress', icon: '📈', link: '#progress', color: 'pink' },
    { title: 'Placement Prep', icon: '💼', link: '/placement', color: 'green' },
    { title: 'Learning Roadmaps', icon: '🗺️', link: '/roadmaps', color: 'blue' },
    { title: 'Contact Support', icon: '💬', link: '/contact', color: 'yellow' }
  ];

  const getColorClasses = (color: 'indigo' | 'purple' | 'pink' | 'green' | 'blue' | 'yellow') => {
    const colors = {
      indigo: 'bg-indigo-100 text-indigo-600 hover:bg-indigo-200',
      purple: 'bg-purple-100 text-purple-600 hover:bg-purple-200',
      pink: 'bg-pink-100 text-pink-600 hover:bg-pink-200',
      green: 'bg-green-100 text-green-600 hover:bg-green-200',
      blue: 'bg-blue-100 text-blue-600 hover:bg-blue-200',
      yellow: 'bg-yellow-100 text-yellow-600 hover:bg-yellow-200'
    };
    return colors[color] || 'bg-gray-100 text-gray-600 hover:bg-gray-200';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Student Dashboard</h1>
              <p className="text-gray-600 mt-2">Welcome back! Track your progress and continue learning.</p>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500">Current Semester</div>
              <div className="text-2xl font-bold text-indigo-600">Semester 4</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">📚</span>
              </div>
              <div className="ml-4">
                <div className="text-2xl font-bold text-gray-900">24</div>
                <div className="text-sm text-gray-600">Resources Completed</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🎯</span>
              </div>
              <div className="ml-4">
                <div className="text-2xl font-bold text-gray-900">85%</div>
                <div className="text-sm text-gray-600">Average Quiz Score</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">📈</span>
              </div>
              <div className="ml-4">
                <div className="text-2xl font-bold text-gray-900">67%</div>
                <div className="text-sm text-gray-600">Overall Progress</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🏆</span>
              </div>
              <div className="ml-4">
                <div className="text-2xl font-bold text-gray-900">12</div>
                <div className="text-sm text-gray-600">Achievements</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-sm mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {[
                { id: 'overview', name: 'Overview', icon: '📊' },
                { id: 'progress', name: 'Progress Tracker', icon: '📈' },
                { id: 'quiz', name: 'Interactive Quiz', icon: '🎯' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${
                    activeTab === tab.id
                      ? 'border-indigo-500 text-indigo-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <span>{tab.icon}</span>
                  <span>{tab.name}</span>
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'overview' && (
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Quick Actions */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {quickActions.map((action, index) => (
                      <Link
                        key={index}
                        to={action.link}
                        className={`p-4 rounded-lg transition-all duration-200 ${getColorClasses(action.color)}`}
                      >
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{action.icon}</span>
                          <span className="font-medium">{action.title}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Recent Activities */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activities</h3>
                  <div className="space-y-4">
                    {recentActivities.map((activity) => (
                      <div key={activity.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                        <span className="text-xl">{activity.icon}</span>
                        <div className="flex-1">
                          <div className="font-medium text-gray-900">{activity.title}</div>
                          <div className="text-sm text-gray-500">{activity.time}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'progress' && (
              <ProgressTracker />
            )}

            {activeTab === 'quiz' && (
              <InteractiveQuiz />
            )}
          </div>
        </div>

        {/* Recommended Resources */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recommended for You</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-3 mb-3">
                <span className="text-2xl">⚡</span>
                <h4 className="font-medium text-gray-900">Advanced DSA</h4>
              </div>
              <p className="text-sm text-gray-600 mb-3">Based on your quiz performance, you're ready for advanced algorithms.</p>
              <Link to="/resources" className="text-indigo-600 hover:text-indigo-700 text-sm font-medium">
                Explore Resources →
              </Link>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-3 mb-3">
                <span className="text-2xl">🌐</span>
                <h4 className="font-medium text-gray-900">Web Development</h4>
              </div>
              <p className="text-sm text-gray-600 mb-3">Continue your web development journey with React and Node.js.</p>
              <Link to="/roadmaps" className="text-indigo-600 hover:text-indigo-700 text-sm font-medium">
                View Roadmap →
              </Link>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-3 mb-3">
                <span className="text-2xl">💼</span>
                <h4 className="font-medium text-gray-900">Placement Prep</h4>
              </div>
              <p className="text-sm text-gray-600 mb-3">Start preparing for upcoming placement season with our guides.</p>
              <Link to="/placement" className="text-indigo-600 hover:text-indigo-700 text-sm font-medium">
                Start Preparing →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
