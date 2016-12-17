var React = require('react')
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

var FormComp = React.createClass ({
  handleSubmit: function(e) {
    e.preventDefault();
    $.get(`https://congress.api.sunlightfoundation.com/legislators/locate?zip=${this.state.zipCode}`, function(data){
      debugger;
      console.log(data);
    })
  },
  handleChange: function(e) {
    this.setState({zipCode:e.target.value});
  },
  render: function() {

    return (
      <div>
        <h1>Zip:</h1>
        <form onSubmit={this.handleSubmit}>
          <input type='text' onChange={this.handleChange}></input>
          <button type="submit">Submit</button>
        </form>
      </div>

    )
  }

});

ReactDOM.render(<FormComp />, document.getElementById('app'));
