import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import YouTubeVideo from '../components/YouTubeVideo';
import { getVideosByCategory } from '../data/videoData';

export default function Year2() {
  const [selectedSubject, setSelectedSubject] = useState('all');
  const { isDark } = useTheme();
  const { language } = useLanguage();

  const subjects = [
    { id: 'all', name: language === 'hindi' ? 'सभी विषय' : language === 'telugu' ? 'అన్ని విషయాలు' : 'All Subjects', icon: '📚' },
    { id: 'oop', name: language === 'hindi' ? 'ऑब्जेक्ट ओरिएंटेड प्रोग्रामिंग' : language === 'telugu' ? 'ఆబ్జెక్ట్ ఓరియంటెడ్ ప్రోగ్రామింగ్' : 'OOP', icon: '💻' },
    { id: 'database', name: language === 'hindi' ? 'डेटाबेस' : language === 'telugu' ? 'డేటాబేస్' : 'Database', icon: '🗄️' },
    { id: 'networks', name: language === 'hindi' ? 'कंप्यूटर नेटवर्क' : language === 'telugu' ? 'కంప్యూటర్ నెట్‌వర్క్' : 'Networks', icon: '🌐' },
    { id: 'data structures', name: language === 'hindi' ? 'डेटा स्ट्रक्चर' : language === 'telugu' ? 'డేటా స్ట్రక్చర్' : 'Data Structures', icon: '📊' },
    { id: 'algorithms', name: language === 'hindi' ? 'एल्गोरिथम' : language === 'telugu' ? 'అల్గోరిథమ్' : 'Algorithms', icon: '⚡' }
  ];

  const videos = getVideosByCategory('year2', language);

  const filteredVideos = selectedSubject === 'all' 
    ? videos 
    : videos.filter(video => video.title.toLowerCase().includes(selectedSubject));

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 dark:from-green-800 dark:via-blue-800 dark:to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {language === 'hindi' ? 'दूसरा वर्ष' : language === 'telugu' ? 'రెండవ సంవత్సరం' : 'Second Year'}
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              {language === 'hindi' ? 'उन्नत प्रोग्रामिंग और सॉफ्टवेयर इंजीनियरिंग अवधारणाएं' : language === 'telugu' ? 'అధునాతన ప్రోగ్రామింగ్ మరియు సాఫ్ట్‌వేర్ ఇంజినీరింగ్ భావనలు' : 'Advanced programming and software engineering concepts'}
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
                    ? 'bg-green-600 text-white shadow-lg'
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
              <div className="text-3xl mb-4">💻</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {language === 'hindi' ? 'प्रोग्रामिंग प्रोजेक्ट्स' : language === 'telugu' ? 'ప్రోగ్రామింగ్ ప్రాజెక్టులు' : 'Programming Projects'}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {language === 'hindi' ? 'व्यावहारिक प्रोग्रामिंग प्रोजेक्ट्स और कोडिंग चुनौतियां' : language === 'telugu' ? 'వ్యవహారిక ప్రోగ్రామింగ్ ప్రాజెక్టులు మరియు కోడింగ్ సవాళ్లు' : 'Practical programming projects and coding challenges'}
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {language === 'hindi' ? 'डेटाबेस प्रोजेक्ट्स' : language === 'telugu' ? 'డేటాబేస్ ప్రాజెక్టులు' : 'Database Projects'}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {language === 'hindi' ? 'डेटाबेस डिजाइन और SQL प्रोजेक्ट्स' : language === 'telugu' ? 'డేటాబేస్ డిజైన్ మరియు SQL ప్రాజెక్టులు' : 'Database design and SQL projects'}
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
              <div className="text-3xl mb-4">🌐</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {language === 'hindi' ? 'नेटवर्किंग लैब्स' : language === 'telugu' ? 'నెట్‌వర్కింగ్ ల్యాబ్స్' : 'Networking Labs'}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {language === 'hindi' ? 'कंप्यूटर नेटवर्किंग प्रयोगशाला अभ्यास' : language === 'telugu' ? 'కంప్యూటర్ నెట్‌వర్కింగ్ ప్రయోగశాల అభ్యాసాలు' : 'Computer networking laboratory exercises'}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
