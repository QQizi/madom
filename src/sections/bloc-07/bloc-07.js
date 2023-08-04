import './bloc-07.scss';
import {ReactComponent as Chevron} from './../../assets/images/chevron.svg';
import React, {Component} from 'react';
class Bloc07 extends Component {
  constructor(props) {
    super(props);
    this.state = {transition: true, transitioning: false};

    this.transitionAnimation = this.transitionAnimation.bind(this);
  }
  componentDidMount() {}

  transitionAnimation() {
    this.setState(
      {
        transition: true,
        transitioning: true,
      },
      () =>
        setTimeout(
          () => this.setState({transition: false, transitioning: false}),
          1000,
        ),
    );
  }

  render() {
    return (
      <div className="block-container bloc-07">
        <div className="content">
          <h1>Portraits</h1>
          <p className="subtitle">
            Découvrez comment des dirigeants, indépendants, DAF, CFO et
            comptables gagnent du temps et optimisent leur gestion avec
            Pennylane.
          </p>
          <div className="container">
            <div className="imageContainer">
              <img
                alt=""
                src="./assets/images/bloc-07-picture.png"
                className={`bloc-07-picture ${
                  this.state.transition ? 'transition' : ''
                } ${this.state.transitioning ? 'isTransitioning' : ''}`}
              />
              <img
                alt=""
                src="./assets/images/bloc-07-picture.png"
                className={`bloc-07-next-picture ${
                  this.state.transition ? 'transition' : ''
                } ${this.state.transitioning ? 'isTransitioning' : ''}`}
              />
            </div>
            <div className="portrait-block">
              <p className="title">David G.</p>
              <p className="subtitle">Smart entrepreneurs SAS</p>
              <p className="text">
                Process d’enregistrement clair et efficace, service client très
                réactif et sympathique. Je recommande
                <img
                  alt=""
                  src="./assets/images/portrait-icon.png"
                  className="portrait-icon"
                />
              </p>
              <div className="slider-button-container">
                <div
                  className="slider-button slider-button-left"
                  onClick={this.transitionAnimation}>
                  <Chevron />
                  <svg height="200" width="200" className="svg-animation">
                    <circle
                      className="circle"
                      cx="100"
                      cy="100"
                      r="95"
                      stroke="#6FA5FF"
                      strokeWidth="8"
                      fillOpacity="0"
                    />
                  </svg>
                </div>
                <div
                  className="slider-button slider-button-right"
                  onClick={this.transitionAnimation}>
                  <Chevron />
                  <svg height="200" width="200" className="svg-animation">
                    <circle
                      className="circle"
                      cx="100"
                      cy="100"
                      r="95"
                      stroke="#6FA5FF"
                      strokeWidth="8"
                      fillOpacity="0"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Bloc07;
