import React, { Component } from 'react';
import axios from 'axios';
import myHOC from '../HOC/myHOC';
import {connect} from 'react-redux';
import { withAlert } from 'react-alert'
import DeckIcon from '../../media/deckIcon.png';
import TruckIcon from '../../media/truckIcon.png';
import WheelIcon from '../../media/wheelIcon.png';
import './Wizard.css'

class StepOneDeck extends Component {

  addToCart = (name, price, img, description, id) => {
    { this.props.show === true
      ?
      axios.post('/session/cart', {name: name, price: price, img: img, description: description, id: id}).then(cart => {
        this.props.history.push('/choose/trucks')
    })
    : this.props.alert.show('please log in to create a board')
  }
}

  render() {
    return (
      <div>
        <div className='icon-div'>
          <img className={this.props.location.pathname === '/choose/deck' ? 'build-icons-active' : 'build-icons' } src={DeckIcon} />
          <img className='build-icons' src={TruckIcon} />
          <img className='build-icons' src={WheelIcon} />
        </div>
        <h1>Choose A Deck</h1>
        <div className='wizard-flex'>
          {this.props.data.map(deck => {
            return <div className='prod'>
              <div onClick={() => this.addToCart(deck.name, deck.price, deck.img, deck.description, deck.id)}>
                <h3 className='titleHov' >{deck.name}</h3>
                <img alt='picture of skateboard deck' className='prodImg' src={deck.img} />
                <p>${deck.price}</p>
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

export default withAlert(myHOC(connect(mapStateToProps)(StepOneDeck), '/api/decks'));