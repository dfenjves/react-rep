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
            <Col m={6} s={12}>
              <Representative first_name={rep.first_name} last_name={rep.last_name} office={rep.office} bioguide_id={rep.bioguide_id}/>
            </Col>
          )
        }
        </Row>
      </div>
  )
  }
}

module.exports = RepresentativesContainer
