var React = require('react')

module.exports = React.createClass({
  render: function() {
    return(
      <div className="card">
        <div className="card-image">
          <img src="images/header-image.jpg" />
          <span className="card-price">$95</span>
        </div>
        <div className="card-content">
          <span className="item-card-title">Best House</span>
        </div>
      </div>
    )
  }
})