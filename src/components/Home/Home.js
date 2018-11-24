import React, { Component } from 'react';
import Footer from '../Footer/Footer';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import VectorSkate from '../../media/vec1.jpg'
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
        <p className='teak'>
        Teak 
        Long
        Boards</p>  
        <Link to='/products/all'><button className='shop'>Shop Now</button></Link><br />
        <div ></div>
        <img className='skate' src={VectorSkate} />
        {console.log(this.props.location.pathname)}
      <Footer className='foot' />
      </div>
    )
  }
}

export default withRouter(Home);