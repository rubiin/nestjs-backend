const config = {
 dev: {
  secret: 'secretKey',
  expiresIn: '10h',
  },
  production: {
    secret: 'asdhOA/&s8adbskha723ye3u',
    expiresIn: '1h',
  }
};
export default config[process.env.NODE_ENV];