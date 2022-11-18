import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Header from './Header.jsx';
import Footer from './Footer.jsx';

import Home from './Home.jsx';
import Boutique from './Boutique.jsx';
import Programmation from './Programmation.jsx';
import Artiste from './Artiste.jsx';
import InfosPratiques from './Infos-Pratiques.jsx';

import './App.css';

function App() {
  return (
    <Router>

      <Header />

        <Switch>

          <Route path="/rock-en-delire/programmation">
            <Programmation />
          </Route>

          <Route path="/rock-en-delire/boutique">
            <Boutique />
          </Route>

          <Route path="/rock-en-delire/:day/:name">
            <Artiste />
          </Route>

          <Route path="/rock-en-delire/infos-pratiques">
            <InfosPratiques />
          </Route>

          <Route path="/rock-en-delire/">
            <Home />
          </Route>

        </Switch>

      <Footer />

    </Router>
  );
}

export default App;
