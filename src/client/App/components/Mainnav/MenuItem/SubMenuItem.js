import React, {PropTypes} from 'react';
import {Link} from 'react-router';


const SubMenuItem = (props) => {
  return <li><Link to={props.href} activeClassName="active" className="main-nav-links">{props.title}</Link></li>;
};

SubMenuItem.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default SubMenuItem;
