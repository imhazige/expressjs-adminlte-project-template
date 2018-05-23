import express from 'express';

import route from '../../src/api/index';

const test = callback => {
  const app = express();
  route(app);
  callback(app);
};
export default test;
