import React from 'react';
import './app.scss';
import { MarkdownInput } from './components/markdown-input/MarkdownInput';

const initialMd = `# h1
## h2

[this is a link](https://turkaytunc.com)

\`this is a inline code\`
\```
console.log("hello");
\```
> block quote

![alt text](https://turkaytunc.com/footer/github-icon-white.png)

1. first item
2. second item
3. another

**bold-text**`;

function App() {
  const [appInput, setAppInput] = React.useState();
  const [md, setMd] = React.useState('');

  const setAppCompInput = (input) => {
    setAppInput(input);
    console.log(input);
  };

  const convertToMarkdown = (input) => {
    let convertedValue = window.marked(input);
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
      </div>
    </div>
  );
}

export default App;
