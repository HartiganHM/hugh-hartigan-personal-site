import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import copyContent from '../../copy/copyContent';
import svgPaths from '../../copy/svgPaths';
import { Document, Page } from 'react-pdf';
import resume from '../../images/Hugh-Hartigan-Resume.pdf';
import './About.css';

class About extends Component {
  getResumeSize = () => {
    const innerWidth = window.innerWidth;

    if (innerWidth > 700) {
      return 640;
    } else {
      return window.innerWidth - 60;
    }
  };

  render() {
    const {
      toggleMenu,
      onRedirect,
      isMenuShown,
      isResumeShown,
      showResume,
      hideResume,
      history
    } = this.props;
    const { about } = copyContent;

    const navProps = {
      toggleMenu,
      isMenuShown,
      isResumeShown,
      onRedirect,
      history
    };

    return (
      <div className="About">
        <Nav currentPage={'About'} {...navProps} />

        <div className="info-container">
          <div className="top-container">
            <img
              className="profile-image"
              src={require('../../images/Hugh-Hartigan.jpg')}
              alt="Hugh-Hartigan-software-developer"
            />
            <div className="profile-description-container">
              <span className="description-header">{about.header}</span>

              <p className="profile-description">{about.description1}</p>

              <p className="profile-description">{about.description2}</p>

              <p className="profile-description">{about.description3}</p>

              <ul className="questions">
                <li>{about.question1}</li>
                <li>{about.question2}</li>
                <li>{about.question3}</li>
              </ul>
            </div>
          </div>

          <div className="link-wrapper">
            <div className="link-box">
              <a
                onClick={showResume}
                rel="noopener noreferrer"
                className="icon-wrapper"
              >
                <svg className="icon" viewBox="0 0 512 512">
                  <g>
                    <path d={svgPaths.resume} />
                  </g>
                </svg>
                <span className="icon-text">{about.iconText1}</span>
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
                <span className="icon-text">{about.iconText2}</span>
              </a>
            </div>

            <div className="link-box">
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
                <span className="icon-text">{about.iconText3}</span>
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
                <span className="icon-text">{about.iconText4}</span>
              </a>
            </div>
          </div>
        </div>

        {isResumeShown && (
          <div className="resume-dialog">
            <div className="download-icon">
              <svg className="download-arrow" viewBox="0 0 444.819 444.819">
                <g>
                  <path d={svgPaths.download} />
                </g>
              </svg>

              <span className="download-line" />
            </div>

            <div className="close-icon" onClick={hideResume}>
              <span className="close-icon-line one" />
              <span className="close-icon-line two" />
            </div>

            <Document file={resume}>
              <Page
                pageNumber={1}
                className="resume"
                width={this.getResumeSize()}
              />
            </Document>
          </div>
        )}
      </div>
    );
  }
}

export default About;

// https://www.turing.io/sites/default/files/resumes/Hugh-Hartigan-Resume.pdf
