const express = require('express');
const router = require('./routes');
const { errorHandlers } = require('./middleware');

const app = express();

app.use(express.json());

app.use('/api', router);

app.use(errorHandlers.errorHandler);

module.exports = app;

// POST   /api/customers {body}
// GET    /api/customers?page=1&results=10
// GET    /api/customers/1
// PATCH  /api/customers/1 {body}
// DELETE /api/customers/1

// отримати інфо про замовлення конкретного користувача
// GET /customers/1/orders
// отримати інфо про конкретне замовлення конкретного користувача
// GET /customers/1/orders/5
