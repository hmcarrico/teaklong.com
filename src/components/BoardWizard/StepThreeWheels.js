import React, { Component } from 'react';
import axios from 'axios';
import myHOC from '../HOC/myHOC';
import {connect} from 'react-redux';
import DeckIcon from '../../media/deckIcon.png';
import TruckIcon from '../../media/truckIcon.png';
import WheelIcon from '../../media/wheelIcon.png';
import './Wizard.css'

class StepThreeWheels extends Component {

  addToCart = (name, price, img, description, id) => {
    { this.props.show === true
      ?
      axios.post('/session/cart', {name: name, price: price, img: img, description: description, id: id}).then(cart => {
        this.props.history.push('/cart')
    })
    : alert('please log in to create a board')
  }
}

  render() {
    return (
      <div>
        <div className='icon-div'>
          <img className='build-icons' src={DeckIcon} />
          <img className='build-icons' src={TruckIcon} />
          <img className={this.props.location.pathname === '/choose/wheels' ? 'build-icons-active' : 'build-icons' } src={WheelIcon} />
        </div>
        <h1>Choose A Set of Wheels</h1>
        <div className='wizard-flex'>
          {this.props.data.map(wheel => {
            return <div className='prod'>
              <div onClick={() => this.addToCart(wheel.name, wheel.price, wheel.img, wheel.description, wheel.id)}>
                <h3 className='titleHov' >{wheel.name}</h3>
                <img alt='picture of skateboard deck' className='prodImg' src={wheel.img} />
                <p>${wheel.price}</p>
              </div>
            </div>
          })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    show : state.show
  }
}

export default myHOC(connect(mapStateToProps)(StepThreeWheels), '/api/wheels');