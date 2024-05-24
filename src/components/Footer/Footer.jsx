import React from 'react';
// import { WebsiteCarbonBadge } from 'react-websitecarbon-badge';
import packageJson from '../../../package.json';
import iconLinkedinPath from '../../assets/icons/linkedin.svg';
import iconGithubPath from '../../assets/icons/github.svg';
import iconGitlabPath from '../../assets/icons/gitlab.svg';

//* Styles
import './footer.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const patchNotesNavigate = () => {
    navigate('/patch-notes');
  };
  const privacyNavigate = () => {
    navigate('/privacy');
  };

  return (
    <footer>
      <div className="container-footer">
        <h5 translate="no">les-truelles-dor</h5>
        <p translate="no" className="version">
          {packageJson.version}
        </p>

        <div className="line"></div>
        <div className="container-social-icons">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/fran%C3%A7ois-dauzet-413243226/"
          >
            <img src={iconLinkedinPath} alt="linkedin" />
          </a>
          <a target="_blank" href="https://github.com/Francois-Dauzet">
            <img src={iconGithubPath} alt="github" />
          </a>
          <a target="_blank" href="https://gitlab.com/Francois-Dauzet">
            <img src={iconGitlabPath} alt="gitlab" />
          </a>
        </div>
        <div translate="no">
          {/* <WebsiteCarbonBadge dark={false} co2="0.18" percentage="82" /> */}
        </div>
        <p translate="no">
          Copyright © {currentYear + ' '}
          <a target="_blank" href="https://francois-d.com/">
            François Dauzet
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
