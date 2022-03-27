import Navbar from 'components/Navbar';
import PrivateRoute from 'components/PrivateRoute';
import Login from 'pages/Login';
import MovieDetails from 'pages/MovieDetails';
import Movies from 'pages/Movies';
import { Switch, Route, Router } from 'react-router-dom';
import history from 'util/history';

const Routes = () => (
  <Router history={history}>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Login />
      </Route>

      <PrivateRoute path="/movies">
        <Route path="/movies" exact>
          <Movies />
        </Route>

        <Route path="/movies/:movieId">
          <MovieDetails />
        </Route>
      </PrivateRoute>
    </Switch>
  </Router>
);

export default Routes;
