import { NodeViewWrapper } from "@tiptap/react";
import React, { useState } from "react";

const Card = (props: any) => {
  console.log(props, "custom react component");
  console.log(props.getPos(), "custom react component");

  const change = (event: any) => {
    props.updateAttributes({
      content: event.target.textContent,
    });
  };

  return (
    <NodeViewWrapper className="custom-card">
      <div
        contentEditable="true"
        onInput={change}
        suppressContentEditableWarning
      >
        {props.node.attrs.content}
      </div>
    </NodeViewWrapper>
  );
};

export default Card;
