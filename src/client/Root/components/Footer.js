import React, {PropTypes} from 'react';

const Footer = (props) => {
    return (
      <footer id="footer">
        <div className="footer-links text-center">
          <ul className="footer-list list-inline">
            <li>
              <a href="https://www.mobileaction.co/top/appstore/us/overall/1" className="text-sm" target="blank"><h5>Top Apps</h5></a>
            </li>
            <li>
              <a href="https://www.mobileaction.co/new/appstore/us/overall/1" className="text-sm" target="blank"><h5>New Apps</h5></a>
            </li>
            <li>
              <a href="http://blog.mobileaction.co/" className="text-sm" target="blank"><h5>Blog</h5></a>
            </li>
            <li>
              <a href="http://help.mobileaction.co/" className="text-sm" target="blank"><h5>Help</h5></a>
            </li>
          </ul>
        </div>
      </footer>
    );
};

Footer.propTypes = {
    //  : PropTypes.string.isRequired
};

export default Footer;
