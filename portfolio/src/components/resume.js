// Resume.js
import React from 'react';

function Resume() {
  return (
    <section id="resume">
      <h2>Resume</h2>
      <p>
        Download my resume:
        <a href="/path-to-your-resume.pdf" download>
          Resume.pdf
        </a>
      </p>
      <h3>Skills</h3>
      <ul>
        <li>React.js</li>
        <li>JavaScript</li>
        <li>HTML5</li>
        <li>CSS3</li>
        {/* Add more skills */}
      </ul>
    </section>
  );
}

export default Resume;
