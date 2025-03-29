import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-2 md:mb-0">
          <p>&copy; {new Date().getFullYear()} My App. All rights reserved.</p>
        </div>
        <div className="flex space-x-4">
          <a href="/privacy" className="hover:text-gray-300">Privacy Policy</a>
          <a href="/terms" className="hover:text-gray-300">Terms of Service</a>
          <a href="/contact" className="hover:text-gray-300">Contact Us</a>
        </div>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <i className="fab fa-facebook-square"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <i className="fab fa-twitter-square"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <i className="fab fa-instagram-square"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;