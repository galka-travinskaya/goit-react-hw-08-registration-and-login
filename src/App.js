import React, { Component, Suspense, lazy } from 'react';
import { connect } from 'react-redux';
import { Switch } from 'react-router-dom';
import AppBar from './components/AppBar';
import Container from './components/Container';
import { getCurrentUser } from './redux/auth';
import PrivatRoute from './components/PrivatRoute';
import PublicRoute from './components/PublicRoute';

const HomeView = lazy(() => import('./views/HomeView'));
const TodosView = lazy(() => import('./views/TodosView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <Container>
        <AppBar />

        <Suspense fallback={<p>Загружаем...</p>}>
          <Switch>
            <PublicRoute exact path="/" component={HomeView} />
            <PublicRoute
              path="/register"
              restricted
              redirectTo="/todos"
              component={RegisterView}
            />
            <PublicRoute
              path="/login"
              restricted
              redirectTo="/todos"
              component={LoginView}
            />
            <PrivatRoute
              path="/todos"
              component={TodosView}
              redirectTo="/login"
            />
          </Switch>
        </Suspense>
      </Container>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
