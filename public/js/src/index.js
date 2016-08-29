var React = require('react');
var ReactDOM = require('react-dom');

App = {}
App.color = require('./lib/color');

var LoginView = require('./components/login/index.jsx');
var MainView = require('./components/main/index.jsx')

var AppView = React.createClass({
  render: function() {
    var View = $('#fbid').text() === "" ? LoginView : MainView
    return (
      <View />
    )
  }
});

ReactDOM.render(
  <AppView />,
  document.getElementById('content')
);