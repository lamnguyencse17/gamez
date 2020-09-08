import React, { Component } from "react";
import {
  EditorState,
  RichUtils,
  AtomicBlockUtils,
  convertToRaw,
} from "draft-js";

import Editor, { composeDecorators } from "draft-js-plugins-editor";
import editorStyles from "./EditSpace/editorStyles.module.css";
import createToolbarPlugin from "draft-js-static-toolbar-plugin";
import EditorToolbar from "./EditSpace/EditorToolbar";
import createImagePlugin from "draft-js-image-plugin";
import createAlignmentPlugin from "draft-js-alignment-plugin";
import createFocusPlugin from "draft-js-focus-plugin";
import createResizeablePlugin from "draft-js-resizeable-plugin";
import createBlockDndPlugin from "draft-js-drag-n-drop-plugin";
import createLinkifyPlugin from "draft-js-linkify-plugin";
import handleUpload from "./helpers/handleUpload";

const focusPlugin = createFocusPlugin();
const resizeablePlugin = createResizeablePlugin();
const blockDndPlugin = createBlockDndPlugin();
const alignmentPlugin = createAlignmentPlugin();
const linkifyPlugin = createLinkifyPlugin();
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

const plugins = [
  linkifyPlugin,
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
    this.props.changeContent(
      JSON.stringify(convertToRaw(editorState.getCurrentContent()))
    );
    this.setState({
      editorState,
    });
  };
  handleDrop = async (selection, files) => {
    const url = await handleUpload(files);
    const urlType = "IMAGE";
    const contentState = this.state.editorState.getCurrentContent();
    const contentStateWithEntity = contentState.createEntity(
      urlType,
      "IMMUTABLE",
      { src: url }
    );
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    const newEditorState = AtomicBlockUtils.insertAtomicBlock(
      this.state.editorState,
      entityKey,
      " "
    );
    this.props.setThumbnail({ isSet: true, url });
    this.onChange(newEditorState);
    return "handled";
  };

  render() {
    const { isClient, editorState } = this.state;
    return (
      <>
        {isClient ? (
          <>
            <EditorToolbar ToolBar={Toolbar} />
            <div className={editorStyles.editor} onClick={focus}>
              <Editor
                readOnly={this.props.readOnly}
                editorState={editorState}
                onChange={this.onChange}
                handleKeyCommand={this.handleKeyCommand}
                handleDroppedFiles={this.handleDrop}
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
