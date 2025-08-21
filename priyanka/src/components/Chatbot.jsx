import React, { useState, useRef, useEffect } from 'react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const bytezApiKey = import.meta.env.VITE_BYTEZ_API_KEY;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = { id: Date.now(), text: inputMessage, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');

    if (!bytezApiKey) {
      const err = { id: Date.now() + 1, text: 'Bytez API key not configured. Please check your environment variables.', sender: 'bot' };
      setMessages(prev => [...prev, err]);
      return;
    }

    setIsLoading(true);
    try {
      // Use Bytez API with phi-2 model
      const response = await fetch('https://api.bytez.ai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${bytezApiKey}`
        },
        body: JSON.stringify({
          model: 'microsoft/phi-2',
          messages: [
            {
              role: 'system',
              content: 'You are a helpful AI learning assistant for a tech education platform. Help users with programming, web development, and learning resources. Keep responses concise, helpful, and focused on technology education.'
            },
            {
              role: 'user',
              content: inputMessage
            }
          ],
          max_tokens: 300,
          temperature: 0.7
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const reply = data.choices?.[0]?.message?.content || 'No response from AI';
      setMessages(prev => [...prev, { id: Date.now() + 2, text: reply, sender: 'bot' }]);
    } catch (e) {
      console.error('API Error:', e);
      // Fallback to local responses if API fails
      const localResponse = getLocalResponse(inputMessage);
      setMessages(prev => [...prev, { id: Date.now() + 3, text: localResponse, sender: 'bot' }]);
    } finally {
      setIsLoading(false);
    }
  };

  // Fallback local responses for common questions
  const getLocalResponse = (message) => {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
      return 'Hello! I\'m your AI learning assistant. How can I help you today?';
    }
    
    if (lowerMessage.includes('programming') || lowerMessage.includes('code')) {
      return 'I can help you with programming! We have tutorials for HTML, JavaScript, Python, and more. Check out our Resources page for video tutorials.';
    }
    
    if (lowerMessage.includes('web development') || lowerMessage.includes('website')) {
      return 'For web development, I recommend starting with HTML, CSS, and JavaScript. We have comprehensive tutorials for all three languages.';
    }
    
    if (lowerMessage.includes('python') || lowerMessage.includes('python')) {
      return 'Python is a great programming language for beginners! We have a complete Python tutorial that covers fundamentals to advanced concepts.';
    }
    
    if (lowerMessage.includes('help') || lowerMessage.includes('support')) {
      return 'I\'m here to help! You can ask me about programming, web development, or any learning topics. I can also guide you to our video resources.';
    }
    
    if (lowerMessage.includes('video') || lowerMessage.includes('tutorial')) {
      return 'We have many video tutorials available! Check out our Resources page or the Year pages for academic videos. You can filter by language (English, Hindi, Telugu) and difficulty level.';
    }
    
    if (lowerMessage.includes('language') || lowerMessage.includes('hindi') || lowerMessage.includes('telugu')) {
      return 'Our platform currently supports English content. All our videos and tutorials are available in English with comprehensive coverage of programming, web development, and academic subjects.';
    }
    
    // Default response
    return 'Thank you for your message! I\'m here to help you with your learning journey. You can ask me about programming, web development, or browse our video resources.';
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-12 h-12 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition-colors z-50"
        aria-label="Toggle AI Chatbot"
      >
        {isOpen ? (
          <svg className="w-6 h-6 m-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        ) : (
          <svg className="w-6 h-6 m-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
        )}
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[480px] bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 z-50 flex flex-col">
          <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white">AI Learning Assistant (Bytez)</h3>
              </div>
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-gray-50 dark:bg-gray-900">
            {messages.map(m => (
              <div key={m.id} className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`${m.sender === 'user' ? 'bg-indigo-600 text-white' : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100'} px-3 py-2 rounded-lg max-w-[75%] border ${m.sender === 'user' ? 'border-indigo-600' : 'border-gray-200 dark:border-gray-700'}`}>
                  <p className="text-sm whitespace-pre-line">{m.text}</p>
                </div>
              </div>
            ))}
            {messages.length === 0 && (
              <p className="text-xs text-gray-500 dark:text-gray-300">Ask me about programming, web development, or learning resources!</p>
            )}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700">
                  <p className="text-sm">Thinking...</p>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <div className="p-3 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter') sendMessage(); }}
                placeholder="Ask about programming, web development..."
                className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                disabled={isLoading}
              />
              <button
                onClick={sendMessage}
                disabled={isLoading || !inputMessage.trim()}
                className="px-4 py-2 bg-indigo-600 text-white text-sm rounded-md hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Chatbot;
