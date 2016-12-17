var React = require('react')
var ReactDOM = require('react-dom')
var Materialize = require('react-materialize');
var Button = Materialize.Button;

class Form extends React.Component {
  render() {
    return(
      <div>
        <h1>Zip:</h1>
        <form onSubmit={this.props.handleSubmit}>
          <input type='text' onChange={this.props.handleChange}></input>
          <Button type="submit">Submit</Button>
        </form>

      </div>
    )
  }
}

module.exports = Form;
