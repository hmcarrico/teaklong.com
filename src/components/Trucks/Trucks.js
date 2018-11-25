import React, { Component } from 'react';
import {connect} from 'react-redux';
import {setProduct} from '../../ducks/reducer'
import {Link} from 'react-router-dom';
import myHOC from '../HOC/myHOC'
import './Trucks.css'

class Trucks extends Component {

changePage = (obj, id, type) => {
    this.props.setProduct(obj)
    this.props.history.push(`/products/${type}/item/${id}`)
}

  render() {
    const decks = this.props.data.map(truck => {
      return <div className='prod' onClick={() => this.changePage({name: truck.name, price: truck.price, img: truck.img, description: truck.description,  type: truck.type, id: truck.id},truck.id, truck.type)}>
        <h3 className='titleHov' >{truck.name}</h3>
        <img alt='picture of skateboard deck' className='prodImg' src={truck.img} />
        <p>${truck.price}</p>
      </div>
    })
    return (
      <div className='hundred'>
        <h1 className='titlee'>Trucks</h1>
        <Link to='/search'><button className='coolButton'>Search</button></Link>
        <div className='felxme'>
        {decks}
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

export default myHOC(connect(mapStateToProps, {setProduct})(Trucks), '/api/trucks')
