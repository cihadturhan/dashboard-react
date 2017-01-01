import React, {PropTypes} from 'react';

const AppSearch = (props) => {
  return (
    <div id="navbar-search-app">
      <button id="navbar-add-app-btn" className="btn btn-primary btn-rounded"><i className="fa fa-plus"></i><span
        id="add-app-text"> Search New App</span></button>
      <div className="input-group custom-search-form" style={{width: '100%'}}>
        <input type="text" className="form-control typeahead"
               placeholder="Search for any app or competitor by name, id or URL (e.g Evernote or 568939854)"/>
        <i className="fa fa-refresh fa-spin typeahead-spinner"></i>
        <i className="fa fa-times typeahead-clear"></i>
      </div>
    </div>
  );
};

AppSearch.propTypes = {
  //  : PropTypes.string.isRequired
};

export default AppSearch;
