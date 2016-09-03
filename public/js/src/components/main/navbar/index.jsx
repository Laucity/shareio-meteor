var React = require('react')

module.exports = React.createClass({
  render: function() {
    return(
      <nav className="green">
        <div className="nav-wrapper container">
          <div className="row">

            <div className="col s3">
              <a href="#" className="brand-logo">KwikShare</a>
            </div>

            <div className="col s9">
              <div className="nav-profile right">
                
                <ul id="nav-mobile" className="hide-on-med-and-down">
                  <li className={this.props.page === "Home" ? "active" : ""}>
                    <a>Home</a>
                  </li>
                  <li>
                    <a>Feed</a>
                  </li>
                  <li>
                    <a>History</a>
                  </li>
                  <li>
                    <a>My Shit</a>
                  </li>
                  <li>
                    <a>
                      <div className="chip no-background-color white-text center-div">
                        <img src="images/profile-circle.png" alt="Contact Person"></img>
                        {this.props.name}
                      </div>
                    </a>
                  </li>
                </ul>              

              </div>
            </div>

          </div>
        </div>
      </nav>
    )
  }
});