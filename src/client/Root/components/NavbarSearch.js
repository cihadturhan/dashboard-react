import React, {PropTypes} from 'react';

const NavbarSearch = (props) => {
    return (
      <li>
        <div className="input-group">
          <span className="input-group-addon" id="app-search-icon" style="border: none;"> <i className="fa fa-search text-light"></i></span>
          <input className="form-control" id="app-list-searchbox" value={props.searchBoxValue} placeholder="Filter apps"/>
        </div>
      </li>
    );
};

NavbarSearch.propTypes = {
    searchBoxValue  : PropTypes.string.isRequired
};

export default NavbarSearch;
