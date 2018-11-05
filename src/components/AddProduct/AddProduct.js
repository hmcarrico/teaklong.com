import React, { Component } from 'react';
import {connect} from 'react-redux';

class AddProduct extends Component {
    constructor(){
        super();
        this.state = {

        }
    }

  render() {
    return (
      <div>
        {
        this.props.show === true &&
        this.props.user.user.admin === true
            ?
            <div>
                You are an admin
            </div>
            :
            <div>
                You are not an admin
            </div>
          }
      </div>
    )
  }
}

const mapStateToProps = () => {
    return {
        show: state.show,
        user: state.user
    }
}

export default connect(mapStateToProps)(AddProduct);