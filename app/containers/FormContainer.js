var React = require('react')
var ReactDOM = require('react-dom')
var Form = require('../components/Form.js')

class FormContainer extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.getRepresentatives(this.state.zipCode)
  }

  handleChange(e) {
    this.setState({zipCode:e.target.value});
  }

  render() {
    return (
      <div>
        <Form handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
      </div>
        /* {
          this.state.representatives.map((rep) =>
            <Representative first_name={rep.first_name} last_name={rep.last_name} office={rep.office} />
          )
        } */
    )
  }
};

module.exports = FormContainer;
