import React from 'react'
import { render } from 'react-dom'
import { Route, IndexRoute} from 'react-router';

export default (<Route path="users" component={Users}>
  <IndexRoute component={UsersIndex}/>
  <Route path="top" component={User}/>
</Route>);
