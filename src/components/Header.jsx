import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-lg font-bold">My Portfolio</div>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/" className="hover:text-gray-600">Home</Link></li>
            <li><Link to="/resume" className="hover:text-gray-600">Resume</Link></li>
            <li><Link to="/projects" className="hover:text-gray-600">Projects</Link></li>
            <li><Link to="/contact" className="hover:text-gray-600">Contact Me</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
