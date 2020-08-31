import validator from "validator";

const validateArticleDescription = (articleDescription) => {
  if (validator.isEmpty(articleDescription)) {
    return "Content is empty";
  }
  return null;
};

export default validateArticleDescription;
