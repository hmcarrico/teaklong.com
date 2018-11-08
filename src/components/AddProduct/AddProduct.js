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
            description: '',
            gallery: []
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
    uploadWidget = () => {
        window.cloudinary.openUploadWidget({
            cloud_name: 'dtjiplvkp',
            upload_preset: 'amedwnem',
            tags:['teaklong'],
            theme: 'minimal',
            autoMinimize: true,
            multiple: false,
            thumbnailTransformation: [{ width: 5, height: 100, crop: 'fit' }],
            styles: {
                width: "100%"
            }
            },
            (error, result) => {
                        this.setState({image: result.info.url})
            });
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
            Type: <p><select onChange={(e) => this.handleChangeSelect(e)}>
                <option className='option' disabled selected>--Select--</option>
                <option className='option' value="complete">Complete</option>
                <option className='option' value="deck">Deck</option>
                <option className='option' value="wheel">Wheel</option>
            </select></p> <br />
            Name: <p><input name='name' onChange={(e) => this.handleChangeInput(e)}/></p> <br />
            Price: <p><input name='price' onChange={(e) => this.handleChangeInput(e)}/></p> <br />
            Description: <p><textarea rows="3" name='description' onChange={(e) => this.handleChangeInput(e)}/></p><br />
            <button onClick={() => this.uploadWidget()} className="upload-button">Upload Image</button><br /><br />
            <button onClick={() => this.addListing(this.state.type, this.state.name, this.state.price, this.state.image, this.state.description)}>Add Product</button><br /><br />
            <img src={this.state.image} className={this.state.image === '' ? '' : 'addImage'}/>
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