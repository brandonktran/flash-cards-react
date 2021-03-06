import React from 'react';
import "bootstrap/js/src/collapse.js"

class Nav extends React.Component {


  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Flash Cards App</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <button className="btn mr-2" onClick={() => this.props.setView('view-cards')}>View</button>
            </li>
            <li className="nav-item">
              <button className="btn mr-2" onClick={() => this.props.setView('review-cards')}>Review</button>
            </li>
            <li className="nav-item">
              <button className="btn mr-2" onClick={() => this.props.setView('create-card')}>Create Card</button>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default Nav;
