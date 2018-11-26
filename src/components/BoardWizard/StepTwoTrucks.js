import React, { Component } from 'react';
import axios from 'axios';
import myHOC from '../HOC/myHOC';
import {connect} from 'react-redux';
import { withAlert } from 'react-alert'
import DeckIcon from '../../media/deckIcon.png';
import TruckIcon from '../../media/truckIcon.png';
import WheelIcon from '../../media/wheelIcon.png';
import './Wizard.css'

class StepTwoTrucks extends Component {
  
  addToCart = (name, price, img, description, id) => {
    { this.props.show === true
      ?
      axios.post('/session/cart', {name: name, price: price, img: img, description: description, id: id}).then(cart => {
        this.props.history.push('/choose/wheels')
    })
    : this.props.alert.show('please log in to create a board')
  }
}

  render() {
    return (
      <div>
        <div className='icon-div'>
          <img className='build-icons' src={DeckIcon} />
          <img className={this.props.location.pathname === '/choose/trucks' ? 'build-icons-active' : 'build-icons' } src={TruckIcon} />
          <img className='build-icons' src={WheelIcon} />
        </div>
        <h1>Choose A Pair of Trucks</h1>
        <div className='wizard-flex'>
          {this.props.data.map(truck => {
            return <div className='prod'>
              <div onClick={() => this.addToCart(truck.name, truck.price, truck.img, truck.description, truck.id)}>
                <h3 className='titleHov' >{truck.name}</h3>
                <img alt='picture of skateboard deck' className='prodImg' src={truck.img} />
                <p>${truck.price}</p>
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

export default withAlert(myHOC(connect(mapStateToProps)(StepTwoTrucks), '/api/trucks'));