import React, { useState } from 'react';

import './events.scss';
import EmojiEventsRoundedIcon from '@mui/icons-material/EmojiEventsRounded';
import EuroRoundedIcon from '@mui/icons-material/EuroRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import MapRoundedIcon from '@mui/icons-material/MapRounded';

const events = [
  {
    date: '28 Mai 2023',
    association: 'Le petit monde de manon',
    description:
      'qui nostrum libero quia sapiente dolorem asperiores aut delectus fugit neque? Explicabo maxime possimus commodi, est labore deserunt sed non voluptatum, debitis adipisci magni. Accusamus inventore ad iure, molestias voluptas possimu',
    items: [
      {
        icon: <MapRoundedIcon className="item-icon" />,
        primary: 'Lieux',
        secondary: 'Le Petanco',
      },
      {
        icon: <EmojiEventsRoundedIcon className="item-icon" />,
        primary: 'Gagnants',
        secondary: 'Thomas & Julie',
      },
      {
        icon: <PeopleAltRoundedIcon className="item-icon" />,
        primary: 'Participants',
        secondary: 163,
      },
      {
        icon: <EuroRoundedIcon className="item-icon" />,
        primary: 'Gain Total',
        secondary: 1845,
      },
    ],
  },
  {
    date: '28 Mai 2023',
    association: 'Le petit monde de manon',
    description:
      'qui nostrum libero quia sapiente dolorem asperiores aut delectus fugit neque? Explicabo maxime possimus commodi, est labore deserunt sed non voluptatum, debitis adipisci magni. Accusamus inventore ad iure, molestias voluptas possimu',
    items: [
      {
        icon: <MapRoundedIcon className="item-icon" />,
        primary: 'Lieux',
        secondary: 'Le Petanco',
      },
      {
        icon: <EmojiEventsRoundedIcon className="item-icon" />,
        primary: 'Gagnants',
        secondary: 'Thomas & Julie',
      },
      {
        icon: <PeopleAltRoundedIcon className="item-icon" />,
        primary: 'Participants',
        secondary: 163,
      },
      {
        icon: <EuroRoundedIcon className="item-icon" />,
        primary: 'Gain Total',
        secondary: 1845,
      },
    ],
  },
];

const Events = () => {
  return (
    <section>
      <div className="container-events">
        <div className="header">
          <h3>Événements Archivés</h3>
          <p>Retracer l'histoire et l'évolution à travers chaque édition.</p>
        </div>

        <div className="container-cards">
          {events.map((event, index) => (
            <div key={index} className="item-card">
              <div className="container-date">
                <h3 translate="no">{event.date}</h3>
              </div>
              <div className="container-association">
                <h4 translate="no">{event.association}</h4>
              </div>

              <div className="container-description">
                <p translate="no">{event.description}</p>
              </div>

              <div className="item-card-content">
                <ul>
                  {event.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      {item.icon}
                      <div className="container-text">
                        <p className="primary">{item.primary}</p>
                        <p className="secondary">{item.secondary}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
