import React, { Component } from "react";
import { EditorState, RichUtils } from "draft-js";
import Editor, { composeDecorators } from "draft-js-plugins-editor";
import createEmojiPlugin from "draft-js-emoji-plugin";
import editorStyles from "./EditSpace/editorStyles.module.css";
import createToolbarPlugin from "draft-js-static-toolbar-plugin";
import EditorToolbar from "./EditSpace/EditorToolbar";
import createImagePlugin from "draft-js-image-plugin";
import createAlignmentPlugin from "draft-js-alignment-plugin";
import createFocusPlugin from "draft-js-focus-plugin";
import createResizeablePlugin from "draft-js-resizeable-plugin";
import createBlockDndPlugin from "draft-js-drag-n-drop-plugin";
import createDragNDropUploadPlugin from "@mikeljames/draft-js-drag-n-drop-upload-plugin";
import handleUpload from "./helpers/handleUpload";

const focusPlugin = createFocusPlugin();
const resizeablePlugin = createResizeablePlugin();
const blockDndPlugin = createBlockDndPlugin();
const alignmentPlugin = createAlignmentPlugin();
const { AlignmentTool } = alignmentPlugin;

const decorator = composeDecorators(
  resizeablePlugin.decorator,
  alignmentPlugin.decorator,
  focusPlugin.decorator,
  blockDndPlugin.decorator
);

const imagePlugin = createImagePlugin({ decorator });
const staticToolbarPlugin = createToolbarPlugin();
const { Toolbar } = staticToolbarPlugin;

const dragNDropFileUploadPlugin = createDragNDropUploadPlugin({
  handleUpload: () => {},
  addImage: imagePlugin.addImage,
});

const emojiPlugin = createEmojiPlugin({
  allowImageCache: true,
});

const { EmojiSelect } = emojiPlugin;
const plugins = [
  dragNDropFileUploadPlugin,
  emojiPlugin,
  staticToolbarPlugin,
  blockDndPlugin,
  focusPlugin,
  alignmentPlugin,
  resizeablePlugin,
  imagePlugin,
];

class EditSpace extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
      isClient: false,
    };
  }
  handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.setState({ ...this.state, editorState: newState });
      return "handled";
    }
    return "not-handled";
  };
  componentDidMount() {
    this.setState({ ...this.state, isClient: true });
  }
  focus = () => {
    this.editor.focus();
  };
  onChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  render() {
    const { isClient, editorState } = this.state;
    return (
      <>
        {isClient ? (
          <>
            <EditorToolbar ToolBar={Toolbar} EmojiSelect={EmojiSelect} />
            <div className={editorStyles.editor} onClick={focus}>
              <Editor
                editorState={editorState}
                onChange={this.onChange}
                handleKeyCommand={this.handleKeyCommand}
                plugins={plugins}
                ref={(element) => {
                  this.editor = element;
                }}
              />
              <AlignmentTool />
            </div>
          </>
        ) : (
          <></>
        )}
      </>
    );
  }
}

export default EditSpace;
