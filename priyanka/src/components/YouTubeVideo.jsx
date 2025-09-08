import { useState, useEffect } from 'react';
import { useUser } from '../contexts/UserContext';

export default function YouTubeVideo({ videoId, title, description, duration, difficulty, category }) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [progress, setProgress] = useState(0);
  const { addToWatchHistory, updateProgress, markVideoCompleted } = useUser();

  const handleLoad = () => {
    setIsLoading(false);
    // Add to watch history when video loads
    addToWatchHistory({
      id: videoId,
      title,
      description,
      duration,
      category
    });
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  const handleProgress = (e) => {
    if (e.target.duration) {
      const currentProgress = (e.target.currentTime / e.target.duration) * 100;
      setProgress(currentProgress);
      
      // Update progress in user context
      updateProgress(category, videoId, currentProgress);
      
      // Mark as completed if watched more than 90%
      if (currentProgress > 90) {
        markVideoCompleted(videoId);
      }
    }
  };

  if (hasError) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700">
        <div className="aspect-video bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
          <div className="text-center p-6">
            <div className="text-4xl mb-2">⚠️</div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Video could not be loaded
            </p>
            <a
              href={`https://www.youtube.com/watch?v=${videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 dark:text-indigo-400 text-sm hover:underline mt-2 inline-block"
            >
              Watch on YouTube
            </a>
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            {title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {description}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700">
      <div className="aspect-video relative">
        {isLoading && (
          <div className="absolute inset-0 bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-4 border-gray-300 border-t-indigo-600"></div>
          </div>
        )}
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          onLoad={handleLoad}
          onError={handleError}
        />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {title}
          </h3>
          <div className="flex items-center space-x-2">
            <span className="px-2 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
              {difficulty}
            </span>
            <span className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full">
              {duration}
            </span>
          </div>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
          {description}
        </p>
        
        {/* Progress Bar */}
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-2">
          <div
            className="h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Progress: {Math.round(progress)}%
        </p>
      </div>
    </div>
  );
}
