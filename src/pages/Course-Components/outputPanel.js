import React, { useState, useRef } from 'react';
import { Editor, EditorState, ContentState } from 'draft-js';
import 'draft-js/dist/Draft.css';

export default function OutputPanel(props) {
  const plainText = props.printOut;
  const content = ContentState.createFromText(plainText);
  const [editorState, setEditorState] = useState(() =>
    EditorState.createWithContent(content)
  );

  const editor = useRef(null);
  const focusEditor = () => {
    editor.current.focus();
  };

  return (
    <div
      style={{
        border: '2px solid gray',
        minHeight: '20em',
        cursor: 'text',
        padding: '5px',
      }}
      onClick={focusEditor}
    >
      <Editor
        ref={editor}
        editorState={editorState}
        onChange={setEditorState}
        placeholder="Output"
        readOnly="true"
      />
    </div>
  );
}
