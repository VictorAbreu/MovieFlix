import { Movie } from 'type/movie';
import './styles.css';

type Props = {
  movie?: Movie;
};

const CardMovieDetail = ({ movie }: Props) => {
  return (
    <div className="cardmoviedetail-container">
      <div>
        <img
          src={movie?.imgUrl}
          alt="Movie"
        />
      </div>

      <div className="cardmoviedetail-text-container">
        <h3>{movie?.title}</h3>
        <h4>{movie?.year}</h4>
        <p>{movie?.subTitle}</p>
        <div className="cardmoviedetail-summary-container">
          <p>{movie?.synopsis}</p>
        </div>
      </div>
    </div>
  );
};

export default CardMovieDetail;
