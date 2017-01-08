import React from 'react'
import Nav from './Nav'
var Materialize = require('react-materialize');
var Navbar = Materialize.Navbar;

class Layout extends React.Component {
  render(){
    return(
      <div>
        <Nav site_name="RepFinder" />
        {this.props.children}
      </div>
    );
  }

}

export default Layout;
