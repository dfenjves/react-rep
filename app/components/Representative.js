var React = require('react')
var ReactDOM = require('react-dom')
var Materialize = require('react-materialize');
var Modal = Materialize.Modal;
var Button = Materialize.Button;
var Card = Materialize.Card;

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
            <Card className='blue-grey darken-1' textClassName='white-text' title='Card title'>
              <img src={this.createImageLink()} />
              <h4> Name:{this.props.first_name} {this.props.last_name}</h4>
            </Card>
            </div>
          }>
          <p>Address:{this.props.office}, Washington, DC 20002</p>
          </Modal>
      </div>
    )
  }
}

module.exports = Representative;
