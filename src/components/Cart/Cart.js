import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import './Cart.css'


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

    deleteItem = (id) => {
      axios.delete(`/session/cart/${id}`).then(res => {
        console.log('deleted')
        {this.setState({count: 0})};
        {this.getCart()}
      })
    }

    onToken = (token) => {
      {this.state.cart.length !== 0 || this.props.show === true
        ?
      axios.post('/api/stripe', {
       method: 'POST',
       body: token,
       amount:this.state.count*100
      })
       .then(response => {
          if(response.data.success){
            axios.post('/api/order', {shipping_address: token.card.address_line1, user_id: this.props.user.user.id})
            .then(order => {
              console.log('success!', order);
              this.state.cart.map((item, i) => {
                axios.post('api/line', {order_id: order.data[0].id, product_id: item.id})
                .then(line => {
                  console.log('super success!', line)
                  if(i === this.state.cart.length-1){
                    this.setState({cart: [], total: 0})
                    alert(`Thank you for your purchase ${token.card.name}`)
                  }
                })
              })
            })
          }
        })
        : alert('Please make sure you are logged in and cart is not empty')
      }
    }

  render() {
    
    return (
      <div>
        <h1 className='cart-title'>Cart</h1>
        { this.state.cart.length !== 0
        ?
          this.state.cart.map(item => {
          return <div className='prod-cart'>
            <h5>{item.name}</h5>
            <p>${item.price}</p>
            <img className='prodImg' src={item.img} />
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
          {this.state.cart.length !== 0 && this.props.show === true
          ?
       <StripeCheckout
        token={this.onToken}
        stripeKey="pk_test_rGBc29KX9tUGcuNiWorM9GuZ"
        amount={this.state.count*100}
        shippingAddress={true}
      />
      : <div></div>
      }
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

export default connect(mapStateToProps)(Cart);