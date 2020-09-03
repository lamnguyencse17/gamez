import React from "react";
import { convertFromRaw, EditorState } from "draft-js";
import dynamic from "next/dynamic";
import Editor from "draft-js-plugins-editor";
import createImagePlugin from "draft-js-image-plugin";
import createLinkifyPlugin from "draft-js-linkify-plugin";
const editorStyles = dynamic(() => import("./editorStyles.module.css"));

const linkifyPlugin = createLinkifyPlugin();
const imagePlugin = createImagePlugin();
const plugins = [linkifyPlugin, imagePlugin];

function Reader(props) {
  const draftMap = convertFromRaw(JSON.parse(props.articleContent));
  const editorState = EditorState.createWithContent(draftMap);
  return (
    <Editor
      className={editorStyles.editor}
      editorState={editorState}
      readOnly={true}
      plugins={plugins}
      onChange={() => {}}
    />
  );
}

export default Reader;
