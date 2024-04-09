import React from 'react';
import './Resume.css'; // Import CSS file for styling

function Resume() {
  return (
    <section>
      <h2>Resume</h2>
      <div className="resume-container">
        <div className="resume-download">
          <a href="/path/to/resume.pdf" download>Download Resume</a>
        </div>
        <div className="proficiencies">
          <h3>Proficiencies:</h3>
          <ul>
            <li>Front-end Development</li>
            <li>Back-end Development</li>
            <li>Database Management</li>
            <li>Agile Methodologies</li>
            <li>Version Control (Git)</li>
            <li>Software Architecture</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Resume;
