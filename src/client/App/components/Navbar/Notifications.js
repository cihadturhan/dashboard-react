import React, {PropTypes} from 'react';

const Notifications = (props) => {
  return (
    <li className="dropdown" id="notifications">
      <div>
        <a href="#" data-toggle="dropdown" className="dropdown-toggle" aria-expanded="true">
          <i className="fa fa-bell fa-lg"></i>
          <span className="badge badge-header badge-danger" id="local-notification-count"></span>
        </a>

        <div className="dropdown-menu dropdown-menu-md dropdown-menu-right with-arrow panel-default"
             style={{height: '250px'}}>
          <div className="nano scrollable">
            <div className="nano-content" tabIndex="0">

              <ul className="head-list" id="notification-list">
              </ul>

            </div>
            <div className="nano-pane" style={{display: 'block'}}>
              <div className="nano-slider" style={{transform: 'translate(0px, 0px)', height: '170px'}}></div>
            </div>
          </div>

          <div className="pad-all bord-top">
            <a href="#" className="btn-link text-dark box-block">
              &nbsp;
            </a>
          </div>
        </div>
      </div>
    </li>
  );
};

Notifications.propTypes = {
  //  : PropTypes.string.isRequired
};

export default Notifications;
