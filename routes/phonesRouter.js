const { Router } = require('express');

// /api/phones
const phonesRouter = Router();

phonesRouter.post('/', (req, res) => {});
phonesRouter.get('/', (req, res) => {});
phonesRouter.get('/:id', (req, res) => {});
phonesRouter.patch('/:id', (req, res) => {});
phonesRouter.delete('/:id', (req, res) => {});

module.exports = phonesRouter;
