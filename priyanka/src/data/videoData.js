// Video data organized by technical categories
export const videoData = {
	frontend: [
    {
      id: 'html-basics',
      title: 'HTML Fundamentals',
      description: 'Learn the basics of HTML structure and elements',
      duration: '45 min',
      difficulty: 'Beginner',
      videoId: 'UB1O30fR-EE',
      category: 'frontend'
    },
    {
      id: 'css-styling',
      title: 'CSS Styling & Layout',
      description: 'Master CSS styling, flexbox, and grid layouts',
      duration: '60 min',
      difficulty: 'Beginner',
      videoId: '1PnVor36_40',
      category: 'frontend'
    },
    {
      id: 'javascript-basics',
      title: 'JavaScript Fundamentals',
      description: 'Core JavaScript concepts and ES6+ features',
      duration: '90 min',
      difficulty: 'Beginner',
      videoId: 'W6NZfCO5SIk',
      category: 'frontend'
    },
    {
      id: 'react-intro',
      title: 'React Introduction',
      description: 'Get started with React components and hooks',
      duration: '75 min',
      difficulty: 'Intermediate',
      videoId: 'bMknfKXIFA8',
      category: 'frontend'
    },
    {
      id: 'typescript-basics',
      title: 'TypeScript for React',
      description: 'Add type safety to your React applications',
      duration: '60 min',
      difficulty: 'Intermediate',
      videoId: '30LWjhZzg50',
      category: 'frontend'
    },
    {
      id: 'nextjs-intro',
      title: 'Next.js Framework',
      description: 'Build full-stack React applications with Next.js',
      duration: '80 min',
      difficulty: 'Intermediate',
      videoId: '1WmNXJiaS1Q',
      category: 'frontend'
    }
  ],

	backend: [
    {
      id: 'nodejs-basics',
      title: 'Node.js Fundamentals',
      description: 'Server-side JavaScript with Node.js',
      duration: '70 min',
      difficulty: 'Intermediate',
      videoId: 'Oe421EPjeBE',
      category: 'backend'
    },
    {
      id: 'python-basics',
      title: 'Python Programming',
      description: 'Learn Python for backend development',
      duration: '85 min',
      difficulty: 'Beginner',
      videoId: 'YYXdXT2l-Gg',
      category: 'backend'
    },
    {
      id: 'database-design',
      title: 'Database Design',
      description: 'SQL and NoSQL database fundamentals',
      duration: '65 min',
      difficulty: 'Intermediate',
      videoId: '8Kt6lZOXlxY',
      category: 'backend'
    },
    {
      id: 'api-design',
      title: 'RESTful API Design',
      description: 'Design and build RESTful APIs',
      duration: '75 min',
      difficulty: 'Intermediate',
      videoId: 'lsMQRaeKNDk',
      category: 'backend'
    },
    {
      id: 'authentication',
      title: 'User Authentication',
      description: 'Implement secure user authentication systems',
      duration: '60 min',
      difficulty: 'Advanced',
      videoId: '2PPSXwdvxWI',
      category: 'backend'
    }
  ],

	dataScience: [
    {
      id: 'python-data',
      title: 'Python for Data Science',
      description: 'Data manipulation with pandas and numpy',
      duration: '90 min',
      difficulty: 'Intermediate',
      videoId: 'daefaLgNkw0',
      category: 'dataScience'
    },
    {
      id: 'statistics-basics',
      title: 'Statistical Analysis',
      description: 'Fundamental statistics for data analysis',
      duration: '70 min',
      difficulty: 'Intermediate',
      videoId: 'oIuq2D2P6CU',
      category: 'dataScience'
    },
    {
      id: 'machine-learning',
      title: 'Machine Learning Basics',
      description: 'Introduction to ML algorithms and concepts',
      duration: '100 min',
      difficulty: 'Advanced',
      videoId: 'KNAWp2S3w94',
      category: 'dataScience'
    },
    {
      id: 'deep-learning',
      title: 'Deep Learning Fundamentals',
      description: 'Neural networks and deep learning concepts',
      duration: '120 min',
      difficulty: 'Advanced',
      videoId: 'VyWAvY2CF3c',
      category: 'dataScience'
    },
    {
      id: 'ai-applications',
      title: 'AI Applications',
      description: 'Real-world AI applications and use cases',
      duration: '80 min',
      difficulty: 'Advanced',
      videoId: '8tqVuC9Nxjo',
      category: 'dataScience'
    }
  ],

	cybersecurity: [
    {
      id: 'network-security',
      title: 'Network Security',
      description: 'Protect networks from cyber threats',
      duration: '85 min',
      difficulty: 'Advanced',
      videoId: '3bQNTwKJpWc',
      category: 'cybersecurity'
    },
    {
      id: 'ethical-hacking',
      title: 'Ethical Hacking',
      description: 'Learn penetration testing and security assessment',
      duration: '95 min',
      difficulty: 'Advanced',
      videoId: '3nGpD20GK-s',
      category: 'cybersecurity'
    },
    {
      id: 'cryptography',
      title: 'Cryptography Basics',
      description: 'Encryption and cryptographic protocols',
      duration: '70 min',
      difficulty: 'Advanced',
      videoId: 'jhXCTbFnK8o',
      category: 'cybersecurity'
    },
    {
      id: 'security-tools',
      title: 'Security Tools',
      description: 'Essential cybersecurity tools and software',
      duration: '60 min',
      difficulty: 'Advanced',
      videoId: 'L5l9lSnNMxg',
      category: 'cybersecurity'
    }
  ],

	cloud: [
    {
      id: 'aws-basics',
      title: 'AWS Fundamentals',
      description: 'Amazon Web Services cloud computing',
      duration: '90 min',
      difficulty: 'Intermediate',
      videoId: 'ulprqHHWlng',
      category: 'cloud'
    },
    {
      id: 'docker-basics',
      title: 'Docker Containers',
      description: 'Containerization with Docker',
      duration: '75 min',
      difficulty: 'Intermediate',
      videoId: '3c-iBn73DTI',
      category: 'cloud'
    },
    {
      id: 'kubernetes-intro',
      title: 'Kubernetes Orchestration',
      description: 'Container orchestration with Kubernetes',
      duration: '85 min',
      difficulty: 'Advanced',
      videoId: 'PH-2FfFD9PU',
      category: 'cloud'
    },
    {
      id: 'ci-cd-pipelines',
      title: 'CI/CD Pipelines',
      description: 'Continuous Integration and Deployment',
      duration: '70 min',
      difficulty: 'Intermediate',
      videoId: '1er2cjUq1UI',
      category: 'cloud'
    },
    {
      id: 'infrastructure-code',
      title: 'Infrastructure as Code',
      description: 'Managing infrastructure with code',
      duration: '80 min',
      difficulty: 'Advanced',
      videoId: 'SLB_c_ayRMo',
      category: 'cloud'
    }
  ],

	mobile: [
    {
      id: 'react-native-basics',
      title: 'React Native Fundamentals',
      description: 'Cross-platform mobile development',
      duration: '90 min',
      difficulty: 'Intermediate',
      videoId: 'VozPNrt-LfE',
      category: 'mobile'
    },
    {
      id: 'flutter-intro',
      title: 'Flutter Development',
      description: 'Build apps with Google Flutter',
      duration: '85 min',
      difficulty: 'Intermediate',
      videoId: '1ukSR1GRtMU',
      category: 'mobile'
    },
    {
      id: 'ios-development',
      title: 'iOS App Development',
      description: 'Native iOS development with Swift',
      duration: '100 min',
      difficulty: 'Advanced',
      videoId: 'comqZrXO3Wk',
      category: 'mobile'
    },
    {
      id: 'android-development',
      title: 'Android Development',
      description: 'Native Android development with Kotlin',
      duration: '95 min',
      difficulty: 'Advanced',
      videoId: 'fis26H0D2sY',
      category: 'mobile'
    }
  ],

	systemDesign: [
    {
      id: 'architecture-basics',
      title: 'System Architecture',
      description: 'Design scalable system architectures',
      duration: '80 min',
      difficulty: 'Advanced',
      videoId: 'ZgdS0qmnKkM',
      category: 'systemDesign'
    },
    {
      id: 'scalability-patterns',
      title: 'Scalability Patterns',
      description: 'Design patterns for scalable systems',
      duration: '90 min',
      difficulty: 'Advanced',
      videoId: 'xHh0DJeZ9qY',
      category: 'systemDesign'
    },
    {
      id: 'performance-optimization',
      title: 'Performance Optimization',
      description: 'Optimize system performance and efficiency',
      duration: '75 min',
      difficulty: 'Advanced',
      videoId: 'YJRRZXY4gI8',
      category: 'systemDesign'
    },
    {
      id: 'design-patterns',
      title: 'Design Patterns',
      description: 'Common software design patterns',
      duration: '70 min',
      difficulty: 'Advanced',
      videoId: 'v9ejT8FO-7I',
      category: 'systemDesign'
    }
  ]
};

// Helper functions
export const getVideosByCategory = (category) => {
	return videoData[category] || [];
};

export const getAllVideos = () => {
  return Object.values(videoData).flat();
};

export const getVideosByDifficulty = (difficulty) => {
  return getAllVideos().filter(video => video.difficulty === difficulty);
};

export const searchVideos = (query) => {
  const lowercaseQuery = query.toLowerCase();
  return getAllVideos().filter(video => 
    video.title.toLowerCase().includes(lowercaseQuery) ||
    video.description.toLowerCase().includes(lowercaseQuery) ||
    video.category.toLowerCase().includes(lowercaseQuery)
  );
};

export const getCategoryStats = () => {
  const stats = {};
  Object.keys(videoData).forEach(category => {
    const videos = videoData[category];
    stats[category] = {
      totalVideos: videos.length,
      totalDuration: videos.reduce((acc, video) => {
        const minutes = parseInt(video.duration);
        return acc + (isNaN(minutes) ? 0 : minutes);
      }, 0),
      difficultyBreakdown: videos.reduce((acc, video) => {
        acc[video.difficulty] = (acc[video.difficulty] || 0) + 1;
        return acc;
      }, {})
    };
  });
  return stats;
};
