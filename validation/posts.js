const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validatePostInput(data) {
  let errors = {};

  data.text = validText(data.text) ? data.text : '';
  // data.username = validText(data.username) ? data.username : '';

  // if (Validator.isEmpty(data.username)) {
  //   errors.username = 'Username field is required';
  // }

  if (!Validator.isLength(data.text, { min: 1, max: 300 })) {
    errors.text = 'Post must be between 1 and 300 characters';
  }

  if (Validator.isEmpty(data.text)) {
    errors.text = 'Text field is required';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};