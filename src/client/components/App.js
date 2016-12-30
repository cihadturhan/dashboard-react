import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from '../actions/user';

class App extends React.Component{
  constructor(props, context) {
    super(props, context);

    this.state = {
      user: Object.assign({}, props.user),
      errors: {},
      saving: false
    };
  }

  componentWillReceiveProps(nextProps) {
    //if (this.props.user.id != nextProps.user.id) {
      // Necessary to populate form when existing course is loaded directly.
      this.setState({user: Object.assign({}, nextProps.user)});
    //}
  }

  render(){
    return (<div>
      <div>App</div>
      {this.props.children}
      </div>);
  }
}

function mapStateToProps(state, ownProps) {

  let user = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};

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
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
