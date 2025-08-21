// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from "./components/Navbar";
import Chatbot from "./components/Chatbot";
import AnimatedBackground from "./components/AnimatedBackground";
import Home from "./pages/Home";
import Resources from "./pages/Resources";
import Roadmaps from "./pages/Roadmaps";
import Coding from "./pages/Coding";
import Placement from "./pages/Placement";

import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Year1 from "./pages/Year1";
import Year2 from "./pages/Year2";
import Year3 from "./pages/Year3";
import Year4 from "./pages/Year4";

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <div className="min-h-screen bg-gray-50 dark:bg-gradient-dark transition-colors duration-300 relative">
            <AnimatedBackground />
            <div className="relative z-10">
              <Navbar />
              <main>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/resources" element={<Resources />} />
                  <Route path="/roadmaps" element={<Roadmaps />} />
                  <Route path="/coding" element={<Coding />} />
                  <Route path="/placement" element={<Placement />} />
                  
                  <Route path="/about" element={<About />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<SignUp />} />
                  <Route path="/year1" element={<Year1 />} />
                  <Route path="/year2" element={<Year2 />} />
                  <Route path="/year3" element={<Year3 />} />
                  <Route path="/year4" element={<Year4 />} />
                </Routes>
              </main>
              <Chatbot />
            </div>
          </div>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}
