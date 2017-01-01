import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import './index.less';
import Menu from './Menu';



class Mainnav extends React.Component {
  constructor(props, context) {
    super(props, context);
  }


  render() {
    return (
      <nav id="mainnav-container">
        <div id="mainnav">

          <div id="mainnav-menu-wrap">
            <div className="nano">
              <div className="nano-content" tabIndex="0">
                <Menu contents={this.props.contents}/>
              </div>
              <div className="nano-pane" style={{display: 'none'}}>
                <div className="nano-slider" style={{height: '20px', transform: 'translate(0px, 0px)'}}></div>
              </div>
            </div>
          </div>

        </div>
      </nav>
    );
  }
}

Mainnav.propTypes = {
  contents  : PropTypes.arrayOf(PropTypes.object)
};

function mapStateToProps(state, ownProps) {
  return {
    contents: state.mainnav
  };
}

export default connect(mapStateToProps)(Mainnav);
