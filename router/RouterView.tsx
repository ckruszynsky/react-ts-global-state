import * as React from 'react';
import {
  HashRouter,
  Redirect,
  Route,
  Switch,
  useLocation
} from 'react-router-dom';
import { Login } from '../components/Login';
import { Header } from '../components/Header';
import { Container } from 'react-bootstrap';
import { PrivateRoute } from './PrivateRoute';
import { globalContext } from '../store/store';
import { Favorites } from '../components/Favorites';
import { Search } from '../components/Search';

export const RouterView: React.FC = () => {
  const { globalState } = React.useContext(globalContext);
  const location = useLocation();
  const { pathname } = location;

  return (
    <Container fluid className="p-0">
      <HashRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Redirect to="login" />
          </Route>
          <PrivateRoute
            exact
            path="/search"
            pathname={pathname}
            component={Search}
          />
          <PrivateRoute
            exact
            path="/favorites"
            pathname={pathname}
            component={Favorites}
          />
          <Route exact path="/login">
            {globalState.isUserAuthenticated ? (
              <Redirect to="/favorites" from={pathname} />
            ) : (
              <Login />
            )}
          </Route>
        </Switch>
      </HashRouter>
    </Container>
  );
};
