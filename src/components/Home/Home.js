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
          images: [jif, jif, jif, jif, jif, jif]
        }
    }

    componentDidMount(){
      if(window.innerWidth > 1460){
        let newImages = this.state.images.slice();
        newImages.push(jif)
        if(window.innerWidth > 1650){
          newImages.push(jif)
        }
        this.setState({
          images: newImages
        })
      }
    }

  render() {
    const jifMapped = this.state.images.map(gif => {
      return <div>
        <img className='skate-gif' src={gif} />
      </div>
    })
    return (
      <div className='backk'>
        <div className='lugo'>
            <p className='teak'>
            Teak 
            Long
            Boards</p>  
        </div>
        <Link to='/products/all'><button className='shop'>Shop Now</button></Link><br />
        <div></div>
        <div className='gif-back'>
          {jifMapped}
        </div>
      <Footer className='foot' />
      </div>
    )
  }
}

export default withRouter(Home);