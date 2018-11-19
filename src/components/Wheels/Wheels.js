import React, { Component } from 'react'
import './Wheels.css';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import myHOC from '../HOC/myHOC'
import {setProduct} from '../../ducks/reducer'

 class Wheels extends Component {
  constructor(){
    super();
    this.state = {
      searchText: ''
    }
  }

  changePage = (obj, id, type) => {
    this.props.setProduct(obj)
    this.props.history.push(`/products/${type}/item/${id}`)
  }

  render() {
    const wheels = this.props.data.map(wheel => {
      return <div className='prod' onClick={() => this.changePage({name: wheel.name, price: wheel.price, img: wheel.img, description: wheel.description,  type: wheel.type, id: wheel.id}, wheel.id, wheel.type)}>
        <h3 >{wheel.name}</h3>
        <img alt='picture of wheel' className='prodImg' src={wheel.img} />
        <p>${wheel.price}</p>
      </div>
    })
    return (
      <div className='hundred'>
        <h1 className='titlee'>Wheels</h1>
        <Link to='/search'><button className='coolButton'>Search</button></Link>
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

export default myHOC(connect(mapStateToProps, {setProduct})(Wheels), '/api/wheels')