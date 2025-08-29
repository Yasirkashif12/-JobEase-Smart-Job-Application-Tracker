// src/components/Footer.jsx
import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        <div>
          <h3 className="text-lg font-semibold mb-4">Top Categories</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>IT & Development</li>
            <li>Design & Creative</li>
            <li>Marketing & Sales</li>
            <li>Finance & Accounting</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Career Tools</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Resume Builder</li>
            <li>Interview Prep</li>
            <li>Portfolio Tips</li>
            <li>Cover Letter Guide</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>About Us</li>
            <li>Contact Support</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Join Our Newsletter</h3>
          <p className="text-sm text-gray-400 mb-3">Get job tips & latest openings weekly.</p>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-3 py-2 text-sm rounded bg-gray-800 border border-gray-700 text-white placeholder-gray-400"
          />
          <button className="mt-3 w-full py-2 bg-blue-600 hover:bg-blue-700 rounded text-sm font-medium">
            Subscribe
          </button>
          <div className="flex space-x-4 mt-5">
            <FaLinkedin className="text-xl hover:text-blue-500" />
            <FaGithub className="text-xl hover:text-gray-300" />
            <FaTwitter className="text-xl hover:text-blue-400" />
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        <p>“Opportunities don't happen. You create them.”</p>
        <p className="mt-2">&copy; {new Date().getFullYear()} JobHunt. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
