import React, {PropTypes} from 'react';

const LearnButton = (props) => {
    return (
      <a href="javascript:void(0)"
         className="badge badge-mint add-popover"
         data-youtube-id="<%- youtubeId %>"
         data-placement="bottom"
         data-learn-more-link="<%- learnMoreLink %>"
         data-content="<%- description %>">
        <i className="fa fa-question-circle"></i>
        <strong className="text-sm text-helper">Learn</strong>
      </a>
    );
};

LearnButton.propTypes = {
    //  : PropTypes.string.isRequired
};

export default LearnButton;
