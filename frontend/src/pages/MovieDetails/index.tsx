
import ButtonIcon from "components/ButtonIcon";
import { ReactComponent as StarImage } from "assets/images/star.svg";
import "./styles.css";

const MovieDetails = () => {
  return (
    <div className="movies-container-details">
      <div>
      <h2>Tela detalhes do filme</h2>
      <h2>id: 1</h2>
      </div>
        <div className="card-container-evaluation">
        <input
          type="text"
          className="form-control base-input"
          placeholder="Deixe sua avaliação aqui"
          name="evaluation"
        />
        <ButtonIcon text="salvar avaliação"/>
        </div>
        <div className="card-container-list">
          <div className="name-title-evaluation">
            <StarImage/>
            <h3>Maria Silva</h3>
          </div>
          <div className="card-evaluation">
              <p>Gostei muito do filme. Foi muito bom mesmo. Pena que durou pouco.</p>
          </div>

          <div className="name-title-evaluation">
            <StarImage/>
            <h3>Maria Silva</h3>
          </div>
          <div className="card-evaluation">
              <p>Gostei muito do filme. Foi muito bom mesmo. Pena que durou pouco.</p>
          </div>

          <div className="name-title-evaluation">
            <StarImage/>
            <h3>Maria Silva</h3>
          </div>
          <div className="card-evaluation">
              <p>Gostei muito do filme. Foi muito bom mesmo. Pena que durou pouco.</p>
          </div>

          <div className="name-title-evaluation">
            <StarImage/>
            <h3>Maria Silva</h3>
          </div>
          <div className="card-evaluation">
              <p>Gostei muito do filme. Foi muito bom mesmo. Pena que durou pouco.</p>
          </div>
        </div>
    </div>
  );
};

export default MovieDetails;