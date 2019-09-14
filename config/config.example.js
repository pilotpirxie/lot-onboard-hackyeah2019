module.exports = {
  METADATA: {
    NAME: 'Yap Starter',
    DESCRIPTION: 'Lorem ipsum dolor sit amet',
    KEYWORDS: 'lorem,ipsum,dolor,sit,amet',
    COMPANY_NAME: 'Company Name',
    LANGUAGE: 'en',
    ROBOTS: 'index, follow',
    CATEGORY: 'business',
    CONTACT_EMAIL: 'contact@company.com',
    URL: 'http://localhost:8080',
    RATING: 'general',
    COVER_IMAGE: 'https://example.com/images/'
  },
  DEFAULT_PORT: 8080,
  SESSION_SECRET: '4D6E8B5E2B2EEC6C9378A38F82BFD19DB4C53B8F58E558F63B1E73ABA1',
  SESSION_TIMEOUT: 172800000,
  INITIALLY_VERIFIED: true,
  INITIALLY_BLOCKED: false,
  DB: {
    NAME: 'yapstarter',
    USER: 'root',
    PASS: '',
    HOST: 'localhost',
    PORT: 3306,
  },
  FILE_SERVER: {
    REMOTE_FTP_UPLOAD: true,
    PUBLIC_URL: 'http://localhost/cdn/',
    LOCAL_DIRECTORY: 'public/uploads/',
    REMOTE_DIRECTORY: '/cdn/',
    USER: 'ftp_test_user',
    PASS: '',
    HOST: 'localhost',
    PORT: 21,
    SECURE: false
  },
  CAPTCHA_SITE_KEY: '',
  CAPTCHA_SECRET: '',
  CAPTCHA_SCORE_THRESHOLD: 0.3,
  ALERT_CODES: {
    'error-missing-data': 'ERROR - Missing or invalid data. Check your data and try again.',
    'error-user-already-exists': 'ERROR - Missing or invalid data. Check your data and try again.',
    'error-invalid-credentials': 'ERROR - Invalid email or password. Check your data and try again',
    'error-invalid-data': 'ERROR - Invalid data',
    'error-terms': 'ERROR - You must read and accept terms of service and privacy policy to continue.',
    'error-invalid-captcha': 'ERROR - Invalid captcha.',
    'error-insufficient-funds': 'ERROR - You don\'t have enough money.',
    'error-something-wrong': 'ERROR - Something went wrong, try again later.',
    'error-confirm-password': 'ERROR - There is a mismatch between password and the password confirmation.',
    'logged': 'SUCCESS - Successfully signed in.',
    'logout': 'SUCCESS - Successfully logout!',
    'success': 'SUCCESS - Action performed successfully!',
  }
};
