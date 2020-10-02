import React from 'react';
var parse = require('html-react-parser');

export const MarkdownPreview = ({ md }) => {
  let htm = parse(md);
  return <div id="preview">{htm}</div>;
};
