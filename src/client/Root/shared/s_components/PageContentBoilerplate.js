import React, {PropTypes} from 'react';

class PageContentBoilerplate extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div id="page-content">
        {this.props.children}
      </div>
    );
  }
}

PageContentBoilerplate.propTypes = {
  children  : PropTypes.object
};

export default PageContentBoilerplate;
