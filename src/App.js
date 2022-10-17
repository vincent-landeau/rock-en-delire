import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Header from './Header.jsx';
import Footer from './Footer.jsx';

import Home from './Home.jsx';
import Programmation from './Programmation.jsx';
import Artiste from './Artiste.jsx';
import InfosPratiques from './Infos-Pratiques.jsx';

import './App.css';

function App() {
  return (
    <Router>

      <Header />

        <Switch>

          <Route path="/programmation">
            <Programmation />
          </Route>

          <Route path="/:day/:name">
            <Artiste />
          </Route>

          <Route path="/infos-pratiques">
            <InfosPratiques />
          </Route>

          <Route path="/">
            <Home />
          </Route>

        </Switch>

      <Footer />

    </Router>
  );
}

export default App;
