// Karma configuration
// Generated on Sun Jul 13 2014 22:07:51 GMT-0700 (PDT)
var _ = require('lodash');

module.exports = function(config) {
  config.set(_.assign({}, require('./test/karma-common-conf.js'), { logLevel: config.LOG_DEBUG }));
};

