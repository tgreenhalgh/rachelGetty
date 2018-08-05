import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Kouros from './components/Kouros';

import Tours from './components/Tours';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path="/" component={Main} />
        <Route exact path="/tours" component={Tours} />
        <Route exact path="/kouros" component={Kouros} />
      </div>
    );
  }
}

export default App;
