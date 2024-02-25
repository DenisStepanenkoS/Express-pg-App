const { Router } = require('express');
const customersRouter = require('./customersRouter');
const phonesRouter = require('./phonesRouter');

// /api
const router = Router();

router.use('/customers', customersRouter);
router.use('/phones', phonesRouter);

module.exports = router;
