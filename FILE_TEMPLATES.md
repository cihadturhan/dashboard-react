In the project, most of time you will write Components and Containers. 

To save some time, add the following templates to your WebStorm file
and use them from `new -> your_template_name`

- Under `File -> New -> Edit File Templates...`
- Click `(+)` sign on top right 
- Assign name as the following title and content with `js` extension. 

**React Container Component**
```javascript
import React, {PropTypes} from 'react';

class $NAME extends React.Component{
  constructor(props, context){
    super(props, context);
  }
    
  render(){
    return (
      <div></div>
    );
  }
}

$NAME .propTypes = {
  //  : PropTypes.string.isRequired
};

export default $NAME;
```

**React Redux Container Component**
```javascript
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class $NAME extends React.Component{
  constructor(props, context){
    super(props, context);
  }
    
  render(){
    return (
      <div></div>
    );
  }
}

$NAME .propTypes = {
  //  : PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps){
  return {
    state: state
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)($NAME);
```

**React Stateless Component**
```javascript
import React, {PropTypes} from 'react';

const $NAME = (props) => {
  return (
    <div></div>
  );
}

$NAME .propTypes = {
  //  : PropTypes.string.isRequired
};

export default $NAME;
```

**React Test Utils File**
```javascript
import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import $NAME from './$NAME';

describe('$NAME via React Test Utils', ()=>{

});
```

**React Router File**
```javascript
import React from 'react';
import { render } from 'react-dom';
import { Route, IndexRoute} from 'react-router';
import Component from './components/Component';

export default (<Route path="" component={Component}/>);
```
