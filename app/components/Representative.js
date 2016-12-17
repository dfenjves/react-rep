var React = require('react')
var ReactDOM = require('react-dom')

class Representative extends React.Component {

  render(){
    return(
      <div>
        <h2>Name:{this.props.first_name} {this.props.last_name}</h2>
        <h2>Address:{this.props.office}, Washington, DC</h2>
      </div>
    )
  }
}

module.exports = Representative;
