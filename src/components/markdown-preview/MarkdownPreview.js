import React from 'react';
import parse from 'html-react-parser';
import './markdown-preview.scss';

export const MarkdownPreview = ({ md }) => {
  let htm = parse(md);
  return <div className="preview">{htm}</div>;
};
