import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './sponsors.scss';
import { eventsData } from '../../data/eventsData';

const getUniqueSponsors = (events) => {
  const seen = new Set();
  const uniqueSponsors = [];

  events.forEach((event) => {
    event.sponsors.forEach((sponsor) => {
      if (!seen.has(sponsor.name)) {
        seen.add(sponsor.name);
        uniqueSponsors.push(sponsor);
      }
    });
  });

  return uniqueSponsors;
};

const Sponsors = () => {
  const sponsors = getUniqueSponsors(eventsData);

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
