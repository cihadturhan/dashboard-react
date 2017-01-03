import React, {PropTypes} from 'react';
import PageTitle from 'components/PageTitle';

const AppHeader = (props) => {
    return (
        <PageTitle title="Hello"/>
    );
};

AppHeader.propTypes = {
    //  : PropTypes.string.isRequired
};

export default AppHeader;
