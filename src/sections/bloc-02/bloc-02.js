import './bloc-02.scss';
import Button from './../../ui/Button';
import {ReactComponent as Valise} from './../../assets/images/valise.svg';
import {ReactComponent as Boue} from './../../assets/images/boue.svg';
import {ReactComponent as Dots} from './../../assets/images/dots.svg';
import {ReactComponent as Layers} from './../../assets/images/layers.svg';
import {ReactComponent as Marteau} from './../../assets/images/marteau.svg';
import {ReactComponent as Panier} from './../../assets/images/panier.svg';
import {ReactComponent as Sante} from './../../assets/images/sante.svg';
import {ReactComponent as Screen} from './../../assets/images/screen.svg';
import {ReactComponent as Server} from './../../assets/images/server.svg';
import {ReactComponent as Slice} from './../../assets/images/slice.svg';
import {ReactComponent as Voiture} from './../../assets/images/voiture.svg';
import {ReactComponent as Web} from './../../assets/images/web.svg';

function Bloc02() {
  return (
    <div className="block-container bloc-02">
      <div className="content">
        <div className="block-text">
          <h1>
            Quel sera <span>votre domaine d’activité ?</span>
          </h1>
          <p>
            Laissez vous guider pour découvrir la forme de société qu’il vous
            faut, obtenez vos statuts signé et créer votre entreprise
            sereinement.
          </p>
          <Button
            label="Créer MON entreprise"
            secondaryClass="primary bold breakline-desktop"
          />
          <div className="text-container">
            <img alt="" src="./../../assets/images/globe.png" />
            <p>
              Quelques clics suffisent ensuite pour créer votre entreprise avec
              nous.
            </p>
          </div>
        </div>
        <div className="bloc02-list">
          <ListItem title="Conseil / études / audit" logo={<Valise />} />
          <ListItem title="Construction et travaux" logo={<Marteau />} />
          <ListItem title="Automobile et transport" logo={<Voiture />} />
          <ListItem title="Vente en ligne" logo={<Web />} />
          <ListItem title="Commerce" logo={<Panier />} />
          <ListItem title="Santé et beauté" logo={<Sante />} />
          <ListItem title="Achat et revente" logo={<Layers />} />
          <ListItem title="Informatique et web" logo={<Screen />} />
          <ListItem title="Services à la personne" logo={<Boue />} />
          <ListItem title="Restauration" logo={<Slice />} />
          <ListItem title="Services aux entreprises" logo={<Server />} />
          <ListItem title="Autres" logo={<Dots />} />
        </div>
        <Button
          label="Créer MON entreprise"
          secondaryClass="primary bold breakline-mobile"
        />
      </div>
    </div>
  );
}

const ListItem = ({title, logo}) => {
  return (
    <div className="list-item">
      <div className="list-item-content">
        {logo}
        <p>{title}</p>
      </div>
    </div>
  );
};

export default Bloc02;
