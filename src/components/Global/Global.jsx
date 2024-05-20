import React from 'react';
import './global.scss';
import {
  EmojiEventsRounded,
  EuroRounded,
  PeopleAltRounded,
  DateRangeRounded,
} from '@mui/icons-material';

const stats = [
  {
    icon: <EmojiEventsRounded className="item-icon" />,
    primary: 'Gagnants Actuels',
    secondary: 'Thomas & Julie',
  },
  {
    icon: <EuroRounded className="item-icon" />,
    primary: 'Gain Cumulés',
    secondary: '1532',
  },
  {
    icon: <PeopleAltRounded className="item-icon" />,
    primary: 'Participants',
    secondary: '138',
  },
  {
    icon: <DateRangeRounded className="item-icon" />,
    primary: 'Événements',
    secondary: '2',
  },
];

const StatItem = ({ icon, primary, secondary }) => (
  <div className="item">
    {icon}
    <p className="primary">{primary}</p>
    <p className="secondary">{secondary}</p>
  </div>
);

const Global = () => {
  return (
    <section>
      <div className="container-global">
        <div className="header">
          <h3>Statistiques Générales</h3>
          <p>Compilation exhaustive de tous les événement.</p>
        </div>
        <div className="container-items">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Global;
