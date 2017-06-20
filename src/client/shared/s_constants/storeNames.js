export const IOS = 'IOS';
export const PLAY = 'PLAY';

const storeName = {
  ios: {
    name: IOS,
    lowerCase: 'ios',
    brandName: 'apple',
    shortName: 'iOS',
    platformShort: 'appstore',
    platformName: 'App Store',
    iconClassName: 'fa fa-apple text-ma-apple'
  },
  play: {
    name: PLAY,
    lowerCase: 'play',
    shortName: 'play',
    brandName: 'android',
    platformShort: 'playstore',
    platformName: 'Play Store',
    iconClassName: 'fa fa-android text-ma-android'
  }
};

export default storeName;
