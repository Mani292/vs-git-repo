import React from "react";

const Year1: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">
        First Year Roadmap
      </h2>

      <p className="text-gray-700 mb-6 text-center">
        In the first year of B.Tech, focus on building your **fundamentals** in
        programming, mathematics, and problem-solving.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Programming Basics</h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>C / Python fundamentals</li>
            <li>Loops, Functions, Arrays</li>
            <li>Debugging & Problem Solving</li>
          </ul>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Mathematics</h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>Discrete Mathematics</li>
            <li>Linear Algebra</li>
            <li>Probability Basics</li>
          </ul>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Core Subjects</h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>Basic Electronics</li>
            <li>Engineering Physics</li>
            <li>Engineering Mechanics</li>
          </ul>
        </div>

        {/* Card 4 */}
        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Soft Skills</h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>Communication Skills</li>
            <li>Presentation Skills</li>
            <li>Teamwork</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Year1;
