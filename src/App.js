import React from 'react';
import './app.scss';
import { MarkdownInput } from './components/markdown-input/MarkdownInput';

function App() {
  const [appInput, setAppInput] = React.useState();

  const setAppCompInput = (input) => {
    setAppInput(input);
    console.log(input);
  };

  return (
    <div className="app">
      <div className="app-header">Markdown Previewer</div>
      <div className="md-io-wrapper">
        <MarkdownInput
          setAppCompInput={setAppCompInput}
          getAppInput={appInput}
        />
      </div>
    </div>
  );
}

export default App;
