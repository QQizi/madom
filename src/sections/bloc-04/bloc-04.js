import './bloc-04.scss';
import Button from './../../ui/Button';

function Bloc04() {
  return (
    <div className="block-container bloc-04">
      <div className="content">
        <div className="block-text">
          <div>
            <h1>
              <span>Zéro stress</span> pour <br className="breakline-desktop" />
              créer votre société.
            </h1>
            <p>
              Une offre entièrement conçu pour éliminer le doute dans la
              création d’entreprise, supprimer la paperasse et, le plus
              important, vous permettre de vous lancer sereinement.
            </p>
          </div>
          <Button label="Créer MON entreprise" secondaryClass="primary bold" />
        </div>
        <div className="cardContainer">
          <div className="card card-01">
            <p className="title">Un suivi experts</p>
            <p className="subtitle">
              Nos juristes sont toujours là pour vous assister en ligne ou par
              mail et ils ont réponse à tout.
            </p>
            <img
              alt=""
              src="./assets/images/48095447.png"
              className="picture-1"
            />
            <img
              alt=""
              src="./assets/images/48095446.png"
              className="picture-2"
            />
            <img
              alt=""
              src="./assets/images/48095448.png"
              className="picture-3"
            />
          </div>
          <div className="card card-02">
            <p className="title">Gagnez de l’argent</p>
            <p className="subtitle">
              Moins cher qu’avec un comptable ou un avocat: jusqu’à 1500€
              d’économies.
            </p>
            <img
              alt=""
              src="./assets/images/1073713927.png"
              className="bloc02-picture"
            />
          </div>
          <div className="card card-03">
            <img
              alt=""
              src="./assets/images/bloc-03-icon.png"
              className="bloc03-picture"
            />
            <p className="title">La garantie de status carrés</p>
            <p className="subtitle">
              Notre méthode ne laisse place à aucune de toute erreur de
              négligence et vous assure des statuts encore plus précis qu’avec
              un comptable. Résultat vous pouvez dormir tranquille, vous être
              protégé.
            </p>
          </div>
          <div className="card card-04">
            <p className="title">Librement depuis chez vous</p>
            <p className="subtitle">
              Oubliez les mails sans fin avec votre comptable, ça c’est le
              passé. Avec ma-domiciliation.fr, une création simple et
              entièrement digitalisée.
            </p>
            <img
              alt=""
              src="./assets/images/1073713919.png"
              className="bloc04-picture"
            />
            <img
              alt=""
              src="./assets/images/1073713929-mobile.png"
              className="bloc04-picture-mobile"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bloc04;
