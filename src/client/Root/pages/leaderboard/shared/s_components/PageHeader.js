import React, {PropTypes} from 'react';
import './PageHeader.less';
import {DropdownButton, MenuItem} from 'react-bootstrap';
import {Link} from 'react-router';
import {slugify} from 'maUtils';
import storeNames, {IOS, PLAY} from 's_constants/storeNames';
import category from 's_constants/category';
import JsonPrinter from 's_components/JsonPrinter';

const PageHeader = (props) => {
  let iosText = <span><i className="fa fa-apple text-ma-apple"></i>&nbsp;App Store</span>;
  let androidText = <span><i className="fa fa-android text-ma-android"></i>&nbsp;Play store</span>;

  let iphoneText = <span><i className="fa fa-mobile-phone text-ma-apple"></i>&nbsp;iPhone</span>;
  let ipadText = <span><i className="fa fa-tablet text-ma-apple"></i>&nbsp;iPad</span>;


  let platform = props.store.platformShort;
  let deviceText;
  switch(props.device){
    case 'iphone':
      deviceText = iphoneText;break;
    case 'ipad':
      deviceText = ipadText;break;
    default:
      deviceText = ' All Devices';
  }
  let country = props.country.alpha2.toLowerCase();
  let iosPlatform = storeNames.ios.platformShort, playPlatform = storeNames.play.platformShort;

  let categorySlug = slugify(props.category.name);
  let categories = category.getList(props.store.name);


  let createLink = (platform, device, country, category) =>
    `/leaderboard/top/platform/${platform}/device/${device}/country/${country}/category/${category}`;


    return (
      <section id="leaderboard-page-header" className="panel">
        <JsonPrinter data={props.store}/>
        <div className="panel-body">
          <div className="update-time">
            <i className="fa fa-clock-o"></i> Updated daily
          </div>
          <div className="panel-control">
            <DropdownButton title={props.store.name == IOS ? iosText : androidText} id="selected-store">
              <li><Link to={createLink(iosPlatform, 'iphone', country, categorySlug)} activeClassName="">{iosText}</Link></li>
              <li><Link to={createLink(playPlatform, 'all', country, categorySlug)} activeClassName="">{androidText}</Link> </li>
            </DropdownButton>

            <DropdownButton title={deviceText} id="selected-device" disabled={props.store.name == PLAY}>
              <li><Link to={createLink(platform, 'iphone', country, categorySlug)} activeClassName="">{iphoneText}</Link></li>
              <li><Link to={createLink(platform, 'ipad', country, categorySlug)} activeClassName="">{ipadText}</Link> </li>
            </DropdownButton>

            <DropdownButton title={props.category.name} id="selected-category" pullRight>
              {categories.map(category =>
                <li key={category.id}><Link to={createLink(platform, props.device, country, slugify(category.name))} activeClassName="">{category.name}</Link></li>)}
            </DropdownButton>

            <ul className="right-actions list-unstyled">

              <li className="dropdown" id="region">
                <a id="selected-country" className="lang-selector dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
                        <span className="lang-selected">
                        <span className="flag-icon" id="selected-flag-icon"></span>
                        <span className="lang-name"></span>
                        <i className="fa fa-caret-down"></i>
                        </span>
                </a>
                {/* Language selector menu */}
                <ul className="head-list dropdown-menu with-arrow" id="region-list">
                </ul>
              </li>

            </ul>
          </div>
          <h1 className="page-header"> <i className="device-icon fa fa-apple text-ma-apple" id="title-selected-device-icon"></i>  <span id="page-name"></span> for: <span id="title-store-name">App Store</span> - <span id="title-country-name">United States - </span><span id="title-parent-category"></span><span id="title-category-name">All Categories</span></h1>
          <div>
          </div>
        </div>
      </section>
    );
};

PageHeader.propTypes = {
    category  : PropTypes.object.isRequired,
    device  : PropTypes.string.isRequired,
    store  : PropTypes.object.isRequired,
    country  : PropTypes.object.isRequired

};

export default PageHeader;
