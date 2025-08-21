import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import YouTubeVideo from '../components/YouTubeVideo';
import { getVideosByCategory } from '../data/videoData';

export default function Year1() {
  const [selectedSubject, setSelectedSubject] = useState('all');
  const { isDark } = useTheme();
  const { language } = useLanguage();

  const subjects = [
    { id: 'all', name: language === 'hindi' ? 'सभी विषय' : language === 'telugu' ? 'అన్ని విషయాలు' : 'All Subjects', icon: '📚' },
    { id: 'programming', name: language === 'hindi' ? 'प्रोग्रामिंग' : language === 'telugu' ? 'ప్రోగ్రామింగ్' : 'Programming', icon: '💻' },
    { id: 'mathematics', name: language === 'hindi' ? 'गणित' : language === 'telugu' ? 'గణితం' : 'Mathematics', icon: '🔢' },
    { id: 'physics', name: language === 'hindi' ? 'भौतिकी' : language === 'telugu' ? 'భౌతిక శాస్త్రం' : 'Physics', icon: '⚛️' },
    { id: 'chemistry', name: language === 'hindi' ? 'रसायन विज्ञान' : language === 'telugu' ? 'రసాయన శాస్త్రం' : 'Chemistry', icon: '🧪' },
    { id: 'english', name: language === 'hindi' ? 'अंग्रेजी' : language === 'telugu' ? 'ఆంగ్లం' : 'English', icon: '📖' }
  ];

  const videos = getVideosByCategory('year1', language);

  const filteredVideos = selectedSubject === 'all' 
    ? videos 
    : videos.filter(video => video.title.toLowerCase().includes(selectedSubject));

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-800 dark:via-purple-800 dark:to-pink-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {language === 'hindi' ? 'पहला वर्ष' : language === 'telugu' ? 'మొదటి సంవత్సరం' : 'First Year'}
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              {language === 'hindi' ? 'इंजीनियरिंग की मूल बातें और प्रोग्रामिंग की शुरुआत' : language === 'telugu' ? 'ఇంజినీరింగ్ యొక్క ప్రాథమిక అంశాలు మరియు ప్రోగ్రామింగ్ ప్రారంభం' : 'Engineering fundamentals and programming basics'}
            </p>
          </div>
        </div>
      </section>

      {/* Subject Filter */}
      <section className="py-8 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {subjects.map((subject) => (
              <button
                key={subject.id}
                onClick={() => setSelectedSubject(subject.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                  selectedSubject === subject.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 border border-gray-200 dark:border-gray-600'
                }`}
              >
                <span>{subject.icon}</span>
                <span>{subject.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Videos Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredVideos.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📚</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {language === 'hindi' ? 'कोई वीडियो नहीं मिला' : language === 'telugu' ? 'వీడియోలు కనుగొనబడలేదు' : 'No videos found'}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {language === 'hindi' ? 'अपने फ़िल्टर को बदलने का प्रयास करें' : language === 'telugu' ? 'మీ ఫిల్టర్‌ని మార్చడానికి ప్రయత్నించండి' : 'Try changing your filter'}
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredVideos.map((video, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <YouTubeVideo
                    videoId={video.id}
                    title={video.title}
                    description={video.description}
                    language={language}
                  />
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        video.difficulty === 'Beginner' ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200' :
                        video.difficulty === 'Intermediate' ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200' :
                        'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200'
                      }`}>
                        {video.difficulty}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {video.duration}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {video.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {video.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {language === 'hindi' ? 'अतिरिक्त संसाधन' : language === 'telugu' ? 'అదనపు వనరులు' : 'Additional Resources'}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              {language === 'hindi' ? 'अपनी पढ़ाई को बेहतर बनाने के लिए अतिरिक्त सामग्री' : language === 'telugu' ? 'మీ అధ్యయనాన్ని మెరుగుపరచడానికి అదనపు పదార్థాలు' : 'Additional materials to enhance your studies'}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
              <div className="text-3xl mb-4">📖</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {language === 'hindi' ? 'पाठ्यपुस्तकें' : language === 'telugu' ? 'పాఠ్యపుస్తకాలు' : 'Textbooks'}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {language === 'hindi' ? 'आधिकारिक पाठ्यपुस्तकें और संदर्भ सामग्री' : language === 'telugu' ? 'అధికారిక పాఠ్యపుస్తకాలు మరియు సూచన పదార్థాలు' : 'Official textbooks and reference materials'}
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
              <div className="text-3xl mb-4">📝</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {language === 'hindi' ? 'अभ्यास प्रश्न' : language === 'telugu' ? 'అభ్యాస ప్రశ్నలు' : 'Practice Questions'}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {language === 'hindi' ? 'अवधारणाओं को मजबूत करने के लिए अभ्यास प्रश्न' : language === 'telugu' ? 'భావనలను బలపరచడానికి అభ్యాస ప్రశ్నలు' : 'Practice questions to strengthen concepts'}
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {language === 'hindi' ? 'पिछले प्रश्न पत्र' : language === 'telugu' ? 'గత ప్రశ్న పత్రాలు' : 'Previous Papers'}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {language === 'hindi' ? 'पिछले वर्षों के प्रश्न पत्र और समाधान' : language === 'telugu' ? 'గత సంవత్సరాల ప్రశ్న పత్రాలు మరియు పరిష్కారాలు' : 'Previous years question papers and solutions'}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
