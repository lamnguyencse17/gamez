import validator from "validator";

const validateEmail = (email) => {
  if (validator.isEmpty(email)) {
    return "Email is empty";
  }
  if (!validator.isEmail(email)) {
    return "Email is invalid";
  }
  return null;
};

export default validateEmail;