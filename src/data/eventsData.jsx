import EmojiEventsRoundedIcon from '@mui/icons-material/EmojiEventsRounded';
import EuroRoundedIcon from '@mui/icons-material/EuroRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import MapRoundedIcon from '@mui/icons-material/MapRounded';

export const eventsData = [
  {
    date: '25/4/24',
    association: 'Amis des animaux',
    description:
      'Nous avons organisé une journée amusante au parc pour sensibiliser et collecter des fonds pour les refuges pour animaux.',
    items: [
      {
        icon: <MapRoundedIcon className="item-icon" />,
        primary: 'Lieu',
        secondary: 'Parc des Amis',
      },
      {
        icon: <EmojiEventsRoundedIcon className="item-icon" />,
        primary: 'Gagnants',
        secondary: 'Luc & Marie',
      },
      {
        icon: <PeopleAltRoundedIcon className="item-icon" />,
        primary: 'Participants',
        secondary: 150,
      },
      {
        icon: <EuroRoundedIcon className="item-icon" />,
        primary: 'Collecté',
        secondary: 2300,
      },
    ],
  },
  {
    date: '14/7/23',
    association: 'Nature Propre',
    description:
      'Journée de nettoyage communautaire pour promouvoir la préservation de l’environnement et des espaces verts.',
    items: [
      {
        icon: <MapRoundedIcon className="item-icon" />,
        primary: 'Lieu',
        secondary: 'Théâtre de la Ville',
      },
      {
        icon: <EmojiEventsRoundedIcon className="item-icon" />,
        primary: 'Gagnants',
        secondary: 'Paul & Julie',
      },
      {
        icon: <PeopleAltRoundedIcon className="item-icon" />,
        primary: 'Participants',
        secondary: 200,
      },
      {
        icon: <EuroRoundedIcon className="item-icon" />,
        primary: 'Collecté',
        secondary: 3400,
      },
    ],
  },
  {
    date: '1/5/24',
    association: 'Solidarité Santé',
    description:
      'Une course à pied pour collecter des fonds et sensibiliser à la recherche médicale et aux soins de santé pour tous.',
    items: [
      {
        icon: <MapRoundedIcon className="item-icon" />,
        primary: 'Lieu',
        secondary: 'Stade Municipal',
      },
      {
        icon: <EmojiEventsRoundedIcon className="item-icon" />,
        primary: 'Gagnants',
        secondary: 'Nina & Karim',
      },
      {
        icon: <PeopleAltRoundedIcon className="item-icon" />,
        primary: 'Participants',
        secondary: 300,
      },
      {
        icon: <EuroRoundedIcon className="item-icon" />,
        primary: 'Collecté',
        secondary: 5000,
      },
    ],
  },
  {
    date: '18/6/23',
    association: 'Enfants du monde',
    description:
      'Un festival culturel pour soutenir l’éducation des enfants dans les pays en développement.',
    items: [
      {
        icon: <MapRoundedIcon className="item-icon" />,
        primary: 'Lieu',
        secondary: 'Salle des Fêtes',
      },
      {
        icon: <EmojiEventsRoundedIcon className="item-icon" />,
        primary: 'Gagnants',
        secondary: 'Emma & John',
      },
      {
        icon: <PeopleAltRoundedIcon className="item-icon" />,
        primary: 'Participants',
        secondary: 220,
      },
      {
        icon: <EuroRoundedIcon className="item-icon" />,
        primary: 'Collecté',
        secondary: 4100,
      },
    ],
  },
  {
    date: '3/9/23',
    association: 'Nature Propre',
    description:
      'Journée de nettoyage communautaire pour promouvoir la préservation de l’environnement et des espaces verts.',
    items: [
      {
        icon: <MapRoundedIcon className="item-icon" />,
        primary: 'Lieu',
        secondary: 'Forêt Nationale',
      },
      {
        icon: <EmojiEventsRoundedIcon className="item-icon" />,
        primary: 'Gagnants',
        secondary: 'Sophie & Leo',
      },
      {
        icon: <PeopleAltRoundedIcon className="item-icon" />,
        primary: 'Participants',
        secondary: 180,
      },
      {
        icon: <EuroRoundedIcon className="item-icon" />,
        primary: 'Collecté',
        secondary: 1600,
      },
    ],
  },
];
