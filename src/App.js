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
    <div class="app">
      <h1 class="app-header">Markdown Previewer</h1>
      <div class="md-io-wrapper">
        <MarkdownInput
          setAppCompInput={setAppCompInput}
          getAppInput={appInput}
        />
      </div>
    </div>
  );
}

export default App;
