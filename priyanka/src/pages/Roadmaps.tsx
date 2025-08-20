export default function Roadmaps() {
  return (
    <div className="min-h-screen bg-white text-gray-900 p-10">
      <h1 className="text-4xl font-bold mb-8">🛣️ Technology Roadmaps</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-6 border rounded-lg shadow hover:shadow-xl">
          <h2 className="text-2xl font-bold mb-3">Web Development 🌐</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>HTML, CSS, JS → <a href="https://developer.mozilla.org" className="text-blue-600">MDN Docs</a></li>
            <li>React, Tailwind, Next.js</li>
            <li>Backend: Node.js, Express</li>
            <li>Database: MongoDB, MySQL</li>
          </ul>
        </div>

        <div className="p-6 border rounded-lg shadow hover:shadow-xl">
          <h2 className="text-2xl font-bold mb-3">Data Structures & Algorithms ⚡</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Arrays, LinkedList, Stack, Queue</li>
            <li>Trees, Graphs, DP</li>
            <li>Practice: <a href="https://leetcode.com" className="text-blue-600">LeetCode</a>, <a href="https://codeforces.com" className="text-blue-600">Codeforces</a></li>
          </ul>
        </div>

        <div className="p-6 border rounded-lg shadow hover:shadow-xl">
          <h2 className="text-2xl font-bold mb-3">AI / Machine Learning 🤖</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Python, Numpy, Pandas</li>
            <li>ML Models: Regression, Classification</li>
            <li>DL Frameworks: TensorFlow, PyTorch</li>
          </ul>
        </div>

        <div className="p-6 border rounded-lg shadow hover:shadow-xl">
          <h2 className="text-2xl font-bold mb-3">Cloud & DevOps ☁️</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>AWS, Azure, GCP</li>
            <li>Docker, Kubernetes</li>
            <li>CI/CD with GitHub Actions</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
