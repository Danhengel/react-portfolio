import React from 'react';
import Navigation from './Navigation';
import './Header.css'; // Import CSS file for styling

function Header({ developerName }) {
  return (
    <header>
      <div className="header-container">
        <h1 className="header-title">{developerName}'s Portfolio</h1>
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
