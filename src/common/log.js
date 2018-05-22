import config from '../config';

import log4js from 'log4js';

log4js.configure({
  appenders: {
    cheese: {
      type: 'file',
      filename: config.logging.filename,
      maxLogSize: config.logging.filename.maxLogSize,
      backups: config.logging.filename.backups || 10,
    },
    out: { type: 'stdout' },
  },
  categories: {
    default: { appenders: ['cheese', 'out'], level: config.logging.level },
  },
});

// use default
const log = log4js.getLogger();
// const log = log4js.getLogger('cheese');

export default log;
