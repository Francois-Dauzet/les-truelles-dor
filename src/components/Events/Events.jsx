import React, { useState } from 'react';
import './events.scss';
import { format, parse } from 'date-fns';
import { eventsData } from '../../data/eventsData';
import fr from 'date-fns/locale/fr';

const Events = () => {
  const sortedEvents = eventsData
    .map((event) => ({
      ...event,
      dateObject: parse(event.date, 'd/M/yy', new Date()),
    }))
    .sort((a, b) => b.dateObject - a.dateObject);

  return (
    <section>
      <div className="container-events">
        <div className="header">
          <h3>Évènements Archivés</h3>
          <p>Retracer l'histoire et l'évolution à travers chaque édition.</p>
        </div>

        <div className="container-cards">
          {sortedEvents.map((event, index) => (
            <div key={index} className="item-card">
              <div className="container-date">
                <h5 translate="no">
                  {format(event.dateObject, 'd MMMM yyyy', { locale: fr })}
                </h5>
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
