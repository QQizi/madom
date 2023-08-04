import './bloc-06.scss';
import Button from './../../ui/Button';

function Bloc06() {
  return (
    <div className="block-container bloc-06">
      <div className="content">
        <div className="block-text">
          <div>
            <h1>
              Accédez aussi à <br className="breakline-desktop" />
              nos services de <span>domiciliation.</span>
            </h1>
            <p>
              Les nouvelles entreprises profitent de plus en plus des avantages
              de la domiciliation. Une adresse pro qui reste fixe et vous fait
              suivre votre courrier : idéal pour les société en croissance ou
              qui n’ont pas de local commercial. Parfait aussi pour protéger
              votre vie privée.
            </p>
          </div>
          <div>
            <Button
              label="Créer MON entreprise"
              secondaryClass="primary bold"
            />
          </div>
        </div>
        <div className="cardContainer">
          <div className="card card-01">
            <img
              alt=""
              src="./assets/images/icon-bloc-06-card-01.png"
              className="icon-bloc-01"
            />
            <p className="title">Courrier géré</p>
            <p className="subtitle">
              Scan numérique ou redirection pour recevoir tout votre courrier
              par mail ou sur votre plateforme. Vous ne ratez rien, même en
              déplacement.
            </p>
          </div>
          <div className="card card-02">
            <img
              alt=""
              src="./assets/images/icon-bloc-06-card-02.png"
              className="icon-bloc-01"
            />
            <p className="title">Fait pour la flexibilité</p>
            <p className="subtitle">
              Votre entreprise a besoin d’être libre. Offrez-vous une adresse
              professionnelle qui reste la même au gré de vos mouvements :
              déménagement, nouveaux bureaux...
            </p>
          </div>
          <div className="card card-03">
            <img
              alt=""
              src="./assets/images/icon-bloc-06-card-03.png"
              className="icon-bloc-06-card-03"
            />
            <p className="title">Economisez 500€ de CFE</p>
            <p className="subtitle">
              Les cotisations minimales des entreprises domiciliées à Paris sont
              minimales. Profitez-en : nos domiciliés réduisent leur CFE de 500€
              en moyenne.
            </p>
          </div>
          <div className="card card-04">
            <p className="title">Adresse de prestige</p>
            <p className="subtitle">
              À Paris ou dans les grandes villes de France, vous pouvez même y
              recevoir vos clients. 12 adresses au choix chez
              ma-domiciliation.fr.
            </p>
            <img
              alt=""
              src="./assets/images/bloc-06-1073713927.png"
              className="bloc04-picture"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bloc06;
