import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
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


  render() {
    return (
      <div className='order'>
          {this.state.history.length !== 0 || this.props.show === true
          ? <div>
            <h1>{this.props.user.user.profile_name}</h1>
            <img src={this.props.user.user.picture} />
            <h3>Order History</h3>
            {this.state.history.map((order, i) => {
                return <div>
                    <h4>Order Number:</h4><p>{order.order_id}</p>
                    <p>{order.shipping_address}</p>
                    {/* <img src={this.state.pic.picture[i+1]} className='lol'/> */}
                    </div>               
               }


            )}
            {console.log(this.state.history)}
            </div>
            :
            <div>
                Please Login to view your order history
            </div>
          }
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

export default connect(mapStateToProps)(OrderHistory);