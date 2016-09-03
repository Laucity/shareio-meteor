var React = require('react');
var ReactDOM = require('react-dom');

App = {}
App.color = require('./lib/color');

var LoginView = require('./components/login/index.jsx');
var MainView = require('./components/main/index.jsx')

var AppView = React.createClass({
  getInitialState: function() {
    return {
      loggedIn: $('#fbid').text() !== ""
    }
  },

  render: function() {
    var View = this.state.loggedIn ? MainView : LoginView
    return (
      <View />
    )
  }
});

ReactDOM.render(
  <AppView />,
  document.getElementById('content')
);