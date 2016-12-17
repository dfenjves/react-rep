var React = require('react')
// import React from 'react';
// import { render } from 'react-dom';
var ReactDOM = require('react-dom')

// var FriendsContainer = React.createClass({
//   render: function(){
//     var name = 'Tyler McGinnis'
//     var friends = ['Ean Platter', 'Murphy Randall', 'Merrick Christensen']
//     return (
//       <div>
//         <h3> Name: {name} </h3>
//         <ShowList names={friends} />
//       </div>
//     )
//   }
// });
//
// var ShowList = React.createClass({
//   render: function(){
//     var listItems = this.props.names.map(function(friend){
//       return <li> {friend} </li>;
//     });
//     return (
//       <div>
//         <h3> Friends </h3>
//         <ul>
//           {listItems}
//         </ul>
//       </div>
//     )
//   }
// });

class FormComp extends React.Component {
  constructor() {
    super();
    this.state = {
      zipCode: '',
      representatives: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    $.get(`https://congress.api.sunlightfoundation.com/legislators/locate?zip=${this.state.zipCode}`, function(data){
      this.setState({
        representatives:data.results
      });
    }.bind(this));
  }

  handleChange(e) {
    this.setState({zipCode:e.target.value});
    console.log(this.state.zipCode);
  }

  render() {

    return (
      <div>
        <h1>Zip:</h1>
        <form onSubmit={this.handleSubmit}>
          <input type='text' onChange={this.handleChange}></input>
          <button type="submit">Submit</button>
        </form>
        {
          this.state.representatives.map((rep) =>
            <Representative first_name={rep.first_name} last_name={rep.last_name} office={rep.office} />
          )
        }

      </div>
    )
  }
};

class Representative extends React.Component {

  render(){
    return(
      <div>
        <h2>Name:{this.props.first_name} {this.props.last_name}</h2>
        <h2>Address:{this.props.office}, Washington, DC</h2>
      </div>
    )
  }
}


ReactDOM.render(<FormComp />, document.getElementById('app'));
