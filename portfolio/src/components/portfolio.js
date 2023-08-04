import React from 'react';

function Portfolio() {
  const projects = [
    {
      title: 'Project 1',
      description: 'Description of project 1.',
      imageUrl: '/path-to-image1.jpg',
      liveLink: 'https://project1.com',
      githubLink: 'https://github.com/yourusername/project1',
    },
    // Add more projects
  ];

  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <img src={project.imageUrl} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                Live
              </a>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
