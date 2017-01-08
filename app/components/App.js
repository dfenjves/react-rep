import React from 'react'
import Helpers from '../utils/Helpers';
import FormContainer from '../containers/FormContainer'
import RepresentativesContainer from '../containers/RepresentativesContainer'
var Materialize = require('react-materialize');


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      representatives: []
    }
    this.setRepresentatives = this.setRepresentatives.bind(this)
  }

  setRepresentatives(zipCode){
    Helpers.getRepresentatives(zipCode)
        .end((error, response) => {
            if (!error && response) {
                this.setState({ representatives: response.body.results });
            } else {
                console.log(`Error fetching ${type}`, error);
            }
        }
    );
  }


  render(){
    return(
      <div>
        <div className="container">
            <FormContainer getRepresentatives={this.setRepresentatives}/>
            <RepresentativesContainer representatives={this.state.representatives} />
        </div>
      </div>
    )
  }
}

export default App;
