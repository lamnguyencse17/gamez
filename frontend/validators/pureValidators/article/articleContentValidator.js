import { convertFromRaw } from "draft-js";

const validateArticleContent = (articleContent) => {
  try {
    const parsedContent = JSON.parse(articleContent);
    // eslint-disable-next-line no-unused-vars
    const editorState = convertFromRaw(parsedContent);
    let isEmpty = true;
    for (const block of parsedContent.blocks) {
      if (block.text !== "") {
        isEmpty = false;
      }
    }
    if (isEmpty) {
      return "Your article is empty";
    }
  } catch (err) {
    return "Your article is corrupted or something went wrong";
  }
  return null;
};

export default validateArticleContent;
