var React = require('react')

module.exports = React.createClass({
  componentDidMount: function() {
    $(function() {
      Materialize.updateTextFields();
    })
  },

  getInitialState: function() {
    return {
      searchString: ""
    };
  },

  updateSearchString: function(event) {
    this.setState({ searchString: event.target.value });
  },

  render: function() {
    return (
      <div className="white-text">
        <div className="Hero"></div>

        <div className="row margin-top-medium">
          <div className="col s12 center">
            <h3>Rent Anything</h3>
            <h5>A local community to share & rent everyday items.</h5>
          </div>
        </div>

        <div className="row margin-top-medium">
          <div className="col s8 offset-s2 center input-field hero-search-div ">
            <input className="hero-search-box" type="text" id="search" value={this.state.searchString} onChange={this.updateSearchString} />
            <a className="waves-effect waves-light btn hero-search-submit green darken-2">Search</a>
          </div>
        </div>

      </div>
    )
  }
});