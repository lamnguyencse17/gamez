import validateArticleContent from "./pureValidators/article/articleContentValidator";
import validateArticleTitle from "./pureValidators/article/articleTitleValidator";
import validateArticleDescription from "./pureValidators/article/articleDescriptionValidator";

const createArticleValidator = (article) => {
  const { articleContent, articleTitle, articleDescription } = article;
  let errors = {};
  errors.articleContent = validateArticleContent(articleContent);
  errors.articleTitle = validateArticleTitle(articleTitle);
  errors.articleDescription = validateArticleDescription(articleDescription);
  return errors;
};

export default createArticleValidator;
