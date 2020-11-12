import React, { useState, useRef, useEffect, convertToRaw } from 'react';
import ReactDOM from 'react-dom';
import { Editor, EditorBlock, EditorState, ContentState } from 'draft-js';
import './codeEditor.css';
import OutputPanel from './outputPanel';
import 'bootstrap/dist/css/bootstrap.min.css';

class Line extends React.Component {
  render() {
    const { block, contentState } = this.props;
    const lineNumber =
      contentState
        .getBlockMap()
        .toList()
        .findIndex((item) => item.key === block.key) + 1;
    return (
      <div className="line" data-line-number={lineNumber}>
        <div className="line-text">
          <EditorBlock {...this.props} />
        </div>
      </div>
    );
  }
}

const blockRendererFn = () => ({
  component: Line,
});

function CodeEditor() {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [PrintThis, setPrintThis] = useState('');

  const editor = useRef(null);
  const focusEditor = () => {
    editor.current.focus();
  };

  const outputComponent = [];
  return (
    <>
      <div
        style={{
          border: '2px solid gray',
          minHeight: '40em',
          cursor: 'text',
          padding: '5px',
        }}
        onClick={focusEditor}
      >
        <Editor
          ref={editor}
          editorState={editorState}
          onChange={setEditorState}
          blockRendererFn={blockRendererFn}
        />{' '}
      </div>
      <button
        className="btn btn-secondary mt-3"
        style={{ width: '100px', fontSize: '1vw' }}
        onClick={() => {
          setPrintThis(
            String(editorState.getCurrentContent().getPlainText('\u0001'))
          );
          console.log(PrintThis);
        }}
      >
        Run
      </button>
      <div className="mt-4">
        <OutputPanel printOut={PrintThis} key={PrintThis} />
      </div>
    </>
  );
}

export default CodeEditor;
