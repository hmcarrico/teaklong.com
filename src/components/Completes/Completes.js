import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {setProduct} from '../../ducks/reducer'
import './Completes.css'

class Completes extends Component {
    constructor(){
        super();
        this.state = {
          completes: []
        }
    }

    componentDidMount(){
      axios.get('/api/completes').then(res => {
        this.setState({
          completes: res.data
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
    let completes = this.state.completes.map(board => {
      return <div className='prod'>
        <h5 className='titleHov' onClick={() => this.changePage({name: board.name, price: board.price, img: board.img, description: board.description})}>{board.name}</h5>
        <p>${board.price}</p>
        <img alt='https://via.placeholder.com/300' className='prodImg' src={board.img} />
        <p>{board.description}</p>
        <button onClick={() => this.addToCart(board.name, board.price, board.img, board.description, board.id)}>Add to Cart</button>
      </div>
    })
    return (
      <div className='hundred'>
        <h1 className='titlee'>Completes</h1>
        <div className='felxme'>
        {completes}
        {console.log(this.state.completes)}
        </div>
      </div>
    )
  }
}

export default connect(null, {setProduct})(Completes);