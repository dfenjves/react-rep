var React = require('react')
var ReactDOM = require('react-dom')
var Representative = require('../components/representative')
var Materialize = require('react-materialize');
var Row = Materialize.Row;
var Col = Materialize.Col;



class RepresentativesContainer extends React.Component {
  render(){
    return(
      <div>
        <Row>
        {
          this.props.representatives.map((rep) =>
            <Col m={3} s={12}>
              <Representative rep={rep}/>
            </Col>
          )
        }
        </Row>
      </div>
  )
  }
}

module.exports = RepresentativesContainer
