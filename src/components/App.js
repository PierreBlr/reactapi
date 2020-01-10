import React from 'react';
import Menu from './Menu'
import logo from '../logo.svg';
import '../styles/App.css';
import { Switch, Route } from "react-router-dom";
 

import List from './List';
import Cards from './Cards';
import Card from './Card';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu />
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/cartes" component={Cards} />
            <Route path="/carte/:cardId" component={Card} />
          </Switch>
      </header>
    </div>
  );
}

export default App;
