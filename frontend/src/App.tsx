
import { AuthContext, AuthContextData } from 'AuthContext';
import Routes from 'Routes';
import './App.css';
import { useState } from 'react';

function App() {

  const [authContextData, setAuthContextData] = useState<AuthContextData>({
    authenticated: false
  });

  return (
    <AuthContext.Provider value={{authContextData, setAuthContextData}}>
    <Routes/>
    </AuthContext.Provider>
  );
}

export default App;
