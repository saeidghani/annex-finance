const { host } = window.location;

/**
 * Environments
 */
let env = 'production'; // Defaults to production
if (process.env.NODE_ENV === 'development' || host.includes('local')) env = 'development';
if (host.includes('stage.')) env = 'stage';

/**
 * Config object to export
 */
export default {
  // App Details
  appName: 'Annex-Dashboard',

  // Build Configuration - eg. Debug or Release?
  isDevEnv: env === 'development',
  ENV: env,

  // Date Format
  dateFormat: 'Do MMM YYYY',

  // API
  apiBaseUrl: '',
  mediaBaseUrl: '',
};
