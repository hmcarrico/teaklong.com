import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import './AddProduct.css'

class AddProduct extends Component {
    constructor(){
        super();
        this.state = {
            type: '',
            name: '',
            price: '',
            image: '',
            description: ''
        }
    }

    handleChangeSelect = (e) => {
        this.setState({
            type: e.target.value
        });
    }

    handleChangeInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addListing = (type, name, price, image, description) => {
        axios.post('/api/add', {type, name, price, image, description}).then(res => {
            alert('Item added, visit the product page to view it')
        })
    }

  render() {
    return (
      <div>
        {
        this.props.show === true &&
        this.props.user.user.admin === true
            ?
            <div className='full'>
            <p className='addTitle'>Add A Product</p> <br />
            <div className='addList'>
            <p>Type: <select onChange={(e) => this.handleChangeSelect(e)}>
                <option className='option' disabled selected>--Select--</option>
                <option className='option' value="complete">Complete</option>
                <option className='option' value="deck">Deck</option>
                <option className='option' value="wheel">Wheel</option>
            </select></p> <br />
            <p>Name: <input name='name' onChange={(e) => this.handleChangeInput(e)}/></p> <br />
            <p>Price: <input name='price' onChange={(e) => this.handleChangeInput(e)}/></p> <br />
            <p>Image: <input name='image' onChange={(e) => this.handleChangeInput(e)}/></p> <br />
            <p>Description: <input name='description' onChange={(e) => this.handleChangeInput(e)}/></p>
            <button onClick={() => this.addListing(this.state.type, this.state.name, this.state.price, this.state.image, this.state.description)}>Add Product</button>
            </div>
            </div>
            :
            <div>
                404 ERROR: PAGE DOES NOT EXISTS
            </div>
          }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        show: state.show,
        user: state.user
    }
}

export default connect(mapStateToProps)(AddProduct);