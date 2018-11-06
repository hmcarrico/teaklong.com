import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import './Cart.css'
import Checkout from '../Checkout/Checkout'


class Cart extends Component {
    constructor(){
        super();
        this.state = {
          cart: [],
          count: 0
        }
        
    }

    componentDidMount(){
      this.getCart()
    }

    getCart = () => {
      axios.get('/session/cart').then(res => {
        let total = 0;
        if(res.data){
        console.log(res.data)
        res.data.map(item => {
          return total += item.price
        })
        this.setState({
          cart: res.data,
          count: total
        })
      }
      })
    }

    deleteItem = (id, price) => {
      axios.delete(`/session/cart/${id}`).then(res => {
        console.log('deleted')
        {this.setState({count: 0})};
        {this.getCart()}
      })
    }

    onToken = (token) => {
      console.log('token', token)
      axios.post('/api/stripe', {
       method: 'POST',
       body: token.id,
       amount:this.state.count*100
      })
       .then(response => {
          console.log(response)
          alert(`We are in business`);
      })
    };

  render() {
    
    return (
      <div>
        <h1 className='cart-title'>Cart</h1>
        {console.log(this.state.cart)}
        { this.state.cart.length !== 0 || this.props.show === true
        ?
          this.state.cart.map(item => {
          return <div className='prod-cart'>
            {console.log(item)}
            <h5>{item.name}</h5>
            <p>${item.price}</p>
            <img className='prodImg' src={item.img} />
            {/* <p>{item.description}</p> */}
            {console.log(item.id)}
            <button onClick={() => this.deleteItem(item.id, item.price)}>Delete From Cart</button>
          </div>
        })
        :<div> 
        <p className='info'>Nothing in cart</p>
       </div>
        }

        { this.props.show === false
        ? <div>
        <p className='info'>Please login in to add items to your cart</p>
        </div>
        : <div>
          
        </div>
        }
        {
          this.props.show
          ? <div>
            <p className='info'>Total ${this.state.count}</p>
          </div>
          : ''
        }
        <div>
       <StripeCheckout
        token={this.onToken}
        stripeKey="pk_test_rGBc29KX9tUGcuNiWorM9GuZ"
        amount={this.state.count*100}
      />
      {/* <Checkout /> */}
      </div>
      </div>
    )
  }
}
// cart ? show ? showstuff : '' : ''

const mapStateToProps = (state) => {
  return {
    user : state.user,
    show : state.show
  }
}

export default connect(mapStateToProps)(Cart);