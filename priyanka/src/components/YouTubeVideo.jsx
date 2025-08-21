import { useLanguage } from '../contexts/LanguageContext';

export default function YouTubeVideo({ videoId, title, description, language = 'english' }) {
  const { language: currentLanguage } = useLanguage();
  
  // Only show video if it matches the current language or is universal
  if (language !== 'universal' && language !== currentLanguage) {
    return null;
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700">
      <div className="aspect-video">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          {description}
        </p>
        <div className="mt-2">
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
            {language === 'english' ? '🇺🇸 English' : language === 'hindi' ? '🇮🇳 Hindi' : '🇮🇳 Telugu'}
          </span>
        </div>
      </div>
    </div>
  );
}
