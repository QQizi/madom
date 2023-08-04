import './bloc-03.scss';
import Button from './../../ui/Button';
import {ReactComponent as ListIcon} from './../../assets/images/list-icon.svg';

function Bloc03() {
  return (
    <div className="block-container bloc-03">
      <div className="content">
        <div className="picture-bloc">
          <img alt="" src="./assets/images/bloc-03-picture.png" />
          <img alt="" src="./assets/images/illu.png" className="illu" />
          <img alt="" src="./assets/images/notif.png" className="notif" />
        </div>
        <div className="block-text">
          <h1>
            La facilité d’une création <br />
            <span>clé-en-main.</span>
          </h1>
          <p>
            Vous êtes motivé, on fait tout ce qu’il faut pour ne vous ne
            laissiez pas les formalités vous arrêter. Une fois vos informations
            renseignées en ligne, on se charge de tout.
          </p>
          <div className="list">
            <ListItem text="Aide au choix de la forme juridique" />
            <ListItem text="Rédaction des statuts" />
            <ListItem text="Dépôt de capital en ligne" />
            <ListItem text="Immatriculation" />
          </div>
          <Button label="Créer MON entreprise" secondaryClass="primary bold" />
        </div>
      </div>
    </div>
  );
}

const ListItem = ({text}) => {
  return (
    <div className="listItem">
      <ListIcon />
      <span>{text}</span>
    </div>
  );
};

export default Bloc03;
