import { ReactComponent as HomeImage } from "assets/images/home.svg";
import ButtonIcon from "components/ButtonIcon";
import "./styles.css";

const Home = () => {
  return (
    <div className="home-container-card">
      <div className="home-content-container">
        <h1>Avalie Filmes</h1>
        <p>Diga o que você achou do seu filme favorito.</p>
        <HomeImage />
      </div>
      <div className="home-login-container">
        <h1>LOGIN</h1>
        <input
          type="text"
          className={`form-control base-input`}
          placeholder="Email"
          name="username"
        />

        <input
          type="password"
          className={`form-control base-input`}
          placeholder="Password"
          name="password"
        />
        <ButtonIcon text="fazer login"/>
      </div>
      
    </div>
  );
};

export default Home;
