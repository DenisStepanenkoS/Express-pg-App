const {
  CREATE_CUSTOMER_VALIDATION_SCHEMA,
} = require('../utils/validationSchemas');

module.exports.validateCustomerOnCreate = async (req, res, next) => {
  const { body } = req;

  try {
    req.body = await CREATE_CUSTOMER_VALIDATION_SCHEMA.validate(body);

    next();
  } catch (err) {
    // TODO next(err)
    res.status(422).send('Validation Error');
  }
};
