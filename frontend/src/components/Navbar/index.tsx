import './styles.css';
import history from 'util/history';
import { removeAuthData } from 'util/storage';
import { useContext, useEffect } from 'react';
import { AuthContext } from 'AuthContext';
import { getTokenData, isAuthenticated } from 'util/auth';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { authContextData, setAuthContextData } = useContext(AuthContext);
  
  useEffect(() => {
    if (isAuthenticated()) {
      setAuthContextData({
        authenticated: true,
        tokenData: getTokenData(),
      });
    } else {
      setAuthContextData({
        authenticated: false,
      });
    }
  }, [setAuthContextData]);

  const handleLogoutClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    removeAuthData();
    setAuthContextData({
      authenticated: false,
    });
    history.replace('/');
  };

  return (
    <nav className="main-nav">
      <div className="nav-logo-text">
      <Link to="/movies">
        <h2>MovieFlix</h2>
        </Link>
      </div>
      {isAuthenticated() && (
        <div className="nav-btn-exit">
           {authContextData.authenticated ? (
            <>
              <a href="#logout" onClick={handleLogoutClick}>
                SAIR
              </a>
            </>
          ) : (
            <>
              
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
