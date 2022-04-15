import { Movie } from 'type/movie';
import './styles.css';

type Props = {
  movie: Movie;
}

const CardMovie = ( { movie } : Props) => {
  return (
    <div className="cardmovie-container">
      <img
        src={movie.imgUrl}
        alt="Movie"
      />

      <div className="cardmovie-text-container">
        <h3>{movie.title}</h3>
        <h4>{movie.year}</h4>
        <p>{movie.subTitle}</p>
      </div>
    </div>
  );
};

export default CardMovie;
