import validator from "validator";

const validateName = (name) => {
  if (validator.isEmpty(name, { ignore_whitespace: true })) {
    return "Name is empty";
  }
  return null;
};

export default validateName;
