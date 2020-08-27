import validator from "validator";

const validateJwt = (jwt) => {
  return validator.isJWT(jwt);
};

export default validateJwt;
