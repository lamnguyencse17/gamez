import React, { useState, useEffect } from "react";
import { EditorState, RichUtils } from "draft-js";
import Editor from "draft-js-plugins-editor";
import createEmojiPlugin from "draft-js-emoji-plugin";
import editorStyles from "./EditSpace/editorStyles.module.css";
import createToolbarPlugin from "draft-js-static-toolbar-plugin";
import EditorToolbar from "./EditSpace/EditorToolbar";
const staticToolbarPlugin = createToolbarPlugin();
const { Toolbar } = staticToolbarPlugin;

const emojiPlugin = createEmojiPlugin({
  allowImageCache: true,
});

const { EmojiSelect } = emojiPlugin;

function EditSpace(props) {
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );
  const [isClient, setClient] = useState(false);
  const handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return "handled";
    }
    return "not-handled";
  };
  useEffect(() => {
    setClient(true);
  });
  let editor;
  const focus = () => editor.focus();
  return (
    <div className="container mx-auto border-black border-2 mt-10">
      {isClient ? (
        <>
          <EditorToolbar ToolBar={Toolbar} EmojiSelect={EmojiSelect} />
          <div className={editorStyles.editor} onClick={focus}>
            <Editor
              editorState={editorState}
              onChange={setEditorState}
              handleKeyCommand={handleKeyCommand}
              plugins={[emojiPlugin, staticToolbarPlugin]}
              ref={(element) => {
                editor = element;
              }}
            />
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default EditSpace;
