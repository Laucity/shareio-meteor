var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="medium-green-bg full-height">
        <div className="content v-center-align-absolute">
          <div className="logo row">
            <div className="col s12 center-align">
              S
            </div>
          </div>
          <div className="title row">
            <div className="col s12 center-align">
              share.io
            </div>
          </div>
          <div className="login row">
            <div className="col s12 center-align">
              <a className="waves-effect waves-light btn">
                <i className="material-icons left">cloud</i>
                Login with Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
});