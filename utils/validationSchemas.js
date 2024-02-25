const yup = require('yup');

module.exports.CREATE_CUSTOMER_VALIDATION_SCHEMA = yup.object({
  firstName: yup.string().trim().min(2).max(32).required(),
  lastName: yup.string().trim().min(2).max(32).required(),
  email: yup.string().email(),
  tel: yup.string().matches(/^\+\d{12}$/, 'Tel must be like +XX XXX XXX XX XX'),
});
