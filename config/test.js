module.exports = {
  LOG_LEVEL: process.env.LOG_LEVEL || 'info',
  AUTH_V2_URL: process.env.AUTH_V2_URL,
  AUTH_V2_CLIENT_ID: process.env.AUTH_V2_CLIENT_ID,
  AUTH_V3_URL: process.env.AUTH_V3_URL,
  MOCK_API_PORT: process.env.MOCK_API_PORT || 4000,
  ADMIN_CREDENTIALS_USERNAME: process.env.ADMIN_CREDENTIALS_USERNAME,
  ADMIN_CREDENTIALS_PASSWORD: process.env.ADMIN_CREDENTIALS_PASSWORD,
  MANAGER_CREDENTIALS_USERNAME: process.env.MANAGER_CREDENTIALS_USERNAME,
  MANAGER_CREDENTIALS_PASSWORD: process.env.MANAGER_CREDENTIALS_PASSWORD,
  COPILOT_CREDENTIALS_USERNAME: process.env.COPILOT_CREDENTIALS_USERNAME,
  COPILOT_CREDENTIALS_PASSWORD: process.env.COPILOT_CREDENTIALS_PASSWORD,
  USER_CREDENTIALS_USERNAME: process.env.USER_CREDENTIALS_USERNAME,
  USER_CREDENTIALS_PASSWORD: process.env.USER_CREDENTIALS_PASSWORD,
  WAIT_TIME: 6000,
  AUTOMATED_TESTING_REPORTERS_FORMAT: process.env.AUTOMATED_TESTING_REPORTERS_FORMAT
    ? process.env.AUTOMATED_TESTING_REPORTERS_FORMAT.split(',')
    : ['cli', 'html'],
  AUTOMATED_TESTING_NAME_PREFIX: process.env.AUTOMATED_TESTING_NAME_PREFIX || 'POSTMANE2E-',
  API_BASE_URL: process.env.API_BASE_URL || 'http://localhost:3000',
  TC_API: process.env.TC_API || 'http://localhost:4000/v5',
  TOPCODER_USERS_API: process.env.TOPCODER_USERS_API || 'http://localhost:4000/v3/users',
  TOPCODER_MEMBERS_API: process.env.TOPCODER_MEMBERS_API || 'http://localhost:4000/v3/members'
}
