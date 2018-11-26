import React, { Component } from 'react';
import Footer from '../Footer/Footer';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import jif from '../../media/skater-color.gif'
import './Home.css'

class Home extends Component {
    constructor(){
        super();
        this.state = {
          open: false,
        }
    }

  render() {
    return (
      <div className='backk'>
        <div className='lugo'>
            <p className='teak'>
            Teak 
            Long
            Boards</p>  
        </div>
        <Link to='/products/all'><button className='shop'>Shop Now</button></Link><br />
        <div ></div>
        <div className='gif-back'>
          <img className='skate-gif' src={jif} />
          <img className='skate-gif' src={jif} />
          <img className='skate-gif' src={jif} />
          <img className='skate-gif' src={jif} />
          <img className='skate-gif' src={jif} />
          <img className='skate-gif' src={jif} />
        </div>
      <Footer className='foot' />
      </div>
    )
  }
}

export default withRouter(Home);