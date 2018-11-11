import React, { Component } from 'react'
import axios from 'axios';
import './Wheels.css';
import {connect} from 'react-redux';
import {setProduct} from '../../ducks/reducer'

 class Wheels extends Component {
  constructor(){
    super();
    this.state = {
      wheels: [],
      searchText: ''
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
    { this.props.show === true
      ?
    axios.post('/session/cart', {name: name, price: price, img: img, description: description, id: id}).then(cart => {
      console.log('added to cart', cart)
    })
    : alert('please log in to add to cart')
    } 
  }

  changePage = (obj, id, type) => {
    this.props.setProduct(obj)
    this.props.history.push(`/products/${type}/item/${id}`)
  }

  searchItems = (item) => {
    axios.get(`/api/searchWheels/${item}`).then(res => {
      this.setState({wheels: res.data})
    })
  }

  handleSearch = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
}

  render() {
    const wheels = this.state.wheels.map(wheel => {
      return <div className='prod' onClick={() => this.changePage({name: wheel.name, price: wheel.price, img: wheel.img, description: wheel.description,  type: wheel.type, id: wheel.id}, wheel.id, wheel.type)}>
        <h3 >{wheel.name}</h3>
        <img alt='picture of wheel' className='prodImg' src={wheel.img} />
        <p>${wheel.price}</p>
        {/* <p>{wheel.description}</p> */}
        {/* <button onClick={() => this.addToCart(wheel.name, wheel.price, wheel.img, wheel.description, wheel.id)}>Add to Cart</button> */}
        {/* <button className='titleHov' onClick={() => this.changePage({name: wheel.name, price: wheel.price, img: wheel.img, description: wheel.description,  type: wheel.type}, wheel.id)}>Details</button> */}
      </div>
    })
    return (
      <div className='hundred'>
        <h1 className='titlee'>Wheels</h1>
        <input name='searchText' onChange={(e) => this.handleSearch(e)}/>
        <button onClick={() => this.searchItems(this.state.searchText)}>Search</button>
        <div className='felxme'>
        {wheels}
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

export default connect(mapStateToProps, {setProduct})(Wheels)