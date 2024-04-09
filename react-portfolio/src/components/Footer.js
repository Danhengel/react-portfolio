import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Import icons from Font Awesome

function Footer() {
  return (
    <footer>
      <p>
        {/* Link to GitHub */}
        <a href="https://github.com/Danhengel" target="_blank" rel="noopener noreferrer">
          <FaGithub /> GitHub
        </a>
        {' | '}
        {/* Link to LinkedIn */}
        <a href="https://www.linkedin.com/in/DanHengel" target="_blank" rel="noopener noreferrer">
          <FaLinkedin /> LinkedIn
        </a>
      </p>
    </footer>
  );
}

export default Footer;
