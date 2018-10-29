import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Nav1 extends Component {
  render() {
    return (
      <div>
        <Link to='/'><button>Home</button></Link>
        <Link to='/products'><button>Products</button></Link>
        <Link to='/cart'><button>Cart</button></Link>
      </div>
    )
  }
}

export default Nav1;