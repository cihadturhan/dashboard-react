import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from '../redactions/user';
import BoilerPlate from '../components/Boilerplate';

class App extends React.Component{
  constructor(props, context) {
    super(props, context);

    this.state = {
      user: Object.assign({}, props.user),
      errors: {},
      saving: false
    };
  }

  componentWillMount(){
    this.props.actions.getUserInfo();
  }

  componentWillReceiveProps(nextProps) {
    //if (this.props.user.id != nextProps.user.id) {
      // Necessary to populate form when existing course is loaded directly.
      this.setState({user: Object.assign({}, nextProps.user)});
    //}
  }

  render(){
    return (<div id="container" className="mainnav-lg"><BoilerPlate>{this.props.children}</BoilerPlate></div>);
  }
}

function mapStateToProps(state, ownProps) {

  let user = {};

  if (state.user) {
    user = state.user;
  }

  return {
    loading: state.isFetching > 0,
    user: user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch)
  };
}

App.propTypes = {
  loading: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
  actions: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
