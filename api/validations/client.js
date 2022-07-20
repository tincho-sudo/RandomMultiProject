const validator = require("validator");
const { Client } = require("../models");
const isEmpty = require("./is-empty.js");

const validatorRegisterClient = async (data) => {
  let errors = {};

  if (isEmpty(data.email)) data.email = "";
  if (isEmpty(data.password)) data.password = "";
  if (isEmpty(data.password2)) data.password2 = "";
  if (isEmpty(data.name)) data.name = "";
  if (isEmpty(data.surname)) data.surname = "";

  //email validations
  if (validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }

  if (!validator.isEmail(data.email)) {
    errors.email = "Invalid email";
  }

  let emailTrim = data.email.trim().toLowerCase();

  const client = await Client.findOne({ email: emailTrim });
  if (client) {
    errors.email = "User already exists";
  }

  //password validations
  if (!validator.isLength(data.password, { min: 4, max: 20 })) {
    errors.password =
      "The password must be at least 4 and at most 20 characters";
  }

  if (!validator.equals(data.password, data.password2)) {
    errors.password2 = "Password must match";
  }

  if (validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  if (validator.isEmpty(data.password2)) {
    errors.password2 = "Confirmation password field is required";
  }

  //name & surname
  if (validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }
  if (validator.isEmpty(data.surname)) {
    errors.surname = "Surname field is required";
  }
  return {
    errors,
    isValid: isEmpty(errors),
  };
};


module.exports = { validatorRegisterClient };
