var React = require('react');

var Navbar = require('./navbar/index.jsx');

module.exports = React.createClass({
  getInitialState() {
    return {
       page: "Home"   
    };
  },

  render: function() {
    return(
      <Navbar name={"Barack"} page={this.state.page} />
    )
  }
})