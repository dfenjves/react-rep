var React = require('react')
var ReactDOM = require('react-dom')
var FormContainer = require('./containers/FormContainer')
var RepresentativesContainer = require('./containers/RepresentativesContainer')
var Materialize = require('react-materialize');


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
      this.setState({
        representatives:data.results,
      });
    }.bind(this));
  }

  render(){
    return(
      <div>
        <FormContainer getRepresentatives={this.getRepresentatives}/>
        <RepresentativesContainer representatives={this.state.representatives} />
      </div>
    )
  }

}


ReactDOM.render(<App />, document.getElementById('app'));
