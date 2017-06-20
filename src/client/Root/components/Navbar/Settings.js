import React, {PropTypes} from 'react';

const Settings = (props) => {
    return (
      <li id="dropdown-user" className="dropdown">
        <a href="#" data-toggle="dropdown" className="dropdown-toggle text-right white-text">
          <i className="fa fa-gear fa-fw fa-lg"></i> <span className="dropdown-toggle-text"></span>
        </a>
        <div className="dropdown-menu dropdown-menu-md dropdown-menu-right with-arrow panel-default">

          <ul className="head-list">
            <li>
              <a href="/settings/" className="main-nav-links">
                <i className="fa fa-gear fa-fw fa-lg"></i> Settings
              </a>
            </li>
            <li>
              <a href="/integration/" className="main-nav-links">
                <i className="fa fa-university fa-fw fa-lg"></i> Data Integration
              </a>
            </li>
            <li>
              <a href="/customalerts/" className="main-nav-links">
                <i className="fa fa-bell-o fa-fw fa-lg"></i> Custom Alerts
              </a>
            </li>
            <li className="list-divider" style={{margin: 0}}></li>
          </ul>

          <div className="pad-all text-center">
            <a href="#" className="btn btn-primary" id="logout">
              <i className="fa fa-sign-out fa-fw"></i> Logout
            </a>
          </div>

        </div>
      </li>
    );
};

Settings.propTypes = {
    //  : PropTypes.string.isRequired
};

export default Settings;
