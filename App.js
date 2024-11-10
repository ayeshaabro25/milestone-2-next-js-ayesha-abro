import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Loading Page Component
function LoadingPage() {
  return (
    <div className="font-sans bg-gray-900 text-white min-h-screen flex justify-center items-center">
      <motion.div
        className="text-4xl font-bold text-yellow-400"
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Loading...
      </motion.div>
    </div>
  );
}

// Main Content (Your existing code)
function MainContent() {
  return (
    <div className="font-sans bg-gray-900 text-white min-h-screen space-y-16 p-8">

      {/* About Section */}
      <section id="about" className="bg-gray-800 p-6 rounded-lg">
        <h2 className="text-4xl font-bold text-yellow-400 mb-4 text-center">About Me</h2>
        <p className="text-center text-gray-300 max-w-2xl mx-auto">
          I’m Ayesha Abro, a dedicated Data Scientist skilled in data analysis, machine learning, and data visualization. With a Diploma in Applied Data Science and experience in multiple internships, I’m passionate about using data to drive actionable insights.
        </p>
      </section>

      {/* Experience Section */}
      <section id="experience" className="bg-gray-700 p-6 rounded-lg">
        <h2 className="text-4xl font-bold text-yellow-400 mb-6 text-center">Experience</h2>
        <div className="max-w-3xl mx-auto space-y-8 text-lg text-gray-300">
          <div>
            <p className="text-2xl font-semibold text-yellow-400">CognoRise Info Tech</p>
            <p>Data Analyst Intern (July 2024-August 2024)</p>
            <ul className="list-disc list-inside ml-4">
              <li>Assisted in organizing datasets for analysis</li>
              <li>Utilized tools (Python, SQL) to perform data analysis</li>
              <li>Contributed to a dashboard for improved reporting</li>
            </ul>
          </div>
          <div>
            <p className="text-2xl font-semibold text-yellow-400">Prodigy Info Tech</p>
            <p>Data Science Intern (July 2024-August 2024)</p>
            <ul className="list-disc list-inside ml-4">
              <li>Conducted data analysis to support business decisions</li>
              <li>Maintained databases ensuring data quality</li>
              <li>Reduced data errors by 15% through quality control</li>
            </ul>
          </div>
          <div>
            <p className="text-2xl font-semibold text-yellow-400">Applied Data Lab</p>
            <p>Data Analyst Intern (November 2023-Feburary 2024)</p>
            <ul className="list-disc list-inside ml-4">
              <li>Assisted in organizing datasets for analysis</li>
              <li>Utilized tools (Python, SQL) for data manipulation and analysis</li>
              <li>Collaborated with senior analysts and data scientists</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills Section with Progress Bars */}
      <section id="skills" className="bg-gray-800 p-6 rounded-lg">
        <h2 className="text-4xl font-bold text-yellow-400 mb-6 text-center">Skills</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          {renderSkill("Data Analysis", 90)}
          {renderSkill("Machine Learning", 70)}
          {renderSkill("Data Visualization", 85)}
          {renderSkill("Python", 95)}
          {renderSkill("SQL", 88)}
          {renderSkill("Power BI", 70)}
          {renderSkill("JavaScript", 70)}
          {renderSkill("Typescript", 60)}
          {renderSkill("HTML", 60)}
          {renderSkill("CSS", 60)}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-700 p-6 rounded-lg text-center">
        <h2 className="text-4xl font-bold text-yellow-400 mb-6">Contact Me</h2>
        <p className="text-gray-300 mb-4">Email: abroayesha45@gmail.com</p>
        <div className="space-x-8 text-xl">
          <a href="www.linkedin.com/in/ayesha-abro-246a702ba" className="text-yellow-400 hover:text-yellow-300">
            LinkedIn
          </a>
          <a href="https://github.com/ayeshaabro25" className="text-yellow-400 hover:text-yellow-300">
            GitHub
          </a>
        </div>
      </section>

    </div>
  );
}

// Profile Page Component (new)
function ProfilePage() {
  return (
    <div className="font-sans bg-gray-900 text-white min-h-screen space-y-16 p-8">
      <h2 className="text-4xl font-bold text-yellow-400 mb-4 text-center">My Profiles</h2>

      <div className="space-y-8 text-center">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-2xl font-semibold text-yellow-400 mb-2">LinkedIn</h3>
          <p className="text-gray-300 mb-4">Connect with me on LinkedIn</p>
          <a
            href="https://www.linkedin.com/in/ayesha-abro-246a702ba"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 hover:text-yellow-300 text-xl"
          >
            Visit my LinkedIn Profile
          </a>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-2xl font-semibold text-yellow-400 mb-2">GitHub</h3>
          <p className="text-gray-300 mb-4">Explore my projects on GitHub</p>
          <a
            href="https://github.com/ayeshaabro25"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 hover:text-yellow-300 text-xl"
          >
            Visit my GitHub Profile
          </a>
        </div>
      </div>
    </div>
  );
}

/* Helper function to render skill progress bars */
function renderSkill(skill, percentage) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-lg font-medium text-gray-300">{skill}</span>
        <span className="text-lg font-medium text-yellow-400">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-3">
        <motion.div
          className="bg-yellow-400 h-3 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1.5 }}
        ></motion.div>
      </div>
    </div>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading state 
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); 
  }, []);

  return (
    <Router>
      <Routes>
        
        <Route path="/" element={isLoading ? <LoadingPage /> : <MainContent />} />
        
        
        <Route path="/profiles" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;
