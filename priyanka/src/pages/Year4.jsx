import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import YouTubeVideo from '../components/YouTubeVideo';
import { getVideosByCategory } from '../data/videoData';

export default function Year4() {
  const [selectedSubject, setSelectedSubject] = useState('all');
  const { isDark } = useTheme();
  const { language } = useLanguage();

  const subjects = [
    { id: 'all', name: language === 'hindi' ? 'सभी विषय' : language === 'telugu' ? 'అన్ని విషయాలు' : 'All Subjects', icon: '📚' },
    { id: 'deep learning', name: language === 'hindi' ? 'डीप लर्निंग' : language === 'telugu' ? 'డీప్ లెర్నింగ్' : 'Deep Learning', icon: '🧠' },
    { id: 'cloud computing', name: language === 'hindi' ? 'क्लाउड कंप्यूटिंग' : language === 'telugu' ? 'క్లౌడ్ కంప్యూటింగ్' : 'Cloud Computing', icon: '☁️' },
    { id: 'cybersecurity', name: language === 'hindi' ? 'साइबर सुरक्षा' : language === 'telugu' ? 'సైబర్ సెక్యూరిటీ' : 'Cybersecurity', icon: '🔒' },
    { id: 'devops', name: language === 'hindi' ? 'DevOps' : language === 'telugu' ? 'DevOps' : 'DevOps', icon: '⚙️' },
    { id: 'final year project', name: language === 'hindi' ? 'फाइनल ईयर प्रोजेक्ट' : language === 'telugu' ? 'ఫైనల్ ఇయర్ ప్రాజెక్ట్' : 'Final Year Project', icon: '🎓' }
  ];

  const videos = getVideosByCategory('year4', language);

  const filteredVideos = selectedSubject === 'all' 
    ? videos 
    : videos.filter(video => video.title.toLowerCase().includes(selectedSubject));

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 dark:from-purple-800 dark:via-indigo-800 dark:to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {language === 'hindi' ? 'चौथा वर्ष' : language === 'telugu' ? 'నాలుగవ సంవత్సరం' : 'Fourth Year'}
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              {language === 'hindi' ? 'विशेषज्ञता और उद्योग तैयारी' : language === 'telugu' ? 'ప్రత్యేకత మరియు పరిశ్రమ సిద్ధత' : 'Specialization and industry readiness'}
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
                    ? 'bg-indigo-600 text-white shadow-lg'
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

      {/* Academic Videos Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {language === 'hindi' ? 'शैक्षणिक वीडियो' : language === 'telugu' ? 'విద్యా వీడియోలు' : 'Academic Videos'}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-200">
              {language === 'hindi' ? 'चौथे वर्ष के लिए विशेष शैक्षणिक वीडियो' : language === 'telugu' ? 'నాలుగవ సంవత్సరానికి ప్రత్యేక విద్యా వీడియోలు' : 'Specialized academic videos for fourth year'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVideos.slice(0, 6).map((video, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-700 rounded-xl shadow-lg border border-gray-200 dark:border-gray-600 overflow-hidden hover:shadow-xl transition-all duration-300"
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
                    <span className="text-sm text-gray-500 dark:text-gray-300">
                      {video.duration}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {video.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-200 text-sm">
                    {video.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {language === 'hindi' ? 'अतिरिक्त संसाधन' : language === 'telugu' ? 'అదనపు వనరులు' : 'Additional Resources'}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-200">
              {language === 'hindi' ? 'अपनी पढ़ाई को बेहतर बनाने के लिए अतिरिक्त सामग्री' : language === 'telugu' ? 'మీ అధ్యయనాన్ని మెరుగుపరచడానికి అదనపు పదార్థాలు' : 'Additional materials to enhance your studies'}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700">
              <div className="text-3xl mb-4">🎓</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {language === 'hindi' ? 'फाइनल प्रोजेक्ट' : language === 'telugu' ? 'ఫైనల్ ప్రాజెక్ట్' : 'Final Project'}
              </h3>
              <p className="text-gray-600 dark:text-gray-200">
                {language === 'hindi' ? 'फाइनल ईयर प्रोजेक्ट गाइड और टेम्पलेट्स' : language === 'telugu' ? 'ఫైనల్ ఇయర్ ప్రాజెక్ట్ గైడ్ మరియు టెంప్లేట్లు' : 'Final year project guides and templates'}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700">
              <div className="text-3xl mb-4">💼</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {language === 'hindi' ? 'प्लेसमेंट तैयारी' : language === 'telugu' ? 'ప్లేస్మెంట్ సిద్ధత' : 'Placement Preparation'}
              </h3>
              <p className="text-gray-600 dark:text-gray-200">
                {language === 'hindi' ? 'इंटरव्यू प्रैक्टिस और रिज्यूमे बिल्डिंग' : language === 'telugu' ? 'ఇంటర్వ్యూ ప్రాక్టీస్ మరియు రెజ్యూమే బిల్డింగ్' : 'Interview practice and resume building'}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700">
              <div className="text-3xl mb-4">🌐</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {language === 'hindi' ? 'उद्योग प्रोजेक्ट्स' : language === 'telugu' ? 'పరిశ్రమ ప్రాజెక్టులు' : 'Industry Projects'}
              </h3>
              <p className="text-gray-600 dark:text-gray-200">
                {language === 'hindi' ? 'वास्तविक दुनिया के प्रोजेक्ट्स और इंटर्नशिप' : language === 'telugu' ? 'వాస్తవ ప్రపంచ ప్రాజెక్టులు మరియు ఇంటర్న్‌షిప్' : 'Real-world projects and internships'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Focus Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {language === 'hindi' ? 'शैक्षणिक फोकस' : language === 'telugu' ? 'విద్యా దృష్టి' : 'Academic Focus'}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-200">
              {language === 'hindi' ? 'चौथे वर्ष के मुख्य विषय और विशेषज्ञता क्षेत्र' : language === 'telugu' ? 'నాలుగవ సంవత్సరం యొక్క ప్రధాన విషయాలు మరియు నిపుణత ప్రాంతాలు' : 'Key subjects and specialization areas for fourth year'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {language === 'hindi' ? 'डीप लर्निंग' : language === 'telugu' ? 'డీప్ లెర్నింగ్' : 'Deep Learning'}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-200">
                {language === 'hindi' ? 'न्यूरल नेटवर्क और AI मॉडल्स' : language === 'telugu' ? 'న్యూరల్ నెట్‌వర్క్స్ మరియు AI మోడల్స్' : 'Neural networks and AI models'}
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">☁️</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {language === 'hindi' ? 'क्लाउड आर्किटेक्चर' : language === 'telugu' ? 'క్లౌడ్ ఆర్కిటెక్చర్' : 'Cloud Architecture'}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-200">
                {language === 'hindi' ? 'AWS, Azure और डिस्ट्रिब्यूटेड सिस्टम्स' : language === 'telugu' ? 'AWS, Azure మరియు డిస్ట్రిబ్యూటెడ్ సిస్టమ్స్' : 'AWS, Azure and distributed systems'}
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {language === 'hindi' ? 'साइबर सुरक्षा' : language === 'telugu' ? 'సైబర్ సెక్యూరిటీ' : 'Cybersecurity'}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-200">
                {language === 'hindi' ? 'एथिकल हैकिंग और सुरक्षा प्रोटोकॉल' : language === 'telugu' ? 'ఎథికల్ హ్యాకింగ్ మరియు సెక్యూరిటీ ప్రోటోకాల్స్' : 'Ethical hacking and security protocols'}
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {language === 'hindi' ? 'DevOps' : language === 'telugu' ? 'DevOps' : 'DevOps'}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-200">
                {language === 'hindi' ? 'CI/CD और कंटेनराइजेशन' : language === 'telugu' ? 'CI/CD మరియు కంటైనరైజేషన్' : 'CI/CD and containerization'}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
