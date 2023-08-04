import './bloc-01.scss';

function Bloc01() {
  return (
    <div className="block-container bloc-01">
      <div className="bloc-01-container">
        <div className="content">
          <SubBloc
            image="computer"
            imageWidth="78"
            title="100% en ligne"
            subtitle="Même la signature de vos status se fait en signature éléctronique"
          />
          <SubBloc
            image="note"
            imageWidth="81"
            title="On gère les formalités"
            subtitle="Un dossier parfait généré et vérifié par nos juristes"
          />
          <SubBloc
            image="light"
            imageWidth="65"
            title="Toujours le bon choix"
            subtitle="Guidé point par point dans notre outil pour trouver la forme juridique la plus adaptée"
          />
        </div>
      </div>
    </div>
  );
}

const SubBloc = ({image, imageWidth, title, subtitle}) => {
  return (
    <div className="subBlocContainer">
      <div className="iconContainer">
        <img
          alt=""
          src={`./../../assets/images/${image}.png`}
          width={imageWidth}
        />
      </div>
      <p>{title}</p>
      <span>{subtitle}</span>
    </div>
  );
};

export default Bloc01;
