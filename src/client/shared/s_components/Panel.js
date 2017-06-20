import React, {PropTypes} from 'react';
import LearnButton from './LearnButton';
import './Panel.less';

const Panel = (props) => {
    return (
      <div className="panel">
        <div className="panel-heading">
          <h3 className="panel-title">
            <span>{props.title}</span>
            <LearnButton/>

          </h3>
          <div className="panel-control">
            <div className="update-date-indicator"></div>
            <div className="dropdown hourly-container">
              <a className="dropdown-toggle" data-toggle="dropdown" href="#" aria-expanded="true">
                    <span>
                        <i className="date-icon fa fa-lg fa-clock-o"></i>
                        <span id="date-interval">Daily</span>
                        <i className="fa fa-caret-down"></i>
                    </span>
              </a>

              <ul className="head-list dropdown-menu with-arrow">
                <li className="hourly-list-item"><a href="#">Daily</a></li>
                <li className="hourly-list-item"><a href="#">Hourly</a></li>
              </ul>
            </div>
            <div className="date-container">
              <a id="date-range-picker" className="date-selector dropdown-toggle" href="#" aria-expanded="true">
                <span className="date-selected">
                    <i className="date-icon fa fa-lg fa-calendar"></i>
                    <span className="date-name">Date Selected</span>
                    <i className="fa fa-caret-down"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="panel-body">
          {props.children}
        </div>
      </div>
    );
};

Panel.propTypes = {
    title  : PropTypes.string.isRequired,
    children : PropTypes.array
};

export default Panel;
