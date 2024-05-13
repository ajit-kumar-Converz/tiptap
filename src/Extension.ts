import { mergeAttributes, Node } from "@tiptap/core";
import { ReactNodeViewRenderer } from "@tiptap/react";

import Card from "./Card/Card";

export const CustomNode = Node.create({
  name: "customCard",

  group: "block",

  atom: true,

  addAttributes() {
    return {
      content: "text",
    };
  },

  parseHTML() {
    return [
      {
        tag: "custom-card",
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ["custom-card", mergeAttributes(HTMLAttributes)];
  },

  addNodeView() {
    return ReactNodeViewRenderer(Card);
  },
});
