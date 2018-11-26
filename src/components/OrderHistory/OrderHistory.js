import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {updateShow, updateUser} from '../../ducks/reducer';
import { withAlert } from 'react-alert'
import './OrderHistory.css';

class OrderHistory extends Component {
    constructor(){
        super();
        this.state = {
            history: [],
            pic: []
        }
    }

    componentDidMount(){
        if(this.props.show){
        axios.get(`/api/history/${this.props.user.user.id}`).then(res => {
            this.setState({
                history: res.data
            })
        })
    }
    }

    logout = () => {
        this.props.updateShow(false)
        axios.post('/api/logout').then(() => {
            this.props.updateUser(null)
            this.props.alert.show('Logged Out');
            this.props.history.push('/')
        })
    }


    render() {
    return (
        <div className='order'>
            {this.state.history.length !== 0 && this.props.show === true
            ? <div className='prof'>
                <h1>{this.props.user.user.profile_name}</h1>
                <img src={this.props.user.user.picture} className='profPic'/> <br />
                <button onClick={this.logout}>Log Out</button>
                <h3>Order History</h3>
                <hr/>
            {this.state.history.map(order => {
                return <div>
                    <h4>Order ID:</h4><p>{order.order_id}</p>
                    <p>{order.shipping_address}</p>
                    <img src={order.img} className='lol' />
                    <hr/>
                    </div>               
                }


            )}
            </div>
            :
            <div>
                Please Login to view your order history
            </div>
        }
    </div>
    )}
}

const mapStateToProps = (state) => {
    return {
        user : state.user,
        show : state.show
    }
}

export default withAlert(connect(mapStateToProps, {updateShow, updateUser})(OrderHistory));