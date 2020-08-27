import validatePassword from "./pureValidators/passwordValidator";
import validateEmail from "./pureValidators/emailValidator";

const validateLogIn = (logInDetails) => {
  const { email, password } = logInDetails;
  let errors = {};
  errors.email = validateEmail(email);
  errors.password = validatePassword(password);
  return errors;
};

export default validateLogIn;
