import React, { Component } from 'react';
import {connect} from 'react-redux';
import {setProduct} from '../../ducks/reducer'
import {Link} from 'react-router-dom';
import myHOC from '../HOC/myHOC'
import './AllProducts.css';

class Completes extends Component {
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
    return (
      <div>
      <div className='hundred'>
        <h1 className='titlee'>All Products</h1>
        <div className='felxcol'>
        <div>
        <Link to='/search'><button className='coolButton'>Search</button></Link>
        </div>
        <div  className='felxme'>
        {
          this.props.data !== null
          ?
          this.props.data.map(board => {
            return <div className='prod' onClick={() => this.changePage({name: board.name, price: board.price, img: board.img, description: board.description, type: board.type, id: board.id}, board.id, board.type)}>
              <h3>{board.name}</h3>
              <img alt='picture of a longboard' className='prodImg' src={board.img} />
              <p>${board.price}</p>
            </div>
          })
          : <div></div>
        }
        </div>
        </div>
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

export default myHOC(connect(mapStateToProps, {setProduct})(Completes), '/api/all')