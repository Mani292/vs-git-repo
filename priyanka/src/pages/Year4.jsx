import React from "react";

function Year4() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">4th Year – Placements & Final Projects</h2>
      <p className="mb-4 text-gray-700">
        In the final year, focus on placements, projects, and interview
        preparation. Build a strong portfolio and network.
      </p>

      <h3 className="text-xl font-semibold mb-2">📚 Focus Areas</h3>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>System Design basics</li>
        <li>Competitive coding & Interview prep (DSA)</li>
        <li>Resume building & LinkedIn profile</li>
        <li>Open Source contributions</li>
      </ul>

      <h3 className="text-xl font-semibold mb-2">🛠 Final Year Projects</h3>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>AI-powered Chatbot</li>
        <li>Full-stack Web Application</li>
        <li>IoT-based Smart System</li>
        <li>Blockchain project</li>
      </ul>

      <h3 className="text-xl font-semibold mb-2">🎥 Placement Resources</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <a href="https://youtu.be/8hly31xKli0" target="_blank" rel="noreferrer" className="text-blue-600">
            DSA for Interviews – FreeCodeCamp
          </a>
        </li>
        <li>
          <a href="https://youtu.be/MRRhp09x_qo" target="_blank" rel="noreferrer" className="text-blue-600">
            System Design Basics
          </a>
        </li>
        <li>
          <a href="https://youtu.be/YJZCUhxNCv8" target="_blank" rel="noreferrer" className="text-blue-600">
            Placement Preparation Guide
          </a>
        </li>
      </ul>

      <h3 className="text-xl font-semibold mb-2">🚀 Career Tips</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>Apply for internships early</li>
        <li>Participate in hackathons & coding contests</li>
        <li>Contribute to open-source projects</li>
        <li>Network with alumni and seniors</li>
      </ul>
    </div>
  );
}

export default Year4;
