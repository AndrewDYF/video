/* eslint valid-jsdoc: "off" */

'use strict';
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1574154945202_2400';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  config.mongoose = {
    client:{
       url: 'mongodb://127.0.0.1:27017/video',
       options: {},
    }
  };
  config.view = {
    mapping: {
      '.html': 'ejs',
    },
  };
  config.multipart = {
    mode: 'file',
    fileSize: '50mb',
  };
  config.io = {
    init: { }, // passed to engine.io
    namespace: {
      '/': {
        connectionMiddleware: ['connection'],
        packetMiddleware: [],
      }
    },
  };
  config.security={
    csrf: {
      enable: false,
    },
  }
  return {
    ...config,
    ...userConfig,
  };
};
