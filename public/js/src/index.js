var React = require('react');
var ReactDOM = require('react-dom');

Color = require('./lib/color');

var LoginView = require('./components/login');

ReactDOM.render(
  <LoginView />,
  document.getElementById('content')
);