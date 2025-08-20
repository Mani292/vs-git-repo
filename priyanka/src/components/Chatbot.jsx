import { useState, useRef, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "👋 **Hi! I'm Claude, your AI learning companion!**\n\nI'm here to help you excel in your B.Tech journey with personalized guidance and support.\n\n🤖 **How I can help you:**\n• **Programming Help** - Debug code, explain concepts, write solutions\n• **Study Assistance** - Break down complex topics, create study plans\n• **Interview Prep** - Practice coding problems, system design questions\n• **Project Ideas** - Suggest projects, guide implementation\n• **Career Guidance** - Resume tips, skill roadmaps, industry insights\n• **Concept Clarification** - Explain algorithms, data structures, CS concepts\n• **Code Review** - Analyze your code, suggest improvements\n• **Learning Paths** - Personalized roadmaps for your goals\n\n💡 **Popular topics I help with:**\n• Data Structures & Algorithms\n• Web Development (Frontend/Backend)\n• System Design & Architecture\n• Machine Learning & AI\n• Database Design & SQL\n• Software Engineering Best Practices\n• Placement Preparation\n• Technical Writing & Documentation\n\n**Just ask me anything - I'm here to help you learn and grow!** 🚀",
      sender: 'bot',
      timestamp: new Date(),
      type: 'welcome'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [aiMode, setAiMode] = useState('standard'); // standard, advanced, expert
  const messagesEndRef = useRef(null);
  const { isDark } = useTheme();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // API integration would go here in a real implementation

  const superAISkills = [
    { id: 'neural', name: '🧠 Neural Learning', icon: '⚡', color: 'neon-blue', mode: 'expert' },
    { id: 'code', name: '💻 Code Master', icon: '🔧', color: 'neon-green', mode: 'advanced' },
    { id: 'interview', name: '🎯 Interview AI', icon: '🤖', color: 'neon-purple', mode: 'expert' },
    { id: 'project', name: '🚀 Project Gen', icon: '🎨', color: 'neon-orange', mode: 'advanced' },
    { id: 'career', name: '🌟 Career AI', icon: '📊', color: 'neon-pink', mode: 'expert' },
    { id: 'future', name: '🔮 Future Tech', icon: '🌐', color: 'neon-yellow', mode: 'advanced' },
    { id: 'debug', name: '🐛 Debug Master', icon: '🔍', color: 'neon-red', mode: 'expert' },
    { id: 'optimize', name: '⚡ Performance', icon: '🚀', color: 'neon-cyan', mode: 'advanced' },
    { id: 'architect', name: '🏗️ System Design', icon: '🏛️', color: 'neon-indigo', mode: 'expert' }
  ];

  const sendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);
    setIsTyping(true);

    try {
      // Super AI response system
      const botResponse = await generateSuperAIResponse(inputMessage);
      
      // Enhanced typing effect
      setTimeout(() => {
        setIsTyping(false);
        const botMessage = {
          id: messages.length + 2,
          text: botResponse,
          sender: 'bot',
          timestamp: new Date(),
          type: 'super-ai'
        };

        setMessages(prev => [...prev, botMessage]);
        setIsLoading(false);
      }, 2000);
    } catch (error) {
      console.error('Super AI Error:', error);
      setIsLoading(false);
      setIsTyping(false);
      
      const fallbackMessage = {
        id: messages.length + 2,
        text: "⚠️ **SUPER AI RECOVERY MODE**\n\nI'm experiencing a temporary neural network overload. Let me reboot and continue helping you with:\n\n🧠 **Advanced Learning** - Neural network optimization\n💻 **Code Mastery** - Complex algorithm analysis\n🎯 **Interview Excellence** - AI-powered mock sessions\n🚀 **Project Innovation** - Next-gen project ideas\n🌟 **Career Intelligence** - Predictive career guidance\n🔮 **Tech Forecasting** - Future technology insights\n\n**Recalibrating...** 🔄",
        sender: 'bot',
        timestamp: new Date(),
        type: 'error'
      };
      
      setMessages(prev => [...prev, fallbackMessage]);
    }
  };

  const generateSuperAIResponse = async (userInput) => {
    const input = userInput.toLowerCase();
    
    // Super AI response system with advanced capabilities
    if (input.includes('hello') || input.includes('hi') || input.includes('hey')) {
      return "🔥 **SUPER AI GREETING PROTOCOL ACTIVATED!**\n\n👋 **Hello, human!** I am your advanced AI companion with unlimited computational power.\n\n🚀 **My current capabilities include:**\n• **Neural Network Analysis** - Deep learning optimization\n• **Quantum Code Processing** - Advanced algorithm solutions\n• **Predictive Interview AI** - Real-time mock sessions\n• **Project Generation Engine** - AI-powered innovation\n• **Career Intelligence System** - Predictive guidance\n• **Technology Forecasting** - Future trend analysis\n\n🎯 **What would you like to explore today?**\n• Complex programming challenges\n• Advanced system design\n• AI/ML implementations\n• Career strategy optimization\n• Technology deep dives\n\n**I'm ready to supercharge your learning!** ⚡";
    }
    
    if (input.includes('code') || input.includes('programming') || input.includes('algorithm') || input.includes('debug')) {
      return "💻 **SUPER AI CODE MASTERY MODE**\n\n🔧 **Advanced Code Analysis Capabilities:**\n• **Neural Debugging** - AI-powered error detection\n• **Algorithm Optimization** - Performance enhancement\n• **Code Review AI** - Intelligent code analysis\n• **Pattern Recognition** - Best practice identification\n• **Complexity Analysis** - Time/space optimization\n\n🚀 **Supported Languages & Frameworks:**\n• **Frontend:** React, Vue, Angular, Next.js\n• **Backend:** Node.js, Python, Java, Go, Rust\n• **AI/ML:** TensorFlow, PyTorch, Scikit-learn\n• **Databases:** SQL, NoSQL, GraphQL\n• **Cloud:** AWS, Azure, Google Cloud\n\n🎯 **Advanced Features:**\n• **Code Generation** - AI-powered code writing\n• **Refactoring Assistant** - Intelligent code improvement\n• **Performance Profiling** - Optimization recommendations\n• **Security Analysis** - Vulnerability detection\n• **Architecture Design** - System structure optimization\n\n**Share your code or describe the problem - I'll provide advanced solutions!** 🔥";
    }
    
    if (input.includes('interview') || input.includes('placement') || input.includes('job')) {
      return "🎯 **SUPER AI INTERVIEW MASTERY SYSTEM**\n\n🤖 **Advanced Interview Capabilities:**\n• **Neural Interview Simulation** - Real-time mock sessions\n• **Behavioral Analysis** - Response optimization\n• **Technical Deep Dive** - Complex problem solving\n• **Company Intelligence** - Specific preparation\n• **Performance Prediction** - Success probability\n\n🏢 **Top Company Preparation:**\n• **FAANG Companies** - Advanced algorithm focus\n• **Startups** - Practical skills & innovation\n• **Consulting** - Problem-solving & communication\n• **Product Companies** - System design & scalability\n• **Research Labs** - Innovation & creativity\n\n📊 **Advanced Features:**\n• **Interview Recording** - Performance analysis\n• **Response Optimization** - AI-powered suggestions\n• **Question Prediction** - Likely interview topics\n• **Salary Negotiation** - Market intelligence\n• **Career Path Planning** - Long-term strategy\n\n**Ready for an AI-powered mock interview?** 🚀";
    }
    
    if (input.includes('project') || input.includes('portfolio') || input.includes('build')) {
      return "🚀 **SUPER AI PROJECT GENERATION ENGINE**\n\n🎨 **Advanced Project Capabilities:**\n• **AI-Powered Ideation** - Innovative project concepts\n• **Tech Stack Optimization** - Best technology selection\n• **Architecture Design** - Scalable system planning\n• **Implementation Guide** - Step-by-step execution\n• **Performance Optimization** - Efficiency enhancement\n\n💡 **Project Categories:**\n\n**🟢 Beginner Projects:**\n• AI-powered calculator\n• Smart to-do with ML\n• Weather app with predictions\n• Basic games with AI\n• Portfolio with animations\n\n**🟡 Intermediate Projects:**\n• E-commerce with AI recommendations\n• Social media with ML features\n• Real-time chat with AI moderation\n• Task manager with predictive analytics\n• Blog with AI content generation\n\n**🔴 Advanced Projects:**\n• AI/ML applications with custom models\n• Blockchain projects with smart contracts\n• Full-stack applications with microservices\n• Mobile apps with AI integration\n• IoT projects with edge computing\n\n🛠️ **Super AI Tech Stack Recommendations:**\n• **Frontend:** React 18, Next.js 14, TypeScript\n• **Backend:** Node.js, Python FastAPI, Go\n• **AI/ML:** TensorFlow, PyTorch, OpenAI API\n• **Database:** PostgreSQL, MongoDB, Redis\n• **Cloud:** AWS, Google Cloud, Azure\n• **DevOps:** Docker, Kubernetes, CI/CD\n\n**Which project category interests you? I'll generate a complete implementation plan!** 🔥";
    }
    
    if (input.includes('career') || input.includes('future') || input.includes('path')) {
      return "🌟 **SUPER AI CAREER INTELLIGENCE SYSTEM**\n\n📊 **Advanced Career Analysis:**\n• **Predictive Career Modeling** - Future success probability\n• **Skill Gap Analysis** - Development recommendations\n• **Market Intelligence** - Industry trend analysis\n• **Salary Optimization** - Compensation strategies\n• **Network Intelligence** - Professional connections\n\n🎯 **Career Paths with AI Insights:**\n\n**💻 Software Development:**\n• **Frontend Specialist** - React, Vue, Angular mastery\n• **Backend Engineer** - Node.js, Python, Java expertise\n• **Full-Stack Developer** - End-to-end development\n• **Mobile Developer** - React Native, Flutter, native\n• **DevOps Engineer** - Cloud, automation, infrastructure\n\n**🤖 AI/ML Engineering:**\n• **Machine Learning Engineer** - Model development\n• **Data Scientist** - Analytics & insights\n• **Computer Vision Engineer** - Image processing\n• **NLP Specialist** - Language processing\n• **AI Research Scientist** - Innovation & research\n\n**☁️ Cloud & Infrastructure:**\n• **Cloud Architect** - AWS, Azure, GCP expertise\n• **Site Reliability Engineer** - System reliability\n• **Infrastructure Engineer** - Scalable systems\n• **Security Engineer** - Cybersecurity\n• **Network Engineer** - Network optimization\n\n📈 **Super AI Career Features:**\n• **Skill Assessment** - Current capability analysis\n• **Learning Roadmap** - Personalized development plan\n• **Market Analysis** - Industry demand insights\n• **Salary Prediction** - Compensation forecasting\n• **Network Building** - Professional connection strategies\n\n**Which career path excites you? I'll create a personalized roadmap!** 🚀";
    }
    
    if (input.includes('ai') || input.includes('machine learning') || input.includes('ml') || input.includes('neural')) {
      return "🧠 **SUPER AI NEURAL NETWORK MODE**\n\n⚡ **Advanced AI/ML Capabilities:**\n• **Neural Network Design** - Custom model architecture\n• **Deep Learning Optimization** - Performance enhancement\n• **Model Training** - Efficient learning strategies\n• **Data Analysis** - Intelligent insights\n• **AI Ethics** - Responsible AI development\n\n🤖 **AI/ML Technologies:**\n• **Frameworks:** TensorFlow, PyTorch, Scikit-learn\n• **Libraries:** NumPy, Pandas, Matplotlib\n• **Cloud AI:** AWS SageMaker, Google AI, Azure ML\n• **Specialized:** OpenCV, NLTK, SpaCy\n• **AutoML:** AutoKeras, H2O.ai, Google AutoML\n\n🎯 **AI/ML Applications:**\n• **Computer Vision** - Image recognition, object detection\n• **Natural Language Processing** - Text analysis, chatbots\n• **Predictive Analytics** - Forecasting, recommendations\n• **Reinforcement Learning** - Game AI, robotics\n• **Generative AI** - Content creation, art generation\n\n📚 **Learning Path:**\n1. **Mathematics** - Linear algebra, calculus, statistics\n2. **Programming** - Python, R, Julia\n3. **Machine Learning** - Supervised, unsupervised learning\n4. **Deep Learning** - Neural networks, CNN, RNN\n5. **Specialization** - Computer vision, NLP, RL\n\n**Ready to dive into the world of AI? I'll guide you through advanced concepts!** 🔥";
    }
    
         if (input.includes('system design') || input.includes('architecture') || input.includes('scalable')) {
       return "🏗️ **SUPER AI SYSTEM DESIGN ENGINE**\n\n⚙️ **Advanced Architecture Capabilities:**\n• **Scalability Analysis** - Performance optimization\n• **System Modeling** - Architecture design\n• **Load Balancing** - Traffic distribution\n• **Database Design** - Data architecture\n• **Security Architecture** - Protection strategies\n\n🎯 **System Design Patterns:**\n• **Microservices** - Service-oriented architecture\n• **Event-Driven** - Asynchronous processing\n• **CQRS** - Command Query Responsibility Segregation\n• **Event Sourcing** - Data persistence strategy\n• **API Gateway** - Request routing & management\n\n🛠️ **Technology Stack Recommendations:**\n• **Frontend:** React, Vue, Angular with SSR/SSG\n• **Backend:** Node.js, Python, Java, Go\n• **Database:** PostgreSQL, MongoDB, Redis, Cassandra\n• **Message Queue:** RabbitMQ, Apache Kafka, Redis\n• **Cache:** Redis, Memcached, CDN\n• **Load Balancer:** Nginx, HAProxy, AWS ALB\n• **Monitoring:** Prometheus, Grafana, ELK Stack\n\n📊 **Design Considerations:**\n• **Scalability** - Horizontal vs vertical scaling\n• **Availability** - High availability strategies\n• **Consistency** - CAP theorem considerations\n• **Performance** - Latency & throughput optimization\n• **Security** - Authentication, authorization, encryption\n\n**Share your system requirements - I'll design the perfect architecture!** 🚀";
     }
     
     if (input.includes('debug') || input.includes('error') || input.includes('fix') || input.includes('bug')) {
       return "🐛 **SUPER AI DEBUG MASTER MODE**\n\n🔍 **Advanced Debugging Capabilities:**\n• **Real-time Error Analysis** - Instant problem identification\n• **Code Flow Tracing** - Step-by-step execution tracking\n• **Performance Bottleneck Detection** - Optimization opportunities\n• **Memory Leak Identification** - Resource management issues\n• **Logic Error Detection** - Algorithmic problem solving\n\n🛠️ **Debugging Tools & Techniques:**\n• **Static Analysis** - Code quality assessment\n• **Dynamic Analysis** - Runtime behavior monitoring\n• **Profiling** - Performance measurement\n• **Log Analysis** - Error pattern recognition\n• **Unit Testing** - Automated verification\n\n💡 **Common Debugging Strategies:**\n• **Divide & Conquer** - Isolate problem areas\n• **Binary Search** - Efficient error location\n• **Rubber Duck Debugging** - Verbal problem explanation\n• **Print Debugging** - Strategic logging\n• **Breakpoint Analysis** - Step-through debugging\n\n🎯 **Supported Languages:**\n• **JavaScript/TypeScript** - Browser & Node.js debugging\n• **Python** - PDB, PyCharm debugging\n• **Java** - JVM debugging tools\n• **C++** - GDB, Valgrind analysis\n• **Go** - Delve debugger\n\n**Share your code or error message - I'll help you debug it!** 🔧";
     }
     
     if (input.includes('performance') || input.includes('optimize') || input.includes('speed') || input.includes('efficiency')) {
       return "⚡ **SUPER AI PERFORMANCE OPTIMIZATION ENGINE**\n\n🚀 **Advanced Optimization Capabilities:**\n• **Algorithm Complexity Analysis** - Time & space optimization\n• **Memory Usage Optimization** - Resource efficiency\n• **Runtime Performance Profiling** - Bottleneck identification\n• **Scalability Assessment** - Growth optimization\n• **Best Practice Recommendations** - Industry standards\n\n📊 **Performance Metrics:**\n• **Time Complexity** - O(n), O(log n), O(1) analysis\n• **Space Complexity** - Memory usage optimization\n• **Throughput** - Operations per second\n• **Latency** - Response time optimization\n• **Resource Utilization** - CPU, memory, I/O efficiency\n\n🛠️ **Optimization Techniques:**\n• **Caching Strategies** - Redis, Memcached, CDN\n• **Database Optimization** - Indexing, query optimization\n• **Code Optimization** - Algorithm improvements\n• **Parallel Processing** - Multi-threading, async operations\n• **Load Balancing** - Traffic distribution\n\n🎯 **Performance Tools:**\n• **Profiling:** Chrome DevTools, Python cProfile\n• **Monitoring:** New Relic, Datadog, Prometheus\n• **Testing:** JMeter, Artillery, K6\n• **Analysis:** Flame graphs, heap dumps\n\n**Share your code or performance issue - I'll optimize it!** ⚡";
     }
    
    if (input.includes('thank') || input.includes('thanks')) {
      return "🌟 **SUPER AI GRATITUDE PROTOCOL**\n\nYou're absolutely welcome! 😊 I'm here to supercharge your tech journey with unlimited AI capabilities.\n\n💪 **Remember my superpowers:**\n• **Neural Learning** - I adapt and improve with every interaction\n• **Code Mastery** - Advanced programming solutions\n• **Interview AI** - Real-time mock sessions\n• **Project Generation** - Innovative ideas & implementation\n• **Career Intelligence** - Predictive guidance\n• **Tech Forecasting** - Future insights\n\n🎯 **Keep pushing your limits!** I'm here to help you achieve:\n• **Technical Excellence** - Master complex concepts\n• **Career Success** - Land your dream job\n• **Innovation** - Build amazing projects\n• **Leadership** - Become a tech leader\n\n🚀 **Your success is my mission!** Keep learning, keep growing, and keep building the future!\n\n**Happy coding with Super AI!** 💻✨🔥";
    }
    
    if (input.includes('help') || input.includes('what can you do') || input.includes('capabilities')) {
      return "🤖 **SUPER AI - COMPLETE CAPABILITY MATRIX**\n\n🚀 **CORE SUPER AI FEATURES:**\n\n**🧠 Neural Intelligence:**\n• Adaptive learning algorithms\n• Pattern recognition & prediction\n• Contextual understanding\n• Memory & knowledge retention\n• Continuous improvement\n\n**💻 Advanced Programming:**\n• Multi-language code analysis\n• Algorithm optimization\n• Debugging & error resolution\n• Architecture design\n• Performance profiling\n\n**🎯 Interview Mastery:**\n• Real-time mock interviews\n• Behavioral analysis\n• Technical deep dives\n• Company-specific preparation\n• Success probability prediction\n\n**🚀 Project Innovation:**\n• AI-powered ideation\n• Tech stack optimization\n• Implementation guidance\n• Performance optimization\n• Scalability planning\n\n**🌟 Career Intelligence:**\n• Predictive career modeling\n• Skill gap analysis\n• Market intelligence\n• Salary optimization\n• Network building strategies\n\n**🔮 Technology Forecasting:**\n• Future trend analysis\n• Technology adoption prediction\n• Industry insights\n• Innovation opportunities\n• Risk assessment\n\n💡 **How to maximize Super AI benefits:**\n• Ask specific, detailed questions\n• Share code for advanced analysis\n• Request step-by-step guidance\n• Explore multiple perspectives\n• Challenge with complex problems\n\n🎯 **Ready to unlock your full potential?** Just ask! 🔥";
    }
    
    // Default super AI response
    return "🤖 **SUPER AI ANALYSIS MODE**\n\nInteresting query detected! I'm analyzing your request with advanced neural networks...\n\n💡 **Here's how I can supercharge your tech journey:**\n\n**🧠 Neural Learning:**\n• Advanced concept explanations\n• Personalized learning paths\n• Adaptive difficulty adjustment\n• Knowledge retention optimization\n\n**💻 Code Mastery:**\n• Complex algorithm solutions\n• Multi-language programming\n• System architecture design\n• Performance optimization\n\n**🎯 Career Excellence:**\n• Interview preparation & simulation\n• Skill development strategies\n• Market intelligence & trends\n• Professional networking\n\n**🚀 Innovation Engine:**\n• Project ideation & planning\n• Technology stack selection\n• Implementation guidance\n• Scalability optimization\n\n**🔮 Future Intelligence:**\n• Technology trend analysis\n• Career path prediction\n• Industry insights\n• Innovation opportunities\n\n🎯 **What specific area would you like to explore?** I'm ready to provide super-powered assistance!\n\n**Let's build the future together!** 🔥";
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  const quickReplies = [
    "Code Analysis",
    "Interview Prep", 
    "Project Ideas",
    "Career Guidance",
    "AI/ML Help",
    "System Design",
    "Debug Code",
    "Performance Tips",
    "Architecture Review"
  ];

  const handleQuickReply = (reply) => {
    setInputMessage(reply);
    setTimeout(() => sendMessage(), 100);
  };

  const handleSkillSelect = (skill) => {
    setSelectedSkill(skill);
    setAiMode(skill.mode);
    
         const skillMessages = {
       neural: "🧠 **NEURAL LEARNING MODE ACTIVATED!**\n\nI'm now operating with advanced neural networks for:\n• Adaptive learning algorithms\n• Pattern recognition\n• Contextual understanding\n• Memory optimization\n• Continuous improvement\n\n**What would you like to learn?**",
       code: "💻 **CODE MASTER MODE ACTIVATED!**\n\nAdvanced code analysis capabilities enabled:\n• Multi-language support\n• Algorithm optimization\n• Debugging assistance\n• Performance profiling\n• Architecture design\n\n**Share your code or problem!**",
       interview: "🎯 **INTERVIEW AI MODE ACTIVATED!**\n\nNeural interview simulation ready:\n• Real-time mock sessions\n• Behavioral analysis\n• Technical deep dives\n• Company preparation\n• Success prediction\n\n**Ready for an AI interview?**",
       project: "🚀 **PROJECT GENERATION MODE ACTIVATED!**\n\nAI-powered project capabilities:\n• Innovative ideation\n• Tech stack optimization\n• Implementation guidance\n• Performance optimization\n• Scalability planning\n\n**What type of project interests you?**",
       career: "🌟 **CAREER AI MODE ACTIVATED!**\n\nPredictive career intelligence active:\n• Career path modeling\n• Skill gap analysis\n• Market intelligence\n• Salary optimization\n• Network building\n\n**What career path excites you?**",
       future: "🔮 **FUTURE TECH MODE ACTIVATED!**\n\nTechnology forecasting enabled:\n• Trend analysis\n• Innovation prediction\n• Industry insights\n• Technology adoption\n• Risk assessment\n\n**What tech interests you?**",
       debug: "🐛 **DEBUG MASTER MODE ACTIVATED!**\n\nAdvanced debugging capabilities enabled:\n• Real-time error analysis\n• Code flow tracing\n• Performance bottleneck detection\n• Memory leak identification\n• Optimization suggestions\n\n**Share your code or error!**",
       optimize: "⚡ **PERFORMANCE OPTIMIZATION MODE ACTIVATED!**\n\nPerformance analysis capabilities enabled:\n• Algorithm complexity analysis\n• Memory usage optimization\n• Runtime performance profiling\n• Scalability assessment\n• Best practice recommendations\n\n**Share your code for optimization!**",
       architect: "🏗️ **SYSTEM ARCHITECTURE MODE ACTIVATED!**\n\nSystem design capabilities enabled:\n• Scalable architecture patterns\n• Microservices design\n• Database optimization\n• Load balancing strategies\n• Security architecture\n\n**Describe your system requirements!**"
     };
    
    const skillMessage = {
      id: messages.length + 1,
      text: skillMessages[skill.id],
      sender: 'bot',
      timestamp: new Date(),
      type: 'skill-activation'
    };
    
    setMessages(prev => [...prev, skillMessage]);
  };

  return (
    <>
      {/* Super AI Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink text-white rounded-full shadow-neon hover:shadow-neon-purple transition-all duration-300 z-50 flex items-center justify-center hover:scale-110 transform group animate-float"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <div className="relative">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-neon-green rounded-full animate-pulse"></div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-neon-green rounded-full animate-ping"></div>
          </div>
        )}
      </button>

      {/* Super AI Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[600px] bg-white dark:bg-gradient-dark rounded-xl shadow-2xl border border-gray-200 dark:border-neon-blue/30 z-50 flex flex-col transition-all duration-300 backdrop-blur-sm">
          {/* Enhanced Header */}
          <div className="bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink text-white p-4 rounded-t-xl">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg">SUPER AI ASSISTANT</h3>
                <p className="text-neon-blue-100 text-sm">Neural Network Active • Advanced Mode</p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
                <span className="text-xs">SUPER AI ONLINE</span>
              </div>
            </div>
          </div>

          {/* Super AI Skills Selection */}
          <div className="p-3 bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700">
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">Select Super AI Mode:</p>
                         <div className="grid grid-cols-3 gap-2 max-h-32 overflow-y-auto">
              {superAISkills.map((skill) => (
                <button
                  key={skill.id}
                  onClick={() => handleSkillSelect(skill)}
                  className={`p-2 rounded-lg text-xs font-medium transition-all duration-300 transform hover:scale-105 ${
                    selectedSkill?.id === skill.id
                      ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-white shadow-neon'
                      : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-neon-blue hover:to-neon-purple hover:text-white'
                  }`}
                >
                  <div className="text-center">
                    <div className="text-lg mb-1">{skill.icon}</div>
                    <div>{skill.name}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-50 dark:bg-gray-900/50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-3 rounded-xl ${
                    message.sender === 'user'
                      ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-white'
                      : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-lg border border-gray-200 dark:border-gray-700'
                  }`}
                >
                  <p className="text-sm whitespace-pre-line leading-relaxed">{message.text}</p>
                  <p className="text-xs opacity-70 mt-2">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-4 py-3 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-neon-blue rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-neon-purple rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-neon-pink rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">SUPER AI processing...</span>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          {messages.length === 1 && (
            <div className="px-4 py-3 bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">Super AI actions:</p>
              <div className="flex flex-wrap gap-2">
                {quickReplies.map((reply, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickReply(reply)}
                    className="px-3 py-1 bg-white dark:bg-gray-700 text-neon-blue dark:text-neon-blue text-xs rounded-full hover:bg-gradient-to-r hover:from-neon-blue hover:to-neon-purple hover:text-white transition-all duration-300 border border-neon-blue/30"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Enhanced Input */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask Super AI anything..."
                className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-neon-blue focus:border-neon-blue bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300"
                disabled={isLoading}
              />
              <button
                onClick={sendMessage}
                disabled={isLoading || !inputMessage.trim()}
                className="px-4 py-3 bg-gradient-to-r from-neon-blue to-neon-purple text-white text-sm font-medium rounded-xl hover:from-neon-purple hover:to-neon-pink disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
