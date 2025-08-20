import { useState } from "react";
import { Link } from "react-router-dom";

export default function Resources() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Resources", icon: "📚" },
    { id: "notes", name: "Study Notes", icon: "📝" },
    { id: "books", name: "Books", icon: "📖" },
    { id: "videos", name: "Video Lectures", icon: "🎥" },
    { id: "papers", name: "Previous Papers", icon: "📄" },
    { id: "tools", name: "Tools & Software", icon: "🛠️" }
  ];

  const resources = [
    {
      id: 1,
      title: "Complete C Programming Notes",
      category: "notes",
      description: "Comprehensive notes covering all C programming concepts with examples and practice problems.",
      link: "#",
      tags: ["C Programming", "Semester 1", "Computer Science"],
      rating: 4.8,
      downloads: 1250
    },
    {
      id: 2,
      title: "Data Structures & Algorithms",
      category: "notes",
      description: "Complete DSA notes with implementation examples in C++ and Java.",
      link: "#",
      tags: ["DSA", "Semester 3", "Algorithms"],
      rating: 4.9,
      downloads: 2100
    },
    {
      id: 3,
      title: "Object-Oriented Programming",
      category: "notes",
      description: "OOP concepts with Java examples and design patterns.",
      link: "#",
      tags: ["OOP", "Java", "Semester 2"],
      rating: 4.7,
      downloads: 980
    },
    {
      id: 4,
      title: "Database Management Systems",
      category: "books",
      description: "Complete DBMS textbook with SQL queries and normalization examples.",
      link: "#",
      tags: ["DBMS", "SQL", "Semester 4"],
      rating: 4.6,
      downloads: 750
    },
    {
      id: 5,
      title: "NPTEL Video Lectures",
      category: "videos",
      description: "Curated collection of NPTEL lectures for Computer Science subjects.",
      link: "https://nptel.ac.in",
      tags: ["NPTEL", "Video Lectures", "IIT"],
      rating: 4.9,
      downloads: 3200
    },
    {
      id: 6,
      title: "Previous Year Question Papers",
      category: "papers",
      description: "Last 5 years question papers with solutions for all semesters.",
      link: "#",
      tags: ["Question Papers", "Solutions", "Exam Prep"],
      rating: 4.8,
      downloads: 1800
    },
    {
      id: 7,
      title: "GeeksforGeeks Articles",
      category: "notes",
      description: "Handpicked GeeksforGeeks articles for interview preparation.",
      link: "https://www.geeksforgeeks.org",
      tags: ["Interview Prep", "Coding", "GeeksforGeeks"],
      rating: 4.9,
      downloads: 4500
    },
    {
      id: 8,
      title: "Development Tools Collection",
      category: "tools",
      description: "Essential software and tools for development and coding.",
      link: "#",
      tags: ["Tools", "Software", "Development"],
      rating: 4.5,
      downloads: 650
    }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "all" || resource.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              📚 Study Resources & Materials
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Access comprehensive study materials, notes, books, and resources to excel in your B.Tech journey
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filter Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search resources, topics, or subjects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Category Filter */}
            <div className="md:w-64">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.icon} {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`p-4 rounded-lg text-center transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-indigo-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-sm'
              }`}
            >
              <div className="text-2xl mb-2">{category.icon}</div>
              <div className="text-sm font-medium">{category.name}</div>
            </button>
          ))}
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map(resource => (
            <div key={resource.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
                    {resource.title}
                  </h3>
                  <div className="flex items-center text-sm text-gray-500 ml-2">
                    <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    {resource.rating}
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {resource.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {resource.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    📥 {resource.downloads} downloads
                  </div>
                  <a
                    href={resource.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition-colors"
                  >
                    Access Resource
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredResources.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No resources found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your search terms or category filter</p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
              }}
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Year-wise Navigation */}
        <div className="mt-12 bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Browse by Year</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link
              to="/year1"
              className="p-4 border border-gray-200 rounded-lg hover:border-indigo-300 hover:bg-indigo-50 transition-colors text-center"
            >
              <div className="text-2xl mb-2">🎓</div>
              <div className="font-medium text-gray-900">Year 1</div>
              <div className="text-sm text-gray-600">Semester 1 & 2</div>
            </Link>
            <Link
              to="/year2"
              className="p-4 border border-gray-200 rounded-lg hover:border-indigo-300 hover:bg-indigo-50 transition-colors text-center"
            >
              <div className="text-2xl mb-2">🎓</div>
              <div className="font-medium text-gray-900">Year 2</div>
              <div className="text-sm text-gray-600">Semester 3 & 4</div>
            </Link>
            <Link
              to="/year3"
              className="p-4 border border-gray-200 rounded-lg hover:border-indigo-300 hover:bg-indigo-50 transition-colors text-center"
            >
              <div className="text-2xl mb-2">🎓</div>
              <div className="font-medium text-gray-900">Year 3</div>
              <div className="text-sm text-gray-600">Semester 5 & 6</div>
            </Link>
            <Link
              to="/year4"
              className="p-4 border border-gray-200 rounded-lg hover:border-indigo-300 hover:bg-indigo-50 transition-colors text-center"
            >
              <div className="text-2xl mb-2">🎓</div>
              <div className="font-medium text-gray-900">Year 4</div>
              <div className="text-sm text-gray-600">Semester 7 & 8</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
