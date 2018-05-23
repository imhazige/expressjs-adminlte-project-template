import express from 'express';
import uuid from 'uuid';
import log from '../common/log';
import fs from 'fs';

const router = express.Router();

router.get('/e1', (req, res, next) => {
  log.debug('e1 request ....%s', JSON.stringify(req.body));
  res.json({ ok: true }).end();
});

router.post('/e2', (req, res, next) => {
  log.debug('e2 request ....%s', JSON.stringify(req.body));
  res.json({ ok: true }).end();
});

export default router;
