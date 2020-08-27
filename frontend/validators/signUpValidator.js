import validatePassword from "./pureValidators/passwordValidator";
import validateEmail from "./pureValidators/emailValidator";
import validateName from "./pureValidators/nameValidator";

const validateSignUp = (signUpDetails) => {
  const { name, email, password } = signUpDetails;
  let errors = {};
  errors.name = validateName(name);
  errors.email = validateEmail(email);
  errors.password = validatePassword(password);
  return errors;
};

export default validateSignUp;
