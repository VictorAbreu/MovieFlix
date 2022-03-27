import './styles.css';
import { Link } from 'react-router-dom';

const Movies = () => {
  return (
    <div className="movies-container">
      <h2>Tela listagem de filmes</h2>
      <Link to="/movies/1">
        <h5>Acessar/movies/1</h5>
      </Link>
      <Link to="/movies/2">
        <h5>Acessar/movies/2</h5>
      </Link>
    </div>
  );
};

export default Movies;
