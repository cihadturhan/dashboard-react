import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import AppSearch from './AppSearch';
import Notifications from './Notifications';
import Settings from './Settings';

import './index.less';

class Navbar extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  render(props) {
    return (
      <header id="navbar">
        <div id="navbar-container" className="boxed">


          <div className="navbar-header">
            <a href="" className="navbar-brand main-nav-links">
              <img src="/img/header/ma-logo-white.png" alt="Mobile Action" className="nav-logo"/>
            </a>
          </div>

          <div className="navbar-content clearfix">

            <ul className="nav navbar-top-links pull-left" id="my-apps">
              <li id="app-select-switch" className="app-select dropdown">
                <a className="my-app-info dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
                  <span className="my-app-icon"><img className="brand-icon-sm"/></span>

                  <div className="my-app-name">
                    <div className="app-name">{this.props.name}</div>
                    <small className="text-light app-publisher">{this.props.publisher} &nbsp;</small>
                  </div>

                  <div className="my-app-right-icons">
                    <small className="temporary-text has-tooltip" data-container="body"
                           title="You have a temporary app until you add a mobile app. Use plus button on the right to add this app or search and add another app."
                           data-placement="bottom" style={{display: 'none'}}>TEMPORARY APP
                    </small>
                    <i className="fa fa-plus fa-lg app-add fa-animating mar-lft-sm" data-app-id=""></i>

                    <span className="integrated fa fa-stack fa-md" title="Integrated app" style={{display: 'none'}}>
                        <i className="fa fa-certificate fa-stack-2x" style={{color: '#88c9f9'}}></i>
                    <i className="fa fa-check fa-stack-1x fa-inverse"></i>
                  </span>

                    <i className="my-app-device-icon fa fa-lg fa-apple"></i>
                    <i className="fa fa-lg fa-trash-o app-trash"></i>
                    <i className="fa fa-caret-down"></i>
                  </div>
                </a>
                <ul className="my-app-list dropdown-menu">
                </ul>

              </li>
            </ul>

            <ul className="nav navbar-top-links pull-left top-search">
              <li>
                <AppSearch/>
              </li>
            </ul>

            <ul className="nav navbar-top-links pull-right toggle-menu">

              <li id="dropdown-usage" className="dropdown">
                <div className="dropdown">
                  <a style={{background: 'transparent'}} href="https://www.mobileaction.co/#scheduledemo"
                     target="_blank">
                    <button className="dropdown-toggle text-bold btn btn-mint btn-rounded">
                      <i className="fa fa-clock-o"></i> Schedule a demo
                    </button>
                  </a>
                </div>
              </li>


              <li id="dropdown-setup-guide" className="dropdown">
                <a href="/setupguide/" className="dropdown-toggle text-right white-text main-nav-links">
                  <i className="fa fa-list-ol"></i> <span className="dropdown-toggle-text">Setup Guide</span>
                  <span className="badge badge-header badge-danger" id="setup-guide-badge"></span>
                </a>
              </li>

              <li id="dropdown-user" className="dropdown">
                <a href="#" data-toggle="dropdown" className="dropdown-toggle text-right white-text">
                  <i className="fa fa-question fa-fw fa-lg"></i> <span className="dropdown-toggle-text"></span>
                </a>
                <div className="dropdown-menu dropdown-menu-md dropdown-menu-right with-arrow panel-default">

                  <ul className="head-list">
                    <li>
                      <a id="intercom" href="#">
                        <i className="fa fa-comment fa-fw fa-lg"></i> Contact Support
                      </a>
                    </li>
                    <li>
                      <a href="http://help.mobileaction.co/category/5-getting-started" target="mobileaction">
                        <i className="fa fa-play fa-fw fa-lg"></i> Tutorial Videos
                      </a>
                    </li>
                    <li>
                      <a href="http://help.mobileaction.co/" target="mobileaction">
                        <i className="fa fa-book fa-fw fa-lg"></i> Resources
                      </a>
                    </li>
                    <li>
                      <a href="http://ideas.mobileaction.co/" target="mobileaction">
                        <i className="fa fa-lightbulb-o fa-fw fa-lg"></i> Submit Feature Idea
                      </a>
                    </li>
                    <li>
                      <a href="http://help.mobileaction.co/article/79-product-updates" target="mobileaction">
                        <i className="fa fa-calendar-check-o fa-fw fa-lg"></i> Product Updates
                      </a>
                    </li>
                  </ul>
                </div>
              </li>


              <Notifications/>


              <Settings/>

              <li className="tgl-menu-btn">
                <a className="mainnav-toggle-customized" href="#">
                  <i className="fa fa-navicon fa-lg"></i>
                </a>
              </li>

            </ul>
          </div>

        </div>
      </header>
    );
  }
}

Navbar.propTypes = {
  name: PropTypes.string.isRequired,
  publisher: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    state: state
  };
}

function mapDispatchToProps(dispatch) {
  let actions = {};
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
