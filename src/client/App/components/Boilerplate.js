import React from 'react';
import {connect} from 'react-redux';
import Navbar from './Navbar';
import Mainnav from './Mainnav';

class Boilerplate extends React.Component{
  render(){
    return (<div>
      <Navbar name="Appname" publisher="facebook"/>
      <Mainnav/>
    </div>);
  }
}

function mapStateToProps(state, ownProps) {
  return {
    loading: state.isFetching > 0
  };
}

export default connect(mapStateToProps)(Boilerplate);
