import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import LearnButton from './LearnButton';
import './PageTitle.less';


class PageTitle extends React.Component {

  render() {
    let currentPage = this.props.currentPage;

    return (
      <div id="page-title">
        <h1 className="page-header app-report-header">
          <span>{currentPage && currentPage.title}</span>&nbsp;
          <LearnButton/>
        </h1>
        <ul className="left-actions list-unstyled">
          <div className="pull-left">
            {this.props.children}
          </div>
        </ul>

        <ul className="right-actions list-unstyled">

          <li className="dropdown" id="region">
            <a id="demo-lang-switch" className="lang-selector dropdown-toggle" href="#" data-toggle="dropdown"
               aria-expanded="false">
                    <span className="lang-selected">
                        <span className="flag-icon"></span>
                        <span className="lang-name"></span>
                        <i className="fa fa-caret-down"></i>
                    </span>
            </a>

            <ul className="head-list dropdown-menu dropdown-menu-right with-arrow" id="region-list">
            </ul>
          </li>

          <li className="dropdown" id="date-range">
            <a id="date-range-picker" className="date-selector dropdown-toggle" href="#" aria-expanded="true">
                    <span className="date-selected">
                        <i className="date-icon fa fa-lg fa-calendar"></i>
                        <span className="date-name">Date Selected</span>
                        <i className="fa fa-caret-down"></i>
                    </span>
            </a>
          </li>

          <li className="dropdown" id="device">
            <a id="device-switch" className="device-selector dropdown-toggle" href="#" data-toggle="dropdown"
               aria-expanded="false">
                    <span className="device-selected">
                        <i className="device-icon fa fa-lg fa-apple"></i>
                        <span className="device-name" id="selected-device-name">iPhone</span>
                        <i className="fa fa-caret-down"></i>
                    </span>
            </a>

            <ul className="head-list dropdown-menu dropdown-menu-right with-arrow">
              <li data-device="ipad">

                <a href="#">
                  <span className="device-name">iPad</span>
                </a>
              </li>
              <li data-device="iphone">

                <a href="#">
                  <span className="device-name">iPhone</span>
                </a>
              </li>
            </ul>
          </li>

        </ul>
      </div>
    );
  }
}

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.array,
  currentPage: PropTypes.object
};

function mapStateToProps(state, ownProps){
  return {
    currentPage: state.currentPage
  };
}

export default connect(mapStateToProps)(PageTitle);
