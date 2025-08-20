import React from "react";

const Year2: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-green-600 mb-6 text-center">
        Second Year Roadmap
      </h2>

      <p className="text-gray-700 mb-6 text-center">
        In the second year, focus on **Data Structures, Algorithms, OOPs, and DBMS** to build a strong computer science foundation.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Data Structures & Algorithms</h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>Arrays, Linked Lists, Stacks, Queues</li>
            <li>Trees, Graphs</li>
            <li>Sorting & Searching</li>
          </ul>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Object-Oriented Programming</h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>Java / C++ Basics</li>
            <li>Classes, Objects, Inheritance</li>
            <li>Polymorphism, Encapsulation</li>
          </ul>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Databases</h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>SQL Basics</li>
            <li>Normalization</li>
            <li>Joins & Queries</li>
          </ul>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Competitive Programming</h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>Codeforces, LeetCode, HackerRank</li>
            <li>Problem-solving mindset</li>
            <li>Time & Space Complexity</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Year2;
