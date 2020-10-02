import React from 'react';
const marked = require('marked');

export const MarkdownPreview = ({ md }) => {
  let htm = marked(`${md}`);
  return <div id="preview">{htm}</div>;
};
