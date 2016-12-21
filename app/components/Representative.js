var React = require('react')
var ReactDOM = require('react-dom')
var Materialize = require('react-materialize');
var Modal = Materialize.Modal;
var Button = Materialize.Button;
var Card = Materialize.Card;

class Representative extends React.Component {

  createImageLink(){
      return `https://theunitedstates.io/images/congress/225x275/${this.props.rep.bioguide_id}.jpg`
  }

  render(){

    return(
      <div>
          <Modal
          header={`${this.props.rep.first_name} ${this.props.rep.last_name}`}
          trigger={
            <div>
            <Card className='blue-grey darken-1' textClassName='white-text' title={this.props.rep.chamber}>
              <img src={this.createImageLink()} width="80%"/>
              <p>{this.props.rep.first_name} {this.props.rep.last_name} ({this.props.rep.party})</p>
            </Card>
            </div>
          }>
          <p>{this.props.rep.office}</p>
          <p>Washington, DC 20002</p>
          </Modal>
      </div>
    )
  }
}

module.exports = Representative;
