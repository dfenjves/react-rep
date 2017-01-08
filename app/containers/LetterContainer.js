import React from 'react'

class LetterContainer extends React.Component {
  componentWillLoad(){
    
  }

  render(){
    return(
      <h1> Your BioGuide ID is {this.props.params.bioguide_id} </h1>
    )
  }
}

export default LetterContainer;
