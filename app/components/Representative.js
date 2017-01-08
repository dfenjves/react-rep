var React = require('react')
var ReactDOM = require('react-dom')
var Materialize = require('react-materialize');
var Modal = Materialize.Modal;
var Button = Materialize.Button;
var Card = Materialize.Card;
var RepresentativeCard = require('../components/Representative-Card.js')

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
                  <img src={this.createImageLink()} width="80%" />
            </Card>
            </div>
          }>
            <RepresentativeCard rep={this.props.rep} />
          </Modal>
      </div>
    )
  }
}

module.exports = Representative;
