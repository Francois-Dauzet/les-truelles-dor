import React from 'react';
import './header.scss';
import imageTrophy from '../../assets/images/trophy.png';

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <h1>Journée Associative</h1>
        <img src={imageTrophy} alt="" />
        <h2>Concours Pétanque</h2>
        <h3>« Les truelles d’or »</h3>
        <p>Prochaine date le 25 Mai 2024</p>
      </div>
    </header>
  );
};

export default Header;
