var React = require('react')
var ReactDOM = require('react-dom')

class Representative extends React.Component {
  constructor(){
    super();
    this.showAddress = this.showAddress.bind(this)
  }

  showAddress(){
      console.log(`you clicked ${this.props.first_name}`)
  }

  render(){
    return(
      <div onClick={this.showAddress}>
          <h2 onClick={this.showAddress}>Name:{this.props.first_name} {this.props.last_name}</h2>
          <h2>Address:{this.props.office}, Washington, DC</h2>
      </div>
    )
  }
}

module.exports = Representative;
