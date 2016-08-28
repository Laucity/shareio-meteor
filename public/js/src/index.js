var React = require('react');
var ReactDOM = require('react-dom');

Color = require('./lib/color');

var LoginView = require('./components/login.jsx');

ReactDOM.render(
  <LoginView />,
  document.getElementById('content')
);