var React = require('react')

module.exports = React.createClass({
  render: function() {
    return(
      <nav className="green">
        <div className="nav-wrapper container">
          <a href="#" className="brand-logo">Baro</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <div className="chip no-background-color white-text">
                <img src="images/profile-circle.png" alt="Contact Person"></img>
                Barack Obama
              </div>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
});