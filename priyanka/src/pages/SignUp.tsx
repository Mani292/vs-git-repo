import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';

export default function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    year: '',
    semester: '',
    branch: '',
    rollNumber: '',
    phoneNumber: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { isDark } = useTheme();
  const { language } = useLanguage();

  const years = [
    { value: '1', label: language === 'hindi' ? 'पहला वर्ष' : language === 'telugu' ? 'మొదటి సంవత్సరం' : '1st Year' },
    { value: '2', label: language === 'hindi' ? 'दूसरा वर्ष' : language === 'telugu' ? 'రెండవ సంవత్సరం' : '2nd Year' },
    { value: '3', label: language === 'hindi' ? 'तीसरा वर्ष' : language === 'telugu' ? 'మూడవ సంవత్సరం' : '3rd Year' },
    { value: '4', label: language === 'hindi' ? 'चौथा वर्ष' : language === 'telugu' ? 'నాలుగవ సంవత్సరం' : '4th Year' }
  ];

  const semesters = [
    { value: '1', label: language === 'hindi' ? 'पहला सेमेस्टर' : language === 'telugu' ? 'మొదటి సెమిస్టర్' : '1st Semester' },
    { value: '2', label: language === 'hindi' ? 'दूसरा सेमेस्टर' : language === 'telugu' ? 'రెండవ సెమిస్టర్' : '2nd Semester' },
    { value: '3', label: language === 'hindi' ? 'तीसरा सेमेस्टर' : language === 'telugu' ? 'మూడవ సెమిస్టర్' : '3rd Semester' },
    { value: '4', label: language === 'hindi' ? 'चौथा सेमेस्टर' : language === 'telugu' ? 'నాలుగవ సెమిస్టర్' : '4th Semester' },
    { value: '5', label: language === 'hindi' ? 'पांचवां सेमेस्टर' : language === 'telugu' ? 'ఐదవ సెమిస్టర్' : '5th Semester' },
    { value: '6', label: language === 'hindi' ? 'छठा सेमेस्टर' : language === 'telugu' ? 'ఆరవ సెమిస్టర్' : '6th Semester' },
    { value: '7', label: language === 'hindi' ? 'सातवां सेमेस्टर' : language === 'telugu' ? 'ఏడవ సెమిస్టర్' : '7th Semester' },
    { value: '8', label: language === 'hindi' ? 'आठवां सेमेस्टर' : language === 'telugu' ? 'ఎనిమిదవ సెమిస్టర్' : '8th Semester' }
  ];

  const branches = [
    { value: 'cse', label: language === 'hindi' ? 'कंप्यूटर साइंस इंजीनियरिंग' : language === 'telugu' ? 'కంప్యూటర్ సైన్స్ ఇంజినీరింగ్' : 'Computer Science Engineering' },
    { value: 'ece', label: language === 'hindi' ? 'इलेक्ट्रॉनिक्स इंजीनियरिंग' : language === 'telugu' ? 'ఎలక్ట్రానిక్స్ ఇంజినీరింగ్' : 'Electronics Engineering' },
    { value: 'me', label: language === 'hindi' ? 'मैकेनिकल इंजीनियरिंग' : language === 'telugu' ? 'మెకానికల్ ఇంజినీరింగ్' : 'Mechanical Engineering' },
    { value: 'ce', label: language === 'hindi' ? 'सिविल इंजीनियरिंग' : language === 'telugu' ? 'సివిల్ ఇంజినీరింగ్' : 'Civil Engineering' },
    { value: 'it', label: language === 'hindi' ? 'इनफॉर्मेशन टेक्नोलॉजी' : language === 'telugu' ? 'ఇన్ఫర్మేషన్ టెక్నాలజీ' : 'Information Technology' },
    { value: 'eee', label: language === 'hindi' ? 'इलेक्ट्रिकल इंजीनियरिंग' : language === 'telugu' ? 'ఎలక్ట్రికల్ ఇంజినీరింగ్' : 'Electrical Engineering' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = language === 'hindi' ? 'उपयोगकर्ता नाम आवश्यक है' : language === 'telugu' ? 'వినియోగదారు పేరు అవసరం' : 'Username is required';
    } else if (formData.username.length < 3) {
      newErrors.username = language === 'hindi' ? 'उपयोगकर्ता नाम कम से कम 3 अक्षर होना चाहिए' : language === 'telugu' ? 'వినియోగదారు పేరు కనీసం 3 అక్షరాలు ఉండాలి' : 'Username must be at least 3 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = language === 'hindi' ? 'ईमेल आवश्यक है' : language === 'telugu' ? 'ఇమెయిల్ అవసరం' : 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = language === 'hindi' ? 'वैध ईमेल दर्ज करें' : language === 'telugu' ? 'చెల్లుబాటు అయ్యే ఇమెయిల్ నమోదు చేయండి' : 'Please enter a valid email';
    }

    if (!formData.password) {
      newErrors.password = language === 'hindi' ? 'पासवर्ड आवश्यक है' : language === 'telugu' ? 'పాస్‌వర్డ్ అవసరం' : 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = language === 'hindi' ? 'पासवर्ड कम से कम 6 अक्षर होना चाहिए' : language === 'telugu' ? 'పాస్‌వర్డ్ కనీసం 6 అక్షరాలు ఉండాలి' : 'Password must be at least 6 characters';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = language === 'hindi' ? 'पासवर्ड मेल नहीं खाते' : language === 'telugu' ? 'పాస్‌వర్డ్‌లు సరిపోలడం లేదు' : 'Passwords do not match';
    }

    if (!formData.fullName.trim()) {
      newErrors.fullName = language === 'hindi' ? 'पूरा नाम आवश्यक है' : language === 'telugu' ? 'పూర్తి పేరు అవసరం' : 'Full name is required';
    }

    if (!formData.year) {
      newErrors.year = language === 'hindi' ? 'वर्ष चुनें' : language === 'telugu' ? 'సంవత్సరాన్ని ఎంచుకోండి' : 'Please select year';
    }

    if (!formData.semester) {
      newErrors.semester = language === 'hindi' ? 'सेमेस्टर चुनें' : language === 'telugu' ? 'సెమిస్టర్‌ని ఎంచుకోండి' : 'Please select semester';
    }

    if (!formData.branch) {
      newErrors.branch = language === 'hindi' ? 'शाखा चुनें' : language === 'telugu' ? 'శాఖను ఎంచుకోండి' : 'Please select branch';
    }

    if (!formData.rollNumber.trim()) {
      newErrors.rollNumber = language === 'hindi' ? 'रोल नंबर आवश्यक है' : language === 'telugu' ? 'రోల్ నంబర్ అవసరం' : 'Roll number is required';
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = language === 'hindi' ? 'फोन नंबर आवश्यक है' : language === 'telugu' ? 'ఫోన్ నంబర్ అవసరం' : 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = language === 'hindi' ? '10 अंकों का फोन नंबर दर्ज करें' : language === 'telugu' ? '10 అంకెల ఫోన్ నంబర్ నమోదు చేయండి' : 'Please enter a 10-digit phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      navigate('/dashboard');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <div className="mx-auto h-12 w-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">T</span>
          </div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
            {language === 'hindi' ? 'खाता बनाएं' : language === 'telugu' ? 'ఖాతా సృష్టించండి' : 'Create Account'}
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
            {language === 'hindi' ? 'पहले से खाता है?' : language === 'telugu' ? 'ఇప్పటికే ఖాతా ఉందా?' : 'Already have an account?'}{' '}
            <Link to="/login" className="font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500">
              {language === 'hindi' ? 'लॉगिन करें' : language === 'telugu' ? 'లాగిన్ చేయండి' : 'Sign in'}
            </Link>
          </p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="bg-white dark:bg-gray-800 shadow-md dark:shadow-xl rounded-lg border dark:border-gray-700 p-6 space-y-4">
            
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                {language === 'hindi' ? 'पूरा नाम' : language === 'telugu' ? 'పూర్తి పేరు' : 'Full Name'}
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                value={formData.fullName}
                onChange={handleChange}
                className={`mt-1 appearance-none relative block w-full px-3 py-2 border ${
                  errors.fullName ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                } placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-gray-100 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-white dark:bg-gray-700`}
                placeholder={language === 'hindi' ? 'अपना पूरा नाम दर्ज करें' : language === 'telugu' ? 'మీ పూర్తి పేరు నమోదు చేయండి' : 'Enter your full name'}
              />
              {errors.fullName && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.fullName}</p>}
            </div>

            {/* Username */}
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                {language === 'hindi' ? 'उपयोगकर्ता नाम' : language === 'telugu' ? 'వినియోగదారు పేరు' : 'Username'}
              </label>
              <input
                id="username"
                name="username"
                type="text"
                required
                value={formData.username}
                onChange={handleChange}
                className={`mt-1 appearance-none relative block w-full px-3 py-2 border ${
                  errors.username ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                } placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-gray-100 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-white dark:bg-gray-700`}
                placeholder={language === 'hindi' ? 'उपयोगकर्ता नाम दर्ज करें' : language === 'telugu' ? 'వినియోగదారు పేరు నమోదు చేయండి' : 'Enter username'}
              />
              {errors.username && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.username}</p>}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                {language === 'hindi' ? 'ईमेल पता' : language === 'telugu' ? 'ఇమెయిల్ చిరునామా' : 'Email Address'}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleChange}
                className={`mt-1 appearance-none relative block w-full px-3 py-2 border ${
                  errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                } placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-gray-100 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-white dark:bg-gray-700`}
                placeholder={language === 'hindi' ? 'ईमेल दर्ज करें' : language === 'telugu' ? 'ఇమెయిల్ నమోదు చేయండి' : 'Enter email'}
              />
              {errors.email && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email}</p>}
            </div>

            {/* Academic Information */}
            <div className="grid grid-cols-2 gap-4">
              {/* Year */}
              <div>
                <label htmlFor="year" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  {language === 'hindi' ? 'वर्ष' : language === 'telugu' ? 'సంవత్సరం' : 'Year'}
                </label>
                <select
                  id="year"
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  className={`mt-1 block w-full px-3 py-2 border ${
                    errors.year ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                  } text-gray-900 dark:text-gray-100 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white dark:bg-gray-700`}
                >
                  <option value="">{language === 'hindi' ? 'वर्ष चुनें' : language === 'telugu' ? 'సంవత్సరాన్ని ఎంచుకోండి' : 'Select Year'}</option>
                  {years.map(year => (
                    <option key={year.value} value={year.value}>{year.label}</option>
                  ))}
                </select>
                {errors.year && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.year}</p>}
              </div>

              {/* Semester */}
              <div>
                <label htmlFor="semester" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  {language === 'hindi' ? 'सेमेस्टर' : language === 'telugu' ? 'సెమిస్టర్' : 'Semester'}
                </label>
                <select
                  id="semester"
                  name="semester"
                  value={formData.semester}
                  onChange={handleChange}
                  className={`mt-1 block w-full px-3 py-2 border ${
                    errors.semester ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                  } text-gray-900 dark:text-gray-100 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white dark:bg-gray-700`}
                >
                  <option value="">{language === 'hindi' ? 'सेमेस्टर चुनें' : language === 'telugu' ? 'సెమిస్టర్‌ని ఎంచుకోండి' : 'Select Semester'}</option>
                  {semesters.map(semester => (
                    <option key={semester.value} value={semester.value}>{semester.label}</option>
                  ))}
                </select>
                {errors.semester && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.semester}</p>}
              </div>
            </div>

            {/* Branch */}
            <div>
              <label htmlFor="branch" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                {language === 'hindi' ? 'शाखा' : language === 'telugu' ? 'శాఖ' : 'Branch'}
              </label>
              <select
                id="branch"
                name="branch"
                value={formData.branch}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-2 border ${
                  errors.branch ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                } text-gray-900 dark:text-gray-100 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white dark:bg-gray-700`}
              >
                <option value="">{language === 'hindi' ? 'शाखा चुनें' : language === 'telugu' ? 'శాఖను ఎంచుకోండి' : 'Select Branch'}</option>
                {branches.map(branch => (
                  <option key={branch.value} value={branch.value}>{branch.label}</option>
                ))}
              </select>
              {errors.branch && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.branch}</p>}
            </div>

            {/* Roll Number */}
            <div>
              <label htmlFor="rollNumber" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                {language === 'hindi' ? 'रोल नंबर' : language === 'telugu' ? 'రోల్ నంబర్' : 'Roll Number'}
              </label>
              <input
                id="rollNumber"
                name="rollNumber"
                type="text"
                required
                value={formData.rollNumber}
                onChange={handleChange}
                className={`mt-1 appearance-none relative block w-full px-3 py-2 border ${
                  errors.rollNumber ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                } placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-gray-100 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-white dark:bg-gray-700`}
                placeholder={language === 'hindi' ? 'रोल नंबर दर्ज करें' : language === 'telugu' ? 'రోల్ నంబర్ నమోదు చేయండి' : 'Enter roll number'}
              />
              {errors.rollNumber && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.rollNumber}</p>}
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                {language === 'hindi' ? 'फोन नंबर' : language === 'telugu' ? 'ఫోన్ నంబర్' : 'Phone Number'}
              </label>
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="tel"
                required
                value={formData.phoneNumber}
                onChange={handleChange}
                className={`mt-1 appearance-none relative block w-full px-3 py-2 border ${
                  errors.phoneNumber ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                } placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-gray-100 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-white dark:bg-gray-700`}
                placeholder={language === 'hindi' ? 'फोन नंबर दर्ज करें' : language === 'telugu' ? 'ఫోన్ నంబర్ నమోదు చేయండి' : 'Enter phone number'}
              />
              {errors.phoneNumber && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.phoneNumber}</p>}
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                {language === 'hindi' ? 'पासवर्ड' : language === 'telugu' ? 'పాస్‌వర్డ్' : 'Password'}
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                value={formData.password}
                onChange={handleChange}
                className={`mt-1 appearance-none relative block w-full px-3 py-2 border ${
                  errors.password ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                } placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-gray-100 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-white dark:bg-gray-700`}
                placeholder={language === 'hindi' ? 'पासवर्ड दर्ज करें' : language === 'telugu' ? 'పాస్‌వర్డ్ నమోదు చేయండి' : 'Enter password'}
              />
              {errors.password && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.password}</p>}
            </div>

            {/* Confirm Password */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                {language === 'hindi' ? 'पासवर्ड की पुष्टि करें' : language === 'telugu' ? 'పాస్‌వర్డ్ నిర్ధారించండి' : 'Confirm Password'}
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                autoComplete="new-password"
                required
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`mt-1 appearance-none relative block w-full px-3 py-2 border ${
                  errors.confirmPassword ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                } placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-gray-100 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-white dark:bg-gray-700`}
                placeholder={language === 'hindi' ? 'पासवर्ड की पुष्टि करें' : language === 'telugu' ? 'పాస్‌వర్డ్ నిర్ధారించండి' : 'Confirm password'}
              />
              {errors.confirmPassword && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.confirmPassword}</p>}
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
            >
              {isLoading ? (
                <div className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  {language === 'hindi' ? 'खाता बना रहा है...' : language === 'telugu' ? 'ఖాతా సృష్టిస్తోంది...' : 'Creating account...'}
                </div>
              ) : (
                language === 'hindi' ? 'खाता बनाएं' : language === 'telugu' ? 'ఖాతా సృష్టించండి' : 'Create Account'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}


