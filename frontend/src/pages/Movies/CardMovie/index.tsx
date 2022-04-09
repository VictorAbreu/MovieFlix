import './styles.css';

const CardMovie = () => {
  return (
    <div className="cardmovie-container">
      <img
        src="https://image.tmdb.org/t/p/w533_and_h300_bestv2/wu1uilmhM4TdluKi2ytfz8gidHf.jpg"
        alt="Movie"
      />

      <div className="cardmovie-text-container">
        <h3>O Retorno do Rei</h3>
        <h4>2013</h4>
        <p>O olho do inimigo esta se movendo</p>
      </div>
    </div>
  );
};

export default CardMovie;
