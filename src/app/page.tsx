"use client";
import { useRef } from "react";
import EmailEditor, { EditorRef } from "react-email-editor";

type EmailEditorRef = EditorRef & {
  editor: {
    exportHtml: (
      callback: (data: { design: any; html: string }) => void
    ) => void;
    loadDesign: (design: any) => void;
  };
};

export default function Home() {
  const emailEditorRef = useRef<EmailEditorRef>(null);

  const exportHtml = () => {
    emailEditorRef.current?.editor.exportHtml(
      (data: { design: any; html: string }) => {
        const { html, design } = data;
        console.log(html);
        // console.log(design);
      }
    );
  };

  const onLoad = () => {
    // editor instance is created
    // you can load your template here;
    // const templateJson = {};
    // emailEditorRef.current.editor.loadDesign(templateJson);
  };

  const onReady = () => {
    // editor is ready
    console.log("onReady");
    const editorRef = emailEditorRef.current;
  };
  return (
    <div>
      <div>
        <button onClick={exportHtml}>Export HTML</button>
      </div>
      <div id="editor-container">
        <EmailEditor ref={emailEditorRef} onLoad={onLoad} onReady={onReady} />
      </div>
    </div>
  );
}
