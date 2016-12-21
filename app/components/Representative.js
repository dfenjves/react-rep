var React = require('react')
var ReactDOM = require('react-dom')
var Materialize = require('react-materialize');
var Modal = Materialize.Modal;
var Button = Materialize.Button;


class Representative extends React.Component {

  render(){
    return(
      <div>
          <Modal
          header={`${this.props.first_name} ${this.props.last_name}`}
          trigger={
            <h2> Name:{this.props.first_name} {this.props.last_name}</h2>
          }>
          <p>Address:{this.props.office}, Washington, DC 20002</p>
          </Modal>
      </div>
    )
  }
}

module.exports = Representative;
