var React = require('react')
var ReactDOM = require('react-dom')


class Form extends React.Component {
  render() {
    return(
      <div>
        <h1>Zip:</h1>
        <form onSubmit={this.props.handleSubmit}>
          <input type='text' onChange={this.props.handleChange}></input>
          <button type="submit">Submit</button>
        </form>

      </div>
    )
  }
}

module.exports = Form;
