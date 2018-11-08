import React, { Component } from 'react';
import Footer from '../Footer/Footer';
import axios from 'axios';
import './Home.css'

class Home extends Component {
    constructor(){
        super();
        this.state = {

        }
    }

  render() {
    return (
      <div className='backk'>
        <p className='teak'>
        Teak 
        Long
        Boards</p>
        <Footer className='foot' />
      </div>
    )
  }
}

export default Home;