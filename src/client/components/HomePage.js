import React from 'react';
import {connect} from 'react-redux';
import AppMenu from './AppMenu';

class HomePage extends React.Component{
  render(){
    return <AppMenu/>;
  }
}

function mapStateToProps(state, ownProps) {
  return {
    loading: state.isFetching > 0
  };
}

export default connect(mapStateToProps)(HomePage);
