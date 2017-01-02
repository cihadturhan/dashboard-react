import React, {PropTypes} from 'react';

const PageNotFound = (props) => {
  return (
    <div>
      <div class="text-center">
        <h1>Uh oh, 404! Seems like space navigation isn't for everyone.</h1>
      </div>
      <div class="text-center img-responsive">
        <img src="/img/background/bg-404.jpg"/>
      </div>
    </div>
  );
}

PageNotFound.js.propTypes = {
  //  : PropTypes.string.isRequired
};

export default PageNotFound;
