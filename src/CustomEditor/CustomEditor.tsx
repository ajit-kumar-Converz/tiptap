import Link from "@tiptap/extension-link";
import Typography from "@tiptap/extension-typography";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Popover } from "../PopOver/PopOver";
import { useEffect, useState } from "react";
import Dropcursor from "@tiptap/extension-dropcursor";
import Image from "@tiptap/extension-image";
import { CustomNode } from "../Extension";

import dummy from "../dummy.json";

const CustomEditor = () => {
  // define your extension array
  const extensions = [
    StarterKit,
    Typography,
    Image,
    Dropcursor,
    Link.configure({
      linkOnPaste: false,
      openOnClick: false,
    }),
    CustomNode,
  ];

  const content = dummy;

  const [editorHtmlContent, setEditorHtmlContent] = useState("");

  const editor: any = useEditor({
    extensions,
    content,
    onUpdate: ({ editor }) => {
      setEditorHtmlContent(editor.getHTML());
    },
  });

  if (!editor) {
    return null;
  }
  const $doc = editor.$doc;

  console.log($doc);

  console.log(editor.getJSON());
  console.log(editorHtmlContent);

  const handleChange = (e: any) => {
    addImage(
      "https://images.pexels.com/photos/4195407/pexels-photo-4195407.jpeg?auto=compress&cs=tinysrgb&w=800"
    );
    if (!e?.target?.files?.[0]) return;
    // upload(e.target.files[0])
    //   .then((res: any) => addImage(res))
    //   .catch((err: any) => console.error(err));
  };

  // dummy upload image function
  function uploadImage(file: any) {
    return new Promise((resolve, reject) => {
      resolve("https://source.unsplash.com/kSfv9njQVc8/800x400");
    });
  }

  const upload = (file: File) => {
    // handle upload logic here
  };

  // Adding image to the editor
  const addImage = (url: string) => {
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };
  return (
    <>
      <Popover editor={editor} />
      <EditorContent editor={editor} />
      <input
        className="hidden"
        id="upload"
        type="file"
        onChange={handleChange}
      />
    </>
  );
};

export default CustomEditor;
