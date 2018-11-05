import React, { Component } from 'react';
import Footer from '../Footer/Footer';
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
      {/* <ReactPlayer muted loop url='https://www.youtube.com/watch?v=ysz5S6PUM-U' playing /> */}
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