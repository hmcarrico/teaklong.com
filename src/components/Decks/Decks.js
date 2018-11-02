import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {setProduct} from '../../ducks/reducer'
import './Decks.css'

class Decks extends Component {
    constructor(){
        super();
        this.state = {
          decks: []
        }
    }

    componentDidMount(){
      axios.get('/api/decks').then(res => {
        this.setState({
          decks: res.data
        })
      })
    }

    addToCart = (name, price, img, description, id) => {
      console.log(this.props.user)
      console.log(this.props.show)
      { this.props.show === true
        ?
      axios.post('/session/cart', {name: name, price: price, img: img, description: description, id: id}).then(cart => {
        console.log('added to cart', cart)
      })
      : alert('please log in to add to cart')
      } 
    }

    changePage = (obj) => {
      this.props.setProduct(obj)
      this.props.history.push(`/products/complete/item`)
    }

  render() {
    const decks = this.state.decks.map(deck => {
      return <div className='prod'>
        <h5 className='titleHov' onClick={() => this.changePage({name: deck.name, price: deck.price, img: deck.img, description: deck.description,  type: deck.type})}>{deck.name}</h5>
        <p>${deck.price}</p>
        <img alt='picture of skateboard deck' className='prodImg' src={deck.img} />
        <p>{deck.description}</p>
        <button onClick={() => this.addToCart(deck.name, deck.price, deck.img, deck.description, deck.id)}>Add to Cart</button>
      </div>
    })
    return (
      <div className='hundred'>
        <h1 className='titlee'>Decks</h1>
        <div className='felxme'>
        {decks}
        {console.log(this.state.decks)}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user : state.user,
    show : state.show
  }
}

export default connect(mapStateToProps, {setProduct})(Decks);
