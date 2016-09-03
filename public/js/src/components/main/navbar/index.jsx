var React = require('react')

module.exports = React.createClass({


  render: function() {
    return(
      <nav>
        <div className="nav-wrapper">
          <div className="row">

            <div className="col s3">
              <a href="#" className="brand-logo green-text">KwikShare</a>
            </div>

            <div className="col s9 no-padding-right">
              <div className="nav-profile right">
                
                <ul id="nav-mobile" className="hide-on-med-and-down">
                  <li className={this.props.page === "Home" ? "active" : ""}>
                    <a onClick={this.props.navigationHandler}>Home</a>
                  </li>
                  <li className={this.props.page === "Feed" ? "active" : ""}>
                    <a onClick={this.props.navigationHandler}>Feed</a>
                  </li>
                  <li>
                    <a onClick={this.props.navigationHandler}>History</a>
                  </li>
                  <li>
                    <a onClick={this.props.navigationHandler}>My Shit</a>
                  </li>
                  <li>
                    <a className='no-padding-right'>
                      <div className="chip no-background-color center-div">
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