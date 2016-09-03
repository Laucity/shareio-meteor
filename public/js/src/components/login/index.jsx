var React = require('react');

module.exports = React.createClass({
  componentWillMount: function() {
    $('html').addClass('full-screen');
    $('body').addClass('full-screen');
  },

  componentWillUnmount: function() {
    $('html').removeClass('full-screen');
    $('body').removeClass('full-screen');  
  },

  render: function() {
    return (
      <div className="green darken-2 full-height">
        <div className="content v-center-align-absolute">
          <div className="logo row margin-bottom-0">
            <div className="col s12 center-align white-text xxlarge-font bold-text">
              K
            </div>
          </div>
          <div className="title row">
            <div className="col s12 center-align white-text large-font">
              KwikShare
            </div>
          </div>
          <div className="login row medium-padding">
            <div className="col s12 center-align">
              <a className="waves-effect waves-light btn btn-large green">
                <i className="fa fa-facebook-official left"></i>
                Login with Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
});