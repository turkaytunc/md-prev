import React from 'react';
import './app.scss';
import { MarkdownInput } from './components/markdown-input/MarkdownInput';
import { MarkdownPreview } from './components/markdown-preview/MarkdownPreview';
import marked from 'marked';

function App() {
  const [appInput, setAppInput] = React.useState();
  const [md, setMd] = React.useState('');

  const setAppCompInput = (input) => {
    setAppInput(input);
    setMd(convertToMarkdown(input));
  };

  const convertToMarkdown = (input) => {
    let convertedValue = marked(input);
    return convertedValue;
  };

  return (
    <div className="app">
      <div className="app-header">Markdown Previewer</div>
      <div className="md-io-wrapper">
        <MarkdownInput
          setAppCompInput={setAppCompInput}
          getAppInput={appInput}
        />
        <MarkdownPreview md={md} />
      </div>
    </div>
  );
}

export default App;
