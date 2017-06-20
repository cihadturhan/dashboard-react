import React, {PropTypes} from 'react';
import PageHeader from 's_components/PageHeader';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {slugify} from 'maUtils';

import Category from 's_constants/category';
import storeNames from 's_constants/storeNames';
import {countries} from 'country-data';

class TopAppList extends React.Component{
  constructor(props, context){
    super(props, context);

    this.state = this.getParams(props);
  }

  componentWillReceiveProps(nextProps){
    this.setState(this.getParams(nextProps));
  }

  getParams(props){

    let params = props.router.params;
    let store = storeNames.ios.platformShort == params.platform ? storeNames.ios : storeNames.play;
    let country = countries[params.country.toUpperCase()];

    return {
      params:{
        category: Category.findBySlug(store.name, params.category),
        device: params.device,
        store,
        country
      }
    };

  }

  render(){
    return (
      <div>
        <PageHeader {...this.state.params}/>
      </div>
    );
  }
}

TopAppList.propTypes = {
    router  : PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps){
  return {
    state
  };
}

function mapDispatchToProps(dispatch){
  let actions = {};
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TopAppList);
