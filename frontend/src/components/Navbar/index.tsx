import "./styles.css";

const Navbar = () => {
  return (
    <nav className="main-nav">
      <div className="nav-logo-text">
        <h2>MovieFlix</h2>
      </div>
      <div className="nav-btn-exit">
        <a href="#logout">SAIR</a>
      </div>
    </nav>
  );
};

export default Navbar;
