import React from 'react'
//var React = require('react')
import ReactDOM from 'react-dom'
var Materialize = require('react-materialize');
var Navbar = Materialize.Navbar;

class Nav extends React.Component{
  render(){
    return(
      <div>
      <Navbar brand={this.props.site_name} right>
      </Navbar>
      </div>
    )
  }
}

module.exports = Nav;
