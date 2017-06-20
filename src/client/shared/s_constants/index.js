/*eslint no-console: ["error", { allow: ["error"] }]*/
import nodeUrls from './urlApiNode';
import playUrls from './urlApiPlay';

const envVars = {
    API_DOMAIN: 'http://localhost:8080',
    GOOGLE_VERIFICATION_DOMAIN: 'http://localhost:3000',
    STRIPE_PUBLISHABLE_KEY: 'pk_test_TaSu0cLjeUyAGue34LrGlK3m',
    GOOGLE_REDIRECT_URI: 'http://localhost:4000/integration',
    GOOGLE_CLIENT_ID: '',
    GOOGLE_CLIENT_SECRET: '',
    PUBLIC_SITE_DOMAIN: 'http://local.mobileaction.co'
  };

if (process.env.NODE_ENV == 'production') {

  // Fetch variables from environment variables
  for( let key in constants){


    if(process.env[key])
      console.error(`Cannot find ${key} in environment variables`);
    constants[key] = process.env[key];
  }
}

const constants = {
  url: {
    SELF_DOMAIN: '/',
    API_DOMAIN: envVars.API_DOMAIN,
    PUBLIC_SITE_DOMAIN: envVars.API_DOMAIN
  },
  configVars:{
    stripePublishableKey: envVars.STRIPE_PUBLISHABLE_KEY,
    googleClientID: envVars.GOOGLE_CLIENT_ID,
    googleClientSecret: envVars.GOOGLE_CLIENT_SECRET,
    googleRedirectURI: envVars.GOOGLE_REDIRECT_URI,
    googleVerification: envVars.GOOGLE_VERIFICATION_DOMAIN
  }
};

constants.url.api = {
  node: nodeUrls,
  play: playUrls
};

export default constants;
