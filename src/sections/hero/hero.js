import './hero.scss';
import Button from './../../ui/Button';

function Hero() {
  return (
    <div className="hero block-container">
      <div className="content">
        <div className="block-text">
          <h1>
            La solution la plus simple pour{' '}
            <span>créer votre entreprise en ligne dès 0€</span>
          </h1>
          <p>
            Gagnez du temps en créant facilement votre entreprise en ligne. On
            vous guide de A à Z et on s’occupe de toutes les démarches
            administratives.
          </p>
          <Button label="Créer MON entreprise" secondaryClass="primary bold" />
          <div className="image-container">
            <img alt="" src="./assets/images/1035.png" />
            <img
              className="trust"
              alt=""
              src="./assets/images/1073713928.png"
            />
          </div>
        </div>
        <div className="hero-picture">
          <img alt="" src="./assets/images/picture.png" />
          <div className="hero-picture-label">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="363"
              height="128"
              viewBox="0 0 363 128"
              fill="none">
              <g filter="url(#filter0_dd_1365_18349)">
                <path
                  d="M24 24C24 17.3726 29.3726 12 36 12H327C333.627 12 339 17.3726 339 24V80C339 86.6274 333.627 92 327 92H36C29.3726 92 24 86.6274 24 80V24Z"
                  fill="white"
                />
              </g>
              <defs>
                <filter
                  id="filter0_dd_1365_18349"
                  x="0"
                  y="0"
                  width="363"
                  height="128"
                  filterUnits="userSpaceOnUse">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="12" />
                  <feGaussianBlur stdDeviation="12" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1365_18349"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="1" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect1_dropShadow_1365_18349"
                    result="effect2_dropShadow_1365_18349"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect2_dropShadow_1365_18349"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
            <img alt="" src="./assets/images/rocket.png" />
            <span>Kbis en 48h</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
