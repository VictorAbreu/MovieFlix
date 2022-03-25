import Navbar from "components/Navbar";
import Home from "pages/Home";
import MovieDetails from "pages/MovieDetails";
import Movies from "pages/Movies";
import { Switch, Route, BrowserRouter } from "react-router-dom";

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>

      <Route path="/movies" exact>
        <Movies />
      </Route>

      <Route path="/movies/1" exact>
        <MovieDetails />
      </Route>
    </Switch>
    </BrowserRouter>
);

export default Routes;
