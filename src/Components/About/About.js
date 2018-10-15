import React from 'react';
import Nav from '../Nav/Nav';
import aboutData from '../../data/aboutData';
import svgPaths from '../../data/svgPaths';
import './About.css';

const About = () => {
  return (
    <div className="About">
      <Nav currentPage={'About'} />

      <div className="info-container">
        <div className="top-container">
          <img
            className="profile-image"
            src={require('../../images/Hugh-Hartigan.jpg')}
            alt="Hugh-Hartigan-software-developer"
          />
          <div className="profile-description-container">
            <span className="description-header">{aboutData.header}</span>

            <p className="profile-description">{aboutData.description1}</p>

            <p className="profile-description">{aboutData.description2}</p>

            <p className="profile-description">{aboutData.description3}</p>

            <ul className="questions">
              <li>{aboutData.question1}</li>
              <li>{aboutData.question2}</li>
              <li>{aboutData.question3}</li>
            </ul>
          </div>
        </div>

        <div className="link-wrapper">
          <a
            href="https://www.turing.io/sites/default/files/resumes/Hugh-Hartigan-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-wrapper"
          >
            <svg className="icon" viewBox="0 0 512 512">
              <g>
                <path d={svgPaths.resume} />
              </g>
            </svg>
            <span className="icon-text">{aboutData.iconText1}</span>
          </a>
          <a
            href="https://github.com/HartiganHM"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-wrapper"
          >
            <svg className="icon" viewBox="0 0 436.5 426.8">
              <g>
                <path d={svgPaths.github} />
              </g>
            </svg>
            <span className="icon-text">{aboutData.iconText2}</span>
          </a>
          <a
            href="mailto:hartigan.hm@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-wrapper"
          >
            <svg className="icon" viewBox="0 0 512 495.1">
              <g>
                <path d={svgPaths.email} />
              </g>
            </svg>
            <span className="icon-text">{aboutData.iconText3}</span>
          </a>
          <a
            href="https://www.linkedin.com/in/hartiganhm/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-wrapper"
          >
            <svg className="icon" viewBox="0 0 512 512">
              <g>
                <path d={svgPaths.linkedin} />
              </g>
            </svg>
            <span className="icon-text">{aboutData.iconText4}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;

// https://www.turing.io/sites/default/files/resumes/Hugh-Hartigan-Resume.pdf
