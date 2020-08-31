import validator from "validator";

const validateArticleTitle = (articleTitle) => {
  if (validator.isEmpty(articleTitle)) {
    return "Content is empty";
  }
  return null;
};

export default validateArticleTitle;
