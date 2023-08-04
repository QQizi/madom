import './bloc-08.scss';
import Button from '../../ui/Button';
function Bloc08() {
  return (
    <div className="block-container bloc-08">
      <div className="content">
        <h1>Lancez-vous</h1>
        <p className="subtitle">en 5 min chrono.</p>
        <div className="container">
          <Bloc08Card number="1" title="Formulaire en 5 min" />
          <Bloc08Card number="2" title="Dossier traité en 48H" />
          <Bloc08Card number="3" title="Recevez votre KBIs" />
        </div>
        <Button label="Créer MON entreprise" secondaryClass="primary bold" />
      </div>
    </div>
  );
}

const Bloc08Card = ({number, title, subtitle}) => {
  return (
    <div className="card">
      <div className="icon">
        <img alt="" src="./assets/images/card-icon.png" className="card-icon" />
        <p>{number}</p>
      </div>
      <p>{title}</p>
      <span>{subtitle}</span>
    </div>
  );
};

export default Bloc08;
