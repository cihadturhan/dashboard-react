import React, {PropTypes} from 'react';
import dummyImage from '../constants/dummyImage';


class AppImage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      ...props
    };
    this.onErrorHandler.bind(this);
  }

  onErrorHandler() {
    this.setState({
      src: dummyImage
    });
  }

  render() {
    let className = 'brand-icon-' + this.props.size;
    return (
      <img src={this.props.src} className={className} onerror={this.onErrorHandler}/>
    );
  }
}

AppImage.propTypes = {
  src: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired
};

export default AppImage;
