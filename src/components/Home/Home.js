import React, { Component } from 'react';
import './Home.css'
import ReactPlayer from 'react-player'

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
      </div>
    )
  }
}

export default Home;