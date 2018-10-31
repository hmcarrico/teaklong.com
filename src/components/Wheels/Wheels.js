import React, { Component } from 'react'
import axios from 'axios';
import './Wheels.css';
import {connect} from 'react-redux';
import {setProduct} from '../../ducks/reducer'

 class Wheels extends Component {
  constructor(){
    super();
    this.state = {
      wheels: []
    }
  }

  componentDidMount(){
    axios.get('/api/wheels').then(res => {
      this.setState({
        wheels: res.data
      })
    })
  }

  addToCart = (name, price, img, description, id) => {
    axios.post('/session/cart', {name: name, price: price, img: img, description: description, id: id}).then(cart => {
      console.log('added to cart', cart)
    })
  }

  changePage = (obj) => {
    this.props.setProduct(obj)
    this.props.history.push(`/products/complete/item`)
  }

  render() {
    const wheels = this.state.wheels.map(wheel => {
      return <div className='prod'>
        <h5 className='titleHov' onClick={() => this.changePage({name: wheel.name, price: wheel.price, img: wheel.img, description: wheel.description})}>{wheel.name}</h5>
        <p>${wheel.price}</p>
        <img alt='https://via.placeholder.com/300' className='prodImg' src={wheel.img} />
        <p>{wheel.description}</p>
        <button onClick={() => this.addToCart(wheel.name, wheel.price, wheel.img, wheel.description, wheel.id)}>Add to Cart</button>
      </div>
    })
    return (
      <div className='hundred'>
        <h1 className='titlee'>Wheels</h1>
        <div className='felxme'>
        {wheels}
        {console.log(this.state.wheels)}
        </div>
      </div>
    )
  }
}

export default connect(null, {setProduct})(Wheels)