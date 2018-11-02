import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';


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

  render() {
    
    return (
      <div>
        Cart
        {console.log(this.state.cart)}
        { this.state.cart.length !== 0 || this.props.show === true
        ?
          this.state.cart.map(item => {
          return <div className='prod'>
            {console.log(item)}
            <h5>{item.name}</h5>
            <p>${item.price}</p>
            <img className='prodImg' src={item.img} />
            <p>{item.description}</p>
            <button onClick={() => this.deleteItem(item.id, item.price)}>Delete From Cart</button>
          </div>
        })
        :<div> 
        Nothing in cart
       </div>
        }

        { this.props.show === false
        ? <div>
        Please login in to add items to your cart
        </div>
        : <div>
          
        </div>
        }
        {
          this.props.show
          ? <div>
            <p>Total = {this.state.count}</p>
          </div>
          : ''
        }
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