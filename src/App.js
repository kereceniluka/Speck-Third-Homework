import React from 'react';
import { 
  Route,
  Redirect,
} from 'react-router-dom';
import './App.scss';
import { AuthProvider } from './lib/context/AuthContext';

// Components
import Header from './components/Header/Header';
import Main from './components/Main/Main.js';

// Pages
import Home from './pages/Home';
import Events from './pages/Events';
import Speakers from './pages/Speakers';
import Registration from './pages/Registration';
import Login from './pages/Login';

const App = () => {

  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      localStorage.getItem('token') !== null ? <Component {...props} /> : <Redirect to='/login'/>
    )}/>
  )

  return (
      <AuthProvider>
        <Header />
        <Main>
          <Route exact path="/" component={Home} />
          <PrivateRoute path="/events" component={Events} />
          <PrivateRoute path="/speakers" component={Speakers} />
          <Route path="/registration" component={Registration} />
          <Route path="/login" component={Login} />
        </Main>
      </AuthProvider>
  );
}

export default App;