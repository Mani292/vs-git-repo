import { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [progress, setProgress] = useState({});
  const [completedVideos, setCompletedVideos] = useState([]);
  const [watchHistory, setWatchHistory] = useState([]);
  const [learningGoals, setLearningGoals] = useState([]);

  // Load user data from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    const savedProgress = localStorage.getItem('progress');
    const savedCompleted = localStorage.getItem('completedVideos');
    const savedHistory = localStorage.getItem('watchHistory');
    const savedGoals = localStorage.getItem('learningGoals');

    if (savedUser) setUser(JSON.parse(savedUser));
    if (savedProgress) setProgress(JSON.parse(savedProgress));
    if (savedCompleted) setCompletedVideos(JSON.parse(savedCompleted));
    if (savedHistory) setWatchHistory(JSON.parse(savedHistory));
    if (savedGoals) setLearningGoals(JSON.parse(savedGoals));
  }, []);

  // Save data to localStorage whenever it changes
  useEffect(() => {
    if (user) localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('progress', JSON.stringify(progress));
    localStorage.setItem('completedVideos', JSON.stringify(completedVideos));
    localStorage.setItem('watchHistory', JSON.stringify(watchHistory));
    localStorage.setItem('learningGoals', JSON.stringify(learningGoals));
  }, [user, progress, completedVideos, watchHistory, learningGoals]);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
    setProgress({});
    setCompletedVideos([]);
    setWatchHistory([]);
    setLearningGoals([]);
    localStorage.clear();
  };

  const updateProgress = (category, videoId, percentage) => {
    setProgress(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [videoId]: percentage
      }
    }));
  };

  const markVideoCompleted = (videoId) => {
    if (!completedVideos.includes(videoId)) {
      setCompletedVideos(prev => [...prev, videoId]);
    }
  };

  const addToWatchHistory = (video) => {
    setWatchHistory(prev => {
      const filtered = prev.filter(v => v.id !== video.id);
      return [video, ...filtered].slice(0, 50); // Keep last 50 videos
    });
  };

  const addLearningGoal = (goal) => {
    setLearningGoals(prev => [...prev, { ...goal, id: Date.now(), completed: false }]);
  };

  const completeLearningGoal = (goalId) => {
    setLearningGoals(prev => 
      prev.map(goal => 
        goal.id === goalId ? { ...goal, completed: true } : goal
      )
    );
  };

  const getOverallProgress = () => {
    const totalVideos = Object.values(progress).reduce((acc, category) => 
      acc + Object.keys(category || {}).length, 0
    );
    const completedCount = completedVideos.length;
    return totalVideos > 0 ? Math.round((completedCount / totalVideos) * 100) : 0;
  };

  const getCategoryProgress = (category) => {
    const categoryVideos = progress[category] || {};
    const totalVideos = Object.keys(categoryVideos).length;
    if (totalVideos === 0) return 0;
    
    const totalPercentage = Object.values(categoryVideos).reduce((sum, p) => sum + p, 0);
    return Math.round(totalPercentage / totalVideos);
  };

  const value = {
    user,
    progress,
    completedVideos,
    watchHistory,
    learningGoals,
    login,
    logout,
    updateProgress,
    markVideoCompleted,
    addToWatchHistory,
    addLearningGoal,
    completeLearningGoal,
    getOverallProgress,
    getCategoryProgress
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};
