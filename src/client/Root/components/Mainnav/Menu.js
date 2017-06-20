import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

import Divider from './Divider';
import MenuItem from './MenuItem';

class Menu extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <ul id="mainnav-menu" className="list-group">

        {this.props.contents.reduce((prev, currItem, i, a)=> {
          prev.push(
            <MenuItem data={currItem} key={i * 2} active={currItem == this.props.state.activeItem}/>
          );
          //Add divider after each list item
          if (i !== a.length - 1)
            prev.push(<Divider key={i * 2 + 1}/>);

          return prev;
        }, [])}
      </ul>
    );
  }
}

Menu.propTypes = {
  contents: PropTypes.array.isRequired,
  state: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  return {
    state
  };
}


export default connect(mapStateToProps)(Menu);
