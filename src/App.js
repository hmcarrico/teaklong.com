import React, { Component } from 'react';
import Nav from './components/Nav1/Nav1';
import routes from './routes/routes1';
// import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {

    }
  }

  render() {
    return (
      <div className="app">
      <Nav />
      {routes}
      </div>
    );
  }
}

export default App;
