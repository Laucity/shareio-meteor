var React = require('react')

var ItemCard = require('./itemCard/index.jsx');

module.exports = React.createClass({
  render: function() {

    var itemCards = []
    for (var i = 0; i < 10; i++) {
      itemCards.push(
        <div className="col s12 m6 l4 center">
            <ItemCard />
        </div>
      )
    }

    return (
      <div className="small-container">
        <div className="row">
          {itemCards}          
        </div>
      </div>
    )
  }
})