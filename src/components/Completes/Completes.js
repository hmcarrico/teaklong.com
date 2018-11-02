import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {setProduct} from '../../ducks/reducer'
import {withRouter} from 'react-router-dom'
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

    changePage = (obj, id) => {
      this.props.setProduct(obj)
      this.props.history.push(`/products/complete/item/${id}`)
    }

  render() {
    let completes = this.state.completes.map(board => {
      return <div className='prod' onClick={() => this.changePage({name: board.name, price: board.price, img: board.img, description: board.description, type: board.type}, board.id)}>
        <h5>{board.name}</h5>
        <img alt='picture of a longboard' className='prodImg' src={board.img} />
        <p>${board.price}</p>
        {/* <p>{board.description}</p> */}
        {/* <button onClick={() => this.addToCart(board.name, board.price, board.img, board.description, board.id)}>Add to Cart</button> */}
        {/* <button className='titleHov' onClick={() => this.changePage({name: board.name, price: board.price, img: board.img, description: board.description, type: board.type}, board.id)}>Details</button> */}
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

const mapStateToProps = (state) => {
  return {
    user : state.user,
    show : state.show
  }
}

export default withRouter(connect(mapStateToProps, {setProduct})(Completes))