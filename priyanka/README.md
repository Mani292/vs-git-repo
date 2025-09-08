# Tech Hub Learning Platform

A comprehensive learning platform for computer science and engineering students, featuring curated video resources, academic year-wise content, and interactive learning tools.

## 🚀 Features

- **Video Resources**: Curated YouTube videos organized by technology categories
- **Academic Year Pages**: Year-wise content for engineering students (Year 1-4)
- **Responsive Design**: Modern UI with dark/light theme support
- **Interactive Components**: Chatbot, progress tracking, and notifications
- **Error Handling**: Robust error boundaries and loading states
- **Search & Filter**: Advanced search and categorization system

## 🛠️ Recent Fixes & Improvements

### ✅ Fixed Issues
- **Video Categorization**: Videos now appear in correct categories
- **Duplicate Content**: Removed duplicate video displays
- **Missing Imports**: Fixed React import issues
- **Error Handling**: Added ErrorBoundary component
- **Loading States**: Improved user experience with loading spinners
- **Responsive Design**: Better mobile and tablet support

### 🔧 Technical Improvements
- Enhanced video data structure
- Improved filtering logic for academic subjects
- Better error handling for YouTube video embeds
- Consistent UI patterns across all pages
- Optimized component rendering

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone <your-repo-url>
cd priyanka

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production
```bash
# Build the application
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
├── pages/              # Page components
├── contexts/           # React contexts (theme, etc.)
├── data/               # Video data and configurations
├── assets/             # Static assets
└── App.tsx            # Main application component
```

## 🌐 Deployment

### Option 1: Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on push

### Option 2: Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure build settings

### Option 3: GitHub Pages
1. Build the project: `npm run build`
2. Push the `dist` folder to `gh-pages` branch
3. Enable GitHub Pages in repository settings

### Option 4: Traditional Hosting
1. Build the project: `npm run build`
2. Upload the `dist` folder contents to your web server
3. Configure your web server for SPA routing

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:
```env
VITE_APP_TITLE=Tech Hub Learning
VITE_APP_DESCRIPTION=Learning platform for CS students
```

### Customization
- **Video Data**: Edit `src/data/videoData.js` to add/modify videos
- **Themes**: Modify `src/contexts/ThemeContext.jsx` for custom themes
- **Styling**: Update `tailwind.config.js` for custom design system

## 📱 Supported Browsers

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

If you encounter any issues:
1. Check the browser console for errors
2. Verify all dependencies are installed
3. Ensure Node.js version is compatible
4. Check the deployment platform requirements

## 🎯 Roadmap

- [ ] User authentication system
- [ ] Progress tracking
- [ ] Offline support
- [ ] Mobile app
- [ ] Multi-language support
- [ ] Advanced analytics

---

**Ready for deployment!** 🚀

The application has been thoroughly tested and all major issues have been resolved. You can now deploy it to your preferred hosting platform.
