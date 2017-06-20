import React, {PropTypes} from 'react';

const UsageMainnav = (props) => {
  let keywordStyle = {
    width: props.keywordUsagePercentage + '%'
  };
  let dailyKeywordStyle = {
    width: props.dailyKeywordUsagePercentage + '%'
  };

  return (
    <ul className="list-group">
      <li className="pad-no pad-top text-center"><p>Current plan: {props.plan}</p></li>
      <li className="mar-btm">
        <a href={props.keywordPageLink}>
          <span className="label label-primary pull-right">{props.usage.keywords}/{props.usage.authorizedKeywords}</span>
          <small>Keyword usage</small>
          <div className="progress progress-sm">
            <div className="progress-bar progress-bar-primary" style={keywordStyle}>
              <span className="sr-only">{props.keywordUsagePercentage}%</span>
            </div>
          </div>
        </a>
      </li>

      <li className="mar-btm">
        <a href="{{keywordPageLink}}">
          <span
            className="label label-primary pull-right">{props.usage.dailyKeywordUsage}/{props.usage.dailyAuthorizedKeywords}</span>
          <small>Daily Keyword usage</small>
          <div className="progress progress-sm">
            <div className="progress-bar progress-bar-primary" style={dailyKeywordStyle}>
              <span className="sr-only">{props.dailyKeywordUsagePercentage}%</span>
            </div>
          </div>
        </a>
      </li>


      <li className="mar-btm">
        <a href={props.marketPricingPageLink}>
          {props.marketUsageIncluded ?
            <span className="label label-primary pull-right"><i className="fa fa-unlock"></i></span>
            :
            <span className="label label-primary pull-right"><i className="fa fa-lock"></i></span>
          }
          <small>Market intelligence</small>
          <div className="progress progress-sm">
            <div className="progress-bar progress-bar-primary" style="width: 0%;">
              <span className="sr-only"></span>
            </div>
          </div>
        </a>
      </li>

      <li className="mar-btm">
        <a href={props.integrationPageLink} className="main-nav-links">
          <span className="label label-primary pull-right">Unlimited</span>
          <small>Data integration</small>
          <div className="progress progress-sm">
            <div className="progress-bar progress-bar-primary" style="width: 0%;">
              <span className="sr-only"></span>
            </div>
          </div>
        </a>
      </li>
      <li className="text-center mar-btm" style="display:none;"><a id="upgrade-btn" href="#" className="btn button btn-cta btn-upgrade">UPGRADE</a>
      </li>
    </ul>
  );
};

UsageMainnav.propTypes = {
  plan: PropTypes.string.isRequired,
  keywordPageLink: PropTypes.string.isRequired,
  marketPricingPageLink: PropTypes.string.isRequired,
  integrationPageLink: PropTypes.string.isRequired,
  audienceCount: PropTypes.number.isRequired,
  dailyKeywordUsagePercentage: PropTypes.number.isRequired,
  keywordUsagePercentage: PropTypes.number.isRequired,
  marketUsageIncluded: PropTypes.bool.isRequired,
  audienceUsageIncluded: PropTypes.bool.isRequired,
  usage: PropTypes.object.isRequired
};
