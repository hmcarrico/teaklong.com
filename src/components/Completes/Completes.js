import React, { Component } from 'react';
import {connect} from 'react-redux';
import {setProduct} from '../../ducks/reducer'
import {withRouter} from 'react-router-dom'
import {Link} from 'react-router-dom';
import myHOC from '../HOC/myHOC';
import './Completes.css'

class Completes extends Component {
    constructor(){
        super();
        this.state = {
          completes: [],
          searchText: ''
        }
    }

    changePage = (obj, id, type) => {
      this.props.setProduct(obj)
      this.props.history.push(`/products/${type}/item/${id}`)
    }

  render() {
    let completes = this.props.data.map(board => {
      return <div className='prod' onClick={() => this.changePage({name: board.name, price: board.price, img: board.img, description: board.description, type: board.type, id: board.id}, board.id, board.type )}>
        <h3>{board.name}</h3>
        <img alt='picture of a longboard' className='prodImg' src={board.img} />
        <p>${board.price}</p>
      </div>
    })
    return (
      <div className='hundred'>
        <h1 className='titlee'>Completes</h1>
        <Link to='/search'><button className='coolButton'>Search</button></Link>
        <div className='felxme'>
        {completes}
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

export default myHOC(withRouter(connect(mapStateToProps, {setProduct})(Completes)), '/api/completes')