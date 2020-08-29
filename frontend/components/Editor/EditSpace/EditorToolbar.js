import React from "react";
import HeadlinesButton from "./HeadlinesButton";
import {
  ItalicButton,
  BoldButton,
  UnderlineButton,
  CodeButton,
  UnorderedListButton,
  OrderedListButton,
  BlockquoteButton,
  CodeBlockButton,
} from "draft-js-buttons";
import { Separator } from "draft-js-static-toolbar-plugin";

function EditorToolbar(props) {
  const { ToolBar, EmojiSelect } = props;
  return (
    <ToolBar>
      {(externalProps) => (
        <div className="space-x-3 p-1">
          <div className="inline-block">
            <BoldButton {...externalProps} />
          </div>
          <div className="inline-block">
            <ItalicButton {...externalProps} />
          </div>
          <div className="inline-block">
            <UnderlineButton {...externalProps} />
          </div>
          <div className="inline-block">
            <CodeButton {...externalProps} />
          </div>
          <div className="inline-block">
            <Separator {...externalProps} />
          </div>
          <div className="inline-block">
            <HeadlinesButton {...externalProps} />
          </div>
          <div className="inline-block">
            <UnorderedListButton {...externalProps} />
          </div>
          <div className="inline-block">
            <OrderedListButton {...externalProps} />
          </div>
          <div className="inline-block">
            <BlockquoteButton {...externalProps} />
          </div>
          <div className="inline-block">
            <CodeBlockButton {...externalProps} />
          </div>
          <div className="inline-block p-2">
            <EmojiSelect />
          </div>
        </div>
      )}
    </ToolBar>
  );
}

export default EditorToolbar;
