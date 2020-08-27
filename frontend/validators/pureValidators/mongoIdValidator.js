import validator from "validator";

const validateMongId = (mongoId) => {
  return validator.isMongoId(mongoId);
};

export default validateMongId;
