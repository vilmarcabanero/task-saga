const https = require('https');

const API = {
  SERVER: {
    WEBSERVICES: {
      TYPE: 'HTTP',
      OPTIONS: {
        // baseURL: 'https://gasto-v2-api.herokuapp.com/api',
        // baseURL: 'http://localhost:4000/api',
        baseURL: 'https://nestjs-my-starter.herokuapp.com/api',
        headers: {
          // 'Cache-Control': 'no-cache',
        },
        timeout: 50000,
        httpsAgent: new https.Agent({
          rejectUnauthorized: true,
        }),
      },
    },
  },
};

module.exports = {
  API,
};
