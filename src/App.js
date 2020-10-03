import React from 'react';
import './app.scss';
import { MarkdownInput } from './components/markdown-input/MarkdownInput';
import { MarkdownPreview } from './components/markdown-preview/MarkdownPreview';
import MarkdownIt from 'markdown-it';
import hljs from 'highlight.js';
import { initialState } from './initialState';

function App() {
  const highlightCodes = (str, lang) => {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value;
      } catch (__) {}
    }
    return '';
  };
  let convertToMd = new MarkdownIt({
    breaks: true,
    html: true,
    highlight: highlightCodes,
  });
  const [appInput, setAppInput] = React.useState(initialState);
  const [md, setMd] = React.useState('');

  const setAppCompInput = (input) => {
    setAppInput(input);
    setMd(convertToMarkdown(input, convertToMd));
  };

  const convertToMarkdown = (input, convertToMd) => {
    let convertedValue = convertToMd.render(input);
    return convertedValue;
  };

  if (md === '') {
    setMd(convertToMarkdown(initialState, convertToMd));
  }

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
