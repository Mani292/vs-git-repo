import { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

export default function NotificationSystem() {
  const [notifications, setNotifications] = useState([]);
  const [showNotifications, setShowNotifications] = useState(false);
  const { isDark } = useTheme();

  useEffect(() => {
    const url = import.meta.env.VITE_NOTIFICATIONS_API_URL;
    if (!url) return;
    let aborted = false;

    const load = async () => {
      try {
        const headers = {};
        const key = import.meta.env.VITE_NOTIFICATIONS_API_KEY;
        if (key) headers['Authorization'] = `Bearer ${key}`;
        const res = await fetch(url, { headers });
        if (!res.ok) return;
        const data = await res.json();
        if (aborted) return;
        const mapped = Array.isArray(data) ? data.map((n) => ({
          id: n.id ?? Date.now(),
          type: n.type ?? 'update',
          title: n.title ?? 'Notification',
          message: n.message ?? '',
          timestamp: n.timestamp ? new Date(n.timestamp) : new Date(),
          read: Boolean(n.read) === true ? true : false
        })) : [];
        setNotifications(mapped);
      } catch (e) {
        // fail silent: no fake notifications
      }
    };

    load();
    const interval = setInterval(load, 60000);
    return () => { aborted = true; clearInterval(interval); };
  }, []);

  const markAsRead = (id) => {
    setNotifications(prev => 
      prev.map(notif => 
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  const clearAll = () => {
    setNotifications([]);
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <>
      {/* Notification Bell */}
      <button
        onClick={() => setShowNotifications(!showNotifications)}
        className="fixed top-20 right-6 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40 flex items-center justify-center border border-gray-200 dark:border-gray-700 hover:scale-110 transform"
      >
        <div className="relative">
          <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM10.5 3.75a6 6 0 0 1 6 6v3.75l1.5 1.5H3l1.5-1.5V9.75a6 6 0 0 1 6-6z" />
          </svg>
          {unreadCount > 0 && (
            <div className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center animate-pulse">
              {unreadCount > 9 ? '9+' : unreadCount}
            </div>
          )}
        </div>
      </button>

      {/* Notification Panel */}
      {showNotifications && (
        <div className="fixed top-32 right-6 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 z-50 max-h-96 overflow-hidden transition-all duration-300">
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-gray-900 dark:text-white">Notifications</h3>
              {notifications.length > 0 && (
                <button
                  onClick={clearAll}
                  className="text-sm text-gray-500 dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-100"
                >
                  Clear all
                </button>
              )}
            </div>
          </div>

          <div className="max-h-64 overflow-y-auto bg-gray-50 dark:bg-gray-900">
            {notifications.length === 0 ? (
              <div className="p-4 text-center text-gray-500 dark:text-gray-400">
                <svg className="w-12 h-12 mx-auto mb-2 text-gray-300 dark:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM10.5 3.75a6 6 0 0 1 6 6v3.75l1.5 1.5H3l1.5-1.5V9.75a6 6 0 0 1 6-6z" />
                </svg>
                <p>No notifications yet</p>
              </div>
            ) : (
              notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-4 border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer ${
                    !notification.read ? 'bg-blue-50 dark:bg-blue-900/20' : ''
                  }`}
                  onClick={() => markAsRead(notification.id)}
                >
                  <div className="flex items-start space-x-3">
                    <div className={`w-2 h-2 rounded-full mt-2 ${
                      notification.type === 'achievement' ? 'bg-yellow-400' : 'bg-blue-400'
                    }`}></div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium text-gray-900 dark:text-white text-sm">
                          {notification.title}
                        </h4>
                        {!notification.read && (
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-200 mt-1">
                        {notification.message}
                      </p>
                      <p className="text-xs text-gray-400 dark:text-gray-300 mt-2">
                        {notification.timestamp.toLocaleTimeString([], { 
                          hour: '2-digit', 
                          minute: '2-digit' 
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {notifications.length > 0 && (
            <div className="p-3 border-t border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800">
              <div className="text-xs text-gray-500 dark:text-gray-300 text-center">
                {unreadCount} unread notification{unreadCount !== 1 ? 's' : ''}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Toast Notifications */}
      {notifications.slice(0, 3).map((notification) => (
        <div
          key={`toast-${notification.id}`}
          className={`fixed top-4 right-4 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg border-l-4 border-blue-500 p-4 transform transition-all duration-500 z-50 ${
            !notification.read ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="flex-1">
              <h4 className="font-medium text-gray-900 dark:text-white text-sm">
                {notification.title}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-200 mt-1">
                {notification.message}
              </p>
            </div>
            <button
              onClick={() => markAsRead(notification.id)}
              className="flex-shrink-0 text-gray-400 dark:text-gray-300 hover:text-gray-600 dark:hover:text-gray-100"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      ))}
    </>
  );
}
