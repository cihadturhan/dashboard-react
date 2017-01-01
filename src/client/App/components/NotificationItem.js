import React, {PropTypes} from 'react';

const NotificationItem = (props) => {
    return (
      <li>
        <a href={props.link} className="media">
          <div className="media-left">
                <span className="my-app-icon">
                    <img src={props.icon} className="brand-icon-sm"/>
                </span>
          </div>
          <div className="media-body">
            <div>{props.message}</div>
            <small className="text-muted">{props.date}</small>
          </div>
        </a>
      </li>
    );
};

NotificationItem.propTypes = {
    message  : PropTypes.string.isRequired,
    icon  : PropTypes.string.isRequired,
    link  : PropTypes.string.isRequired,
    date: PropTypes.object.isRequired
};

export default NotificationItem;
