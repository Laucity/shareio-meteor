var React = require('react');
var ReactDOM = require('react-dom');

Color = require('./lib/color');

var Login = require('./components/login');

ReactDOM.render(
  <Login />,
  document.getElementById('content')
);