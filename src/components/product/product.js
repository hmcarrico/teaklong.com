import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import './product.css'

class Product extends Component {
  addToCart = (name, price, img, description) => {
    axios.post('/session/cart', {name: name, price: price, img: img, description: description}).then(cart => {
      console.log('added to cart', cart)
    })
  }

  render() {
    return (
      <div className='felxme'>
        <div className='prod'>
          Name: {this.props.product.name} <br />
          Price: {this.props.product.price} <br />
          <img className='prodImg' src={this.props.product.img} /> <br />
          Description: {this.props.product.description} <br />
          <button onClick={() => this.addToCart(this.props.product.name, this.props.product.price, this.props.product.img, this.props.product.description)}>Add to Cart</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    product: state.product
  }
}

export default connect(mapStateToProps)(Product);