import React, { Component } from 'react';
import Footer from '../Footer/Footer';
import {Link} from 'react-router-dom';
import Modal from 'react-responsive-modal';
import './Home.css'

class Home extends Component {
    constructor(){
        super();
        this.state = {
          open: false
        }
    }

  render() {
    return (
      <div className='backk'>
        <p className='teak'>
        Teak 
        Long
        Boards</p>  
        <Link to='/products/all'><button className='shop'>Shop Now</button></Link><br />
        <Footer className='foot' />
      </div>
    )
  }
}

export default Home;