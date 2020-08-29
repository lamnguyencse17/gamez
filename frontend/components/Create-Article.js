import React, { useState, useEffect } from "react";
import { Editor, EditorState } from "draft-js";

function CreateArticle(props) {
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );
  const [isClient, setClient] = useState(false);
  useEffect(() => {
    setClient(true);
  });
  return (
    <div>
      {isClient ? (
        <Editor editorState={editorState} onChange={setEditorState} />
      ) : (
        <></>
      )}
    </div>
  );
}

export default CreateArticle;
