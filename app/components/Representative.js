var React = require('react')
var ReactDOM = require('react-dom')
var Materialize = require('react-materialize');
var Modal = Materialize.Modal;
var Button = Materialize.Button;

class Representative extends React.Component {

  createImageLink(){
      return `https://theunitedstates.io/images/congress/225x275/${this.props.bioguide_id}.jpg`
  }

  render(){

    return(
      <div>
          <Modal
          header={`${this.props.first_name} ${this.props.last_name}`}
          trigger={
            <div>
              <img src={this.createImageLink()} />
              <h2> Name:{this.props.first_name} {this.props.last_name}</h2>
            </div>
          }>
          <p>Address:{this.props.office}, Washington, DC 20002</p>
          </Modal>
      </div>
    )
  }
}

module.exports = Representative;
