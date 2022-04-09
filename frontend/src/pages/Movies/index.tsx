import './styles.css';
import CardMovie from './CardMovie';
import SearchGenre from './SearchGenre';

const Movies = () => {
  return (
    <div className="movies-container-principal">
   <SearchGenre/>

      <div className="list-card-container row">
        <div className="col-sm-6 col-md-4 col-xl-3">
          <CardMovie />
        </div>

        <div className="col-sm-6 col-md-4 col-xl-3">
          <CardMovie />
        </div>

        <div className="col-sm-6 col-md-4 col-xl-3">
          <CardMovie />
        </div>

        <div className="col-sm-6 col-md-4 col-xl-3">
          <CardMovie />
        </div>

        <div className="col-sm-6 col-md-4 col-xl-3">
          <CardMovie />
        </div>

        <div className="col-sm-6 col-md-4 col-xl-3">
          <CardMovie />
        </div>

      </div>
    </div>
  );
};

export default Movies;
