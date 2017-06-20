import React, {PropTypes} from 'react';

const JsonPrinter = (props) => {
    return (
      <pre>{JSON.stringify(props.data, null, 2)}</pre>
    );
};

JsonPrinter.propTypes = {
    data  : PropTypes.object
};

export default JsonPrinter;
