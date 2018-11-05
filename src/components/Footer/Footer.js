import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './Footer.css'

class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        {
            this.props.show === true &&
            this.props.user.user.admin === true
            ?
            <div >
                Admin: {this.props.user.user.profile_name} <br />
                <Link to='/admin/add'><button>Add Product</button></Link>
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

const mapStateToProps = (state) => {
    return {
        user: state.user,
        show: state.show
    }
}

export default connect(mapStateToProps)(Footer);