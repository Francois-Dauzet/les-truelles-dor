import React from 'react';
import './global.scss';
import {
  EmojiEventsRounded,
  EuroRounded,
  PeopleAltRounded,
  DateRangeRounded,
} from '@mui/icons-material';
import { eventsData } from '../../data/eventsData';

// Function to parse the date string into a Date object
const parseDate = (dateStr) => {
  const [day, month, year] = dateStr.split('/').map(Number);
  return new Date(year, month - 1, day);
};

// Function to sort events by date
const sortEventsByDate = (events) => {
  return events.slice().sort((a, b) => parseDate(a.date) - parseDate(b.date));
};

const calculateTotals = (data) => {
  return data.reduce(
    (totals, event) => {
      const gain = event.items.find(
        (item) => item.primary === 'Collecté'
      ).secondary;
      const participants = event.items.find(
        (item) => item.primary === 'Participants'
      ).secondary;

      totals.totalGain += gain;
      totals.totalParticipants += participants;

      if (totals.associationGains[event.association]) {
        totals.associationGains[event.association] += gain;
      } else {
        totals.associationGains[event.association] = gain;
      }

      return totals;
    },
    { totalGain: 0, totalParticipants: 0, associationGains: {} }
  );
};

// Sort the events by date
const sortedEventsData = sortEventsByDate(eventsData);

const { totalGain, totalParticipants, associationGains } =
  calculateTotals(sortedEventsData);

const totalEvents = sortedEventsData.length;
const lastEventWinners = sortedEventsData[
  sortedEventsData.length - 1
].items.find((item) => item.primary === 'Gagnants').secondary;

const sortedAssociationGains = Object.entries(associationGains).sort(
  ([, a], [, b]) => b - a
);

const stats = [
  {
    icon: <EmojiEventsRounded className="item-icon" />,
    primary: 'Gagnants Actuels',
    secondary: lastEventWinners,
  },
  {
    icon: <EuroRounded className="item-icon" />,
    primary: 'Total Collecté',
    secondary: totalGain,
  },
  {
    icon: <PeopleAltRounded className="item-icon" />,
    primary: 'Participants',
    secondary: totalParticipants,
  },
  {
    icon: <DateRangeRounded className="item-icon" />,
    primary: 'Événements',
    secondary: totalEvents,
  },
];

const StatItem = ({ icon, primary, secondary }) => (
  <div className="item">
    {icon}
    <p className="primary">{primary}</p>
    <p className="secondary">{secondary}</p>
  </div>
);

const AssociationStats = ({ data }) => (
  <div className="container-associations">
    {data.map(([association, gain], index) => (
      <div key={index} className="association-item">
        <p className="primary">{association}</p>
        <p className="secondary">{gain + ' €'}</p>
      </div>
    ))}
  </div>
);

const Global = () => {
  return (
    <section>
      <div className="container-global">
        <div className="header">
          <h3>Statistiques Générales</h3>
          <p>Compilation exhaustive de tous les événements.</p>
        </div>
        <div className="container-items">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} />
          ))}
        </div>
        <div className="header">
          <h3></h3>
          <p>Affichage des montants collectés par associations.</p>
        </div>
        <AssociationStats data={sortedAssociationGains} />
      </div>
    </section>
  );
};

export default Global;
