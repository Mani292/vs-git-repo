import React from "react";

const Year3: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-purple-600 mb-6 text-center">
        Third Year Roadmap
      </h2>

      <p className="text-gray-700 mb-6 text-center">
        In the third year, choose a **specialization** and work on **real projects**.  
        This is the time to explore **Web, Mobile, Cloud, AI/ML, or Cybersecurity**.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Web Development</h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>HTML, CSS, JavaScript</li>
            <li>React.js / Angular</li>
            <li>Backend (Node.js / Django)</li>
          </ul>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Cloud & DevOps</h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>AWS / Azure Basics</li>
            <li>Docker, Kubernetes</li>
            <li>CI/CD Pipelines</li>
          </ul>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">AI / Machine Learning</h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>Python (NumPy, Pandas, Matplotlib)</li>
            <li>ML Algorithms</li>
            <li>Deep Learning Basics</li>
          </ul>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Projects</h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>Mini Projects (Web/App)</li>
            <li>Hackathons</li>
            <li>Open Source Contributions</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Year3;
