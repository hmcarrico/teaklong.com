import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import routes from '../../routes/routes2';

class Products extends Component {
  render() {
    return (
      <div>
        <Link to='/products/completes' ><button>Completes</button></Link>
        <Link to='/products/decks' ><button>Decks</button></Link>
        <Link to='/products/wheels' ><button>Wheels</button></Link>
        {routes}
      </div>
    )
  }
}

export default Products;