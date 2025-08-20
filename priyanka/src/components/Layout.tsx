import React from "react";
import { Link } from "react-router-dom";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <header className="bg-blue-600 text-white shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <Link to="/dashboard" className="text-2xl font-bold">
            🎓 B.Tech Career Path
          </Link>
          <nav className="space-x-4">
            <Link to="/dashboard" className="hover:underline">
              Dashboard
            </Link>
            <Link to="/year1" className="hover:underline">
              Year 1
            </Link>
            <Link to="/year2" className="hover:underline">
              Year 2
            </Link>
            <Link to="/year3" className="hover:underline">
              Year 3
            </Link>
            <Link to="/year4" className="hover:underline">
              Year 4
            </Link>
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 max-w-6xl mx-auto w-full px-6 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 text-center py-4 mt-6">
        © {new Date().getFullYear()} B.Tech Career Path – All Rights Reserved
      </footer>
    </div>
  );
}

export default Layout;
