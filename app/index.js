import React from 'react'
//var React = require('react')
import ReactDOM from 'react-dom'
import FormContainer from './containers/FormContainer'
import RepresentativesContainer from './containers/RepresentativesContainer'
import Nav from './components/Nav'
var Materialize = require('react-materialize');
var Navbar = Materialize.Navbar;

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      representatives: []
    }
    this.getRepresentatives = this.getRepresentatives.bind(this)
  }

  getRepresentatives(zipCode){
    $.get(`https://congress.api.sunlightfoundation.com/legislators/locate?zip=${zipCode}`, function(data){
      debugger;
      this.setState({
        representatives:data.results,
      });
    }.bind(this));
  }

  render(){
    return(
      <div>
        <Nav site_name="RepFinder" />
        <div className="container">
            <FormContainer getRepresentatives={this.getRepresentatives}/>
            <RepresentativesContainer representatives={this.state.representatives} />
        </div>
      </div>
    )
  }

}


ReactDOM.render(<App />, document.getElementById('app'));
