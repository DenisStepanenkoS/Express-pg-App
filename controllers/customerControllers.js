const { create } = require('../models/customer');
const { Customer } = require('./../models');
const createError = require('http-errors');
module.exports.createCustomer = async (req, res, next) => {
  const { body } = req;

  try {
    const createdCustomer = await Customer.create(body);
    if (!createdCustomer) {
      return next(createError(400, 'Something went wrong'));
    }
    res.status(201).send(createdCustomer);
  } catch (err) {
    next(err);
  }
};

module.exports.getAllCustomers = async (req, res, next) => {
  const { pagination } = req;
  try {
    const foundCustomers = await Customer.getAll(pagination);
    res.status(200).send(foundCustomers);
  } catch (err) {
    next(err);
  }
};

module.exports.getByIdCustomer = async (req, res, next) => {
  const { id } = req.params;

  try {
    const foundCustomer = await Customer.getById(id);

    if (!foundCustomer) {
      return next(createError(404, 'Customer not found'));
    }

    res.status(200).send(foundCustomer);
  } catch (err) {
    next(err);
  }
};

module.exports.updateByIdCustomer = async (req, res, next) => {
  const { id } = req.params;
  const { body } = req;

  try {
    const updateCustomer = await Customer.updateById(id, body);
    if (!updateCustomer) {
      return next(createError(404, 'Customer not found'));
    }
    res.status(200).send(updateCustomer);
  } catch (err) {
    next(err);
  }
};

module.exports.deleteByIdCustomer = async (req, res, next) => {
  const { id } = req.params;
  try {
    const foundCustomer = await Customer.deleteById(id);;

    if (!foundCustomer) {
      return next(createError(404, 'Customer not found'));
    }
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

