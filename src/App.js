import React, { Component } from 'react';
import Nav from './components/Nav1/Nav1';
import routes from './routes/routes1';
import axios from 'axios';
import './App.css';

const PAYMENT_SERVER_URL = '3RD_PARTY_SERVER';

class App extends Component {
  constructor(){
    super();
    this.state = {

    }
  }
    // onToken = (token) => {
    //     fetch('/save-stripe-token', {
    //       method: 'POST',
    //       body: JSON.stringify(token),
    //     }).then(response => {
    //       response.json().then(data => {
    //         alert(`We are in business, ${data.email}`);
    //       });
    //     })
    //   };
    
    onToken = (token) => {
      axios.post(PAYMENT_SERVER_URL,
          {
            source: token.id,
            currency: 'USD',
            amount: '10000'
          })
          .then(successPayment)
          .catch(errorPayment);
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
