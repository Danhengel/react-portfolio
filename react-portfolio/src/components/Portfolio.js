import React from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css'; // Import CSS file for styling

function Portfolio() {
  // Sample data of portfolio items
  const portfolioItems = [
    { id: 1, title: 'Project 1', image: 'project1.jpg', link: '/portfolio/project1' },
    { id: 2, title: 'Project 2', image: 'project2.jpg', link: '/portfolio/project2' },
    { id: 3, title: 'Project 3', image: 'project3.jpg', link: '/portfolio/project3' },
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      <div className="portfolio-container">
        {portfolioItems.map(item => (
          <div key={item.id} className="portfolio-item">
            <Link to={item.link}>
              <img src={require(`./images/${item.image}`).default} alt={item.title} />
              <h3>{item.title}</h3>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
