import { BubbleMenu, Editor } from "@tiptap/react";
import { RiBold, RiItalic, RiH1, RiH2 } from "react-icons/ri";

import "./popover.css";

type PopoverProps = {
  editor: Editor;
};

function Popover({ editor }: PopoverProps) {
  return (
    <BubbleMenu className="Popover" editor={editor}>
      <div
        className="icon"
        onClick={() => editor.chain().focus().toggleBold().run()}
      >
        <RiBold />
      </div>
      <div
        className="icon"
        onClick={() => editor.chain().focus().toggleItalic().run()}
      >
        <RiItalic />
      </div>
      <div
        className="icon"
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
      >
        <RiH1 />
      </div>
      <div
        className="icon"
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
      >
        <RiH2 />
      </div>
    </BubbleMenu>
  );
}

export { Popover };
