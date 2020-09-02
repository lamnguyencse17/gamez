import React from "react";
import { convertFromRaw, EditorState } from "draft-js";
import editorStyles from "./editorStyles.module.css";
import Editor from "draft-js-plugins-editor";
import createImagePlugin from "draft-js-image-plugin";
import createLinkifyPlugin from "draft-js-linkify-plugin";
const linkifyPlugin = createLinkifyPlugin();
const imagePlugin = createImagePlugin();
const plugins = [linkifyPlugin, imagePlugin];

function Reader(props) {
  const draftMap = convertFromRaw(JSON.parse(props.articleContent));
  const editorState = EditorState.createWithContent(draftMap);
  return (
    <>
      <div className={editorStyles.editor}>
        <Editor editorState={editorState} readOnly={true} plugins={plugins} />
      </div>
    </>
  );
}

export default Reader;
