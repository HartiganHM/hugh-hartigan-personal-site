import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  constructor() {
    super();
    this.state ={
      currentClass: 'hidden'
    }
  }

  handleClick = (string) => {
    let currentClass = this.props.toggleDetails(string);
    this.setState({ currentClass })
  };

  render() {
    const { currentClass } = this.state;
    const {
      image,
      title,
      description,
      description2,
      url,
      areaOfFocus,
      areaOfFocus2,
      techStack,
      gitHub,
      liveLink
    } = this.props.data;

    if (gitHub) {
      return (
        <div className="Card">
          <img
            className="project-image"
            src={require(`../../images/${image}.jpg`)}
            alt={image}
          />
          <span className="title-wrapper">
            <h2 className="title">{title}</h2>

            <span
              className="view-details"
              onClick={() => this.handleClick(currentClass)}
            >
              {currentClass === 'hidden' ? 'View Details' : 'Hide Details'}
            </span>
          </span>

          <div className={currentClass + ' content-container'}>
            <div className="description-box">
              <h3 className="description-header">Description</h3>
              <p className="description">{description}</p>
              {description2 && <p className="description">{description2}</p>}
            </div>

            <div className="area-of-focus-box">
              <h3 className="area-of-focus-header">My Area of Focus</h3>
              <p className="area-of-focus">{areaOfFocus}</p>
              {areaOfFocus2 && <p className="area-of-focus">{areaOfFocus2}</p>}
            </div>

            <div className="tech-stack-box">
              <h3 className="tech-stack-header">Tech Stack</h3>
              <p className="tech-stack">{techStack}</p>
            </div>

            <span className="button-wrapper">
              {liveLink && (
                <a href={liveLink} target="_blank" className="button">
                  Launch
                </a>
              )}
              <a href={gitHub} target="_blank" className="button">
                GitHub
              </a>
            </span>
          </div>
        </div>
      );
    } else {
      return (
        <div className="Card">
          <img
            className="blog-image"
            src={require(`../../images/${image}.jpg`)}
            alt={image}
          />

          <span className="title-wrapper">
            <h2 className="title">{title}</h2>

            <span
              className="view-details"
              onClick={() => this.handleClick(currentClass)}
            >
              {currentClass === 'hidden' ? 'View Details' : 'Hide Details'}
            </span>
          </span>

          <div className={currentClass + ' content-container'}>
            <div className="description-box">
              <h3 className="description-header">Description</h3>

              <p className="description">{description}</p>
            </div>

            <span className="button-wrapper">
              <a href={url} target="_blank" className="button">
                Read
              </a>
            </span>
          </div>
        </div>
      );
    }
  }
}

export default Card;
