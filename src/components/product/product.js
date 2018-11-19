import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import './product.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class Product extends Component {
  constructor(props) {
    super()
    this.state = {
       items: [],
       price: ''
    }
  }

  componentDidMount(){
    this.getProduct()
  }

  getProduct = () => {
    axios.get(`/api/one/${this.props.match.params.id}`).then(res => {
      this.setState({
        items: res.data
      })
    })
  }
  
  addToCart = (name, price, img, description, id) => {
    { this.props.show === true
      ?
      axios.post('/session/cart', {name: name, price: price, img: img, description: description, id: id}).then(cart => {
      alert(`${name} added to cart`)
    })
    : alert('please log in to add to cart')
    } 
  }

  deleteItem = (id) => {
    axios.delete(`/api/delete/${id}`).then(res => {
      alert('Item has been deleted');
      {this.props.history.push(`/products/all`)}
    })
  }

  handleChangeInput = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
}

  editPrice = (price, id) => {
    axios.put(`/api/edit/${id}`, {price}).then(res => {
      alert('Price Edited')
      {this.getProduct()}
      this.setState({
        price: ''
      })
    })
  }

  render() {
    return (
      <div className='felxme1'>
        <div className='prod-one'>
        {this.state.items.map(item => {
          return <div>
          <button className='left' onClick={() => this.props.history.push(`/products/${item.type}s`)}>Back</button> <br />
          <h1>{item.name}</h1> <br />
          <b>Price:</b> {item.price} <br />
            <img className='prodImg' src={item.img} />
          <br />
          <p className='desc'><b>Description:</b> {item.description} </p> <br />
          <button onClick={() => this.addToCart(item.name, item.price, item.img, item.description, item.id)}>Add to Cart</button>
          {
            this.props.show === true &&
            this.props.user.user.admin === true
            ?
            <div>
            <p><input className='addInput' name='price' value={this.state.price} onChange={(e) => this.handleChangeInput(e)}/><button onClick={() => this.editPrice(this.state.price, item.id)}>Edit Price</button></p>
            <button onClick={() => this.deleteItem(item.id)}>Delete Item</button>
            </div>
            :
            <div></div>
          }
          </div>
        })
        }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    product: state.product,
    user: state.user,
    show: state.show
  }
}

export default connect(mapStateToProps)(Product);