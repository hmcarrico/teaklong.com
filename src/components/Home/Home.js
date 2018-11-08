import React, { Component } from 'react';
import Footer from '../Footer/Footer';
import {Link} from 'react-router-dom';
import board from '../../media/board.png';
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
        <Link to='/products/all'><button className='shop'>Shop Now</button></Link><br />
        <Footer className='foot' />
      </div>
    )
  }
}

export default Home;