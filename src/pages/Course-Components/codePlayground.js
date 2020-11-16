import React, { useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Row, Col } from 'react-bootstrap';
import '@fortawesome/fontawesome-free/css/all.css';
import '../../styles/VideoPlayer.css';
import CodeEditor from './codeEditor';
// import OutputPanel from './outputPanel';

function CodePlayground() {
  const editor = useRef(null);

//   const focusEditor = () => {
//     editor.current.focus();
//   };

  return (
    <div style={{ marginRight: '500px' }}>
      <h1>Code Playground</h1>
      <CodeEditor />
    </div>
  );
}

export default CodePlayground;
