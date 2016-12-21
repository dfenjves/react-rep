var React = require('react')
var ReactDOM = require('react-dom')
var Representative = require('../components/representative')


class RepresentativesContainer extends React.Component {
  render(){
    return(
      <div>
      {
        this.props.representatives.map((rep) =>
          <Representative first_name={rep.first_name} last_name={rep.last_name} office={rep.office} bioguide_id={rep.bioguide_id}/>
        )
      }
      </div>
  )
  }
}

module.exports = RepresentativesContainer
