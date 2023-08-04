import React, {Component} from 'react';
import './Carousel.scss';
import {ReactComponent as Chevron} from './../assets/images/chevron.svg';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {activeIndex: 0, sliders: props.sliders};

    this.goNext = this.goNext.bind(this);
    this.goPrev = this.goPrev.bind(this);
    this.resetSliderClasses = this.resetSliderClasses.bind(this);
  }
  componentDidMount() {}

  goNext() {
    const {sliders, activeIndex} = this.state;
    let nextIndex = activeIndex + 1 >= sliders.length ? 0 : activeIndex + 1;

    const newSliders = sliders.reduce((all, slider, index) => {
      //Fade out current slider
      if (index === activeIndex) {
        return [...all, {...slider, sliderClass: 'fadeout'}];
      }

      if (index === nextIndex) {
        return [...all, {...slider, sliderClass: 'fadein'}];
      }

      return [...all, slider];
    }, []);

    this.setState(
      {
        sliders: newSliders,
      },
      () =>
        this.setState({
          timeout: setTimeout(() => this.resetSliderClasses(nextIndex), 500),
        }),
    );
  }

  goPrev() {
    const {sliders, activeIndex} = this.state;
    let nextIndex = activeIndex === 0 ? sliders.length - 1 : activeIndex - 1;

    const newSliders = sliders.reduce((all, slider, index) => {
      //Fade out current slider
      if (index === activeIndex) {
        return [...all, {...slider, sliderClass: 'fadeout'}];
      }

      if (index === nextIndex) {
        return [...all, {...slider, sliderClass: 'fadein'}];
      }

      return [...all, slider];
    }, []);

    this.setState(
      {
        sliders: newSliders,
      },
      () =>
        this.setState({
          timeout: setTimeout(() => this.resetSliderClasses(nextIndex), 500),
        }),
    );
  }

  resetSliderClasses(newIndex) {
    this.setState({activeIndex: newIndex});
  }

  render() {
    return (
      <div className="carousel-container">
        <div
          className="desktop-button slider-button slider-button-left"
          onClick={this.goPrev}>
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
        <div className="carousel-content">
          <div className="carousel-card-behind"></div>
          <div className="carousel-card-behind-two"></div>
          {this.state.sliders.map(
            ({img, subtitle, title, text, sliderClass}, index) => {
              const {activeIndex} = this.state;
              return (
                <div
                  key={index}
                  className={`card ${
                    index === activeIndex
                      ? 'carousel-card'
                      : 'carousel-card-next'
                  } ${sliderClass}`}>
                  <div className="card-content">
                    <img src={img} alt="" />
                    <div>
                      <p className="title">{title}</p>
                      <p className="subtitle">{subtitle}</p>
                    </div>
                  </div>
                  <p className="text">
                    {text}
                    <img
                      alt=""
                      src="./assets/images/portrait-icon.png"
                      className="icon"
                    />
                  </p>
                </div>
              );
            },
          )}
        </div>
        <div
          className="desktop-button slider-button slider-button-right"
          onClick={this.goNext}>
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
        <div className="mobile-button">
          <div
            className="slider-button slider-button-left"
            onClick={this.goPrev}>
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
            onClick={this.goNext}>
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
    );
  }
}

export default Carousel;
