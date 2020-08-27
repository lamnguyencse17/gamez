import validator from "validator";

const validatePassword = (password) => {
  if (validator.isEmpty(password, { ignore_whitespace: true })) {
    return "Password is empty";
  }
  if (password.length < 6) {
    return "Password is too short";
  }
  return null;
};

export default validatePassword;
