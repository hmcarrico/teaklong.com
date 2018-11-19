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
            <div>
                Admin: {this.props.user.user.profile_name} <br />
                <Link to='/admin/add'><button className='shop4'>Add Product</button></Link>
                <Link to='/contact'><button className='shop3'>Contact</button></Link>
                <Link to='/boarding-weather-conditions'><button className='shop2'>Weather Conditions for Boarding</button></Link> <br />
                <p className='created'>Created by Hunter Carrico☯</p>
            </div>
            :
            <div>
                <Link to='/contact'><div className='shop4'>Contact</div></Link> <br />
                <Link to='/boarding-weather-conditions'><div className='shop2'>Weather Conditions for Boarding</div></Link> <br />
                <p className='created'>Created by Hunter Carrico☯</p>                
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