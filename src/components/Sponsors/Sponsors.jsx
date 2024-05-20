import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './sponsors.scss';

import EmojiEventsRoundedIcon from '@mui/icons-material/EmojiEventsRounded';
import EuroRoundedIcon from '@mui/icons-material/EuroRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import DateRangeRoundedIcon from '@mui/icons-material/DateRangeRounded';

const Sponsors = () => {
  const sponsors = [
    {
      name: 'Sponsor 1',
      logo: 'https://local-fr-public.s3.eu-west-3.amazonaws.com/prod/webtool/userfiles/26529/logo-LAUZIARD.png',
      link: 'https://sponsor1.com',
    },
    {
      name: 'Sponsor 2',
      logo: 'https://cdn.worldvectorlogo.com/logos/agl-retail-energy.svg',
      link: 'https://sponsor2.com',
    },
    {
      name: 'Sponsor 3',
      logo: 'https://cdn.worldvectorlogo.com/logos/grafana.svg',
      link: 'https://sponsor3.com',
    },
    {
      name: 'Sponsor 4',
      logo: 'https://cdn.worldvectorlogo.com/logos/hyatt.svg',
      link: 'https://sponsor4.com',
    },
    {
      name: 'Sponsor 5',
      logo: 'https://cdn.worldvectorlogo.com/logos/old-navy-1.svg',
      link: 'https://sponsor5.com',
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section>
      <div className="container-sponsors">
        <div className="header">
          <h3>Sponsors</h3>
          <p>
            Vous y trouverez tous ceux qui nous ont soutenus au fil des années.
          </p>
        </div>
        <div className="sponsors">
          <Slider {...settings}>
            {sponsors.map((sponsor, index) => (
              <div key={index} className="sponsor-item">
                <a
                  href={sponsor.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="sponsor-logo"
                  />
                </a>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
