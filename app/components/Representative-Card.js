var React = require('react')
var ReactDOM = require('react-dom')
var Materialize = require('react-materialize');

class RepresentativeCard extends React.Component {

    renderChamber(chamber) {

            if(chamber === "house") {
                return "United States House of Representatives"
            } else if(chamber === "senate"){
                return "United States Senate"
            }
    }
    renderZipCode(chamber) {

            if(chamber === "house") {
                return "20515"
            } else if(chamber === "senate"){
                return "20510"
            }
    }

  render(){

    return(
      <div id="section-to-print">
              <p>The Honorable {this.props.rep.first_name} {this.props.rep.last_name} <br />
            {this.props.rep.office} <br />
            {this.renderChamber(this.props.rep.chamber)} <br />
Washington, D.C {this.renderZipCode(this.props.rep.chamber)}
            
             </p>
      </div>
    )
  }
}

module.exports = RepresentativeCard;
