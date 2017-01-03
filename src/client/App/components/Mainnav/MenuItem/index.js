import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import classnames from 'classnames';
import * as activeItemActions from '../../../redactions/activeItem';
import Collapse from 'react-collapse';
import {Link} from 'react-router';

import SubMenuItem from './SubMenuItem';

class MenuItem extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.actions.setActive(this.props.active ? null : this.props.data);
  }

  render() {
    let liClass = classnames({active: this.props.active});

    let data = this.props.data;
    let linkClass = classnames('fa', `fa-${data.icon}`);

    let children = [], href = data.href;

    if (data.contents && data.contents.length) {
      href = 'javascript:void(0)';
      children = (<Collapse isOpened={this.props.active} springConfig={{stiffness: 200, damping: 20}}>
        <ul key={-1}>
          {data.contents.map((content, i) => {
            return <SubMenuItem {...content} key={i}/>;
          })}

        </ul>
      </Collapse>);
    }


    return (


      <li className={liClass}>
        <a href={href} onClick={this.handleClick}>
          <i className={linkClass}> </i>
          <span className="menu-title">
            <strong>{data.title}</strong>
          </span>
          {data.newTag && <span className="label label-primary">NEW</span>}
          {data.betaTag && <span className="label label-danger">BETA</span>}
          {data.badge &&
          <span className="badges badges-alert badge-menu" data-badge={data.badge} id="rec-action-badge"> </span>}
          {data.contents && data.contents.length && <i className="arrow"></i>}
        </a>
        {children}
      </li>
    );
  }
}

MenuItem.propTypes = {
  active: PropTypes.bool,
  data: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
  /*icon  : PropTypes.string.isRequired,
   index : PropTypes.number.isRequired,
   title : PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
   badge : PropTypes.string,
   href : PropTypes.string,
   newTag:  PropTypes.bool,

   contents: PropTypes.arrayOf(PropTypes.object)*/
};

function mapStateToProps(state, ownProps) {
  return {
    state: state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(activeItemActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuItem);
