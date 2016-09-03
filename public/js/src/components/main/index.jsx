var React = require('react');

var Navbar = require('./navbar/index.jsx');
var HomeView = require('./home/index.jsx');
var FeedView = require('./feed/index.jsx');

module.exports = React.createClass({
  
  handleNavigation: function(event) {
    this.setState({ page: event.target.text })
  },

  currentView: function() {
    if (this.state.page === "Home") {
      return HomeView;
    } else if (this.state.page === "Feed") {
      return FeedView;
    }
  },

  getInitialState: function() {
    return {
       page: "Home"   
    };
  },

  render: function() {
    var MainView = this.currentView();

    return(
      <div>
        <header>
          <Navbar name={"Barack"} page={this.state.page} navigationHandler={this.handleNavigation} />
        </header>
        <main>
          <MainView />
        </main>
      </div>
    )
  }
})