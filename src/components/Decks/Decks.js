import React, { Component } from 'react';
import {connect} from 'react-redux';
import {setProduct} from '../../ducks/reducer'
import {Link} from 'react-router-dom';
import myHOC from '../HOC/myHOC'
import './Decks.css'

class Decks extends Component {
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
    const decks = this.props.data.map(deck => {
      return <div className='prod' onClick={() => this.changePage({name: deck.name, price: deck.price, img: deck.img, description: deck.description,  type: deck.type, id: deck.id},deck.id, deck.type)}>
        <h3 className='titleHov' >{deck.name}</h3>
        <img alt='picture of skateboard deck' className='prodImg' src={deck.img} />
        <p>${deck.price}</p>
      </div>
    })
    return (
      <div className='hundred'>
        <h1 className='titlee'>Decks</h1>
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

export default myHOC(connect(mapStateToProps, {setProduct})(Decks), '/api/decks')
