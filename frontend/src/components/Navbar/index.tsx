import './styles.css';
import { useContext, useEffect } from 'react';
import history from 'util/history';
import { AuthContext } from 'AuthContext';
import { getTokenData, isAuthenticated } from 'util/auth';
import { removeAuthData } from 'util/storage';
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

const Navbar = () => {
  const { authContextData, setAuthContextData } = useContext(AuthContext);
  const [btAtivo, setBtAtivo] = useState('nav-btn-exit-none');

  const changeBtAtivo = (ativo: boolean) => {
    if (ativo) {
      setBtAtivo('nav-btn-exit');
    } else {
      setBtAtivo('nav-btn-exit-none');
    }
  };

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
    changeBtAtivo(false);
    setAuthContextData({
      authenticated: false,
    });
    history.replace('/');
  };

  return (
    <nav className="main-nav">
      <div className="nav-logo-text">
        <h2>MovieFlix</h2>
      </div>
      <div className="nav-btn-exit">
        {authContextData.authenticated ? (
          <>
            <span className="nav-username">
              {authContextData.tokenData?.user_name}
            </span>
            <a href="#logout" onClick={handleLogoutClick}>
              SAIR
            </a>
          </>
        ) : (
          <a href="#logout" onClick={handleLogoutClick}>
              SAIR
            </a>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
