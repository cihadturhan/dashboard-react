import React, {PropTypes} from 'react';
import AppImage from 'components/AppImage.js';


const NavbarApp = (props) => {
    return (
      <li className="my-app" title="{{name}}" data-id="{{appId}}">
        <div className="top-myapp">
          <a className="my-app-info" href="#" data-app-id="{{appId}}">
            <span className="my-app-icon">
              <AppImage src={props.proxiedArtworkUrl60} size="md"/>
            </span>
          </a>

          <span className="my-app-name">{{name}}</span>

          <div className="my-app-actions">
            {props.isStoreAccountConnected ?
              <span className="fa fa-stack fa-md" title="Integrated app" style="font-size: 10px">
                    <i className="fa fa-certificate fa-stack-2x" style="color: #88c9f9"></i>
                    <i className="fa fa-check fa-stack-1x fa-inverse"></i>
                </span>
              :
              <span>
                {props.store == 'ios' ?
                  <i className="fa fa-apple text-ma-apple"></i>
                  :
                  <i className="fa fa-android text-ma-android"></i>
                }
            </span>
            }
            <span><a href="#" className="app-trash" data-app-id="{{appId}}"><i className="fa fa-trash-o"></i></a></span>
          </div>
        </div>
      </li>
    );
};

NavbarApp.js.propTypes = {
  proxiedArtworkUrl60 : PropTypes.string.isRequired,
  isStoreAccountConnected: PropTypes.bool.isRequired,
  store: PropTypes.string.isRequired
};

export default NavbarApp.js;
