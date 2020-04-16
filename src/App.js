import React from 'react';
import { Route } from 'react-router-dom';
import './App.scss';

// Components
import Header from './components/Header/Header';
import Main from './components/Main/Main.js';

// Pages
import Home from './pages/Home';
import Events from './pages/Events';
import Speakers from './pages/Speakers';


const App = () => {
  return (
    <>
      <Header />
      <Main>
        <Route exact path="/" component={Home} />
        <Route path="/events" component={Events} />
        <Route path="/speakers" component={Speakers} />
      </Main>
    </>
  );
}

export default App;