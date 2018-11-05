import React, { Component } from 'react';
import Nav from './components/Nav1/Nav1';
import routes from './routes/routes1';
import Footer from './components/Footer/Footer';
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
      <Footer />
      </div>
    );
  }
}

export default App;
