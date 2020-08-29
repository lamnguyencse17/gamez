import validateName from "./pureValidators/nameValidator";
import validatePassword from "./pureValidators/passwordValidator";

const validateUpdateUser = (userInfo) => {
  let errors = {};
  const { name, password, newPassword } = userInfo;
  errors.name = validateName(name);
  errors.password = validatePassword(password);
  errors.newPassword = validatePassword(newPassword)
    ? "New password is empty"
    : null;
  return errors;
};

export default validateUpdateUser;
