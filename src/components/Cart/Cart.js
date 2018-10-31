import React, { Component } from 'react';
import axios from 'axios';


class Cart extends Component {
    constructor(){
        super();
        this.state = {
          cart: []
        }
    }

    componentDidMount(){
      this.getCart()
    }

    getCart = () => {
      axios.get('/session/cart').then(res => {
        this.setState({
          cart: res.data
        })
      })
    }

    deleteItem = (id) => {
      axios.delete(`/session/cart/${id}`).then(res => {
        console.log('deleted')
        {this.getCart()}
      })
    }

  render() {
    return (
      <div>
        Cart
        {console.log(this.state.cart)}
        { this.state.cart.length !== 0
        ?
          this.state.cart.map(item => {
          return <div className='prod'>
            {console.log(item)}
            <h5>{item.name}</h5>
            <p>${item.price}</p>
            <img className='prodImg' src={item.img} />
            <p>{item.description}</p>
            <button onClick={() => this.deleteItem(item.id)}>Delete From Cart</button>
          </div>
        })
        : <div> 
          Nothing is in cart
        </div>
        }
      </div>
    )
  }
}
export default Cart;