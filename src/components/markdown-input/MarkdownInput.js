import React from 'react';
import './markdown-input.scss';

export const MarkdownInput = ({ setAppCompInput, getAppInput }) => {
  const handleInput = (event) => {
    setAppCompInput(event.target.value);
  };

  return (
    <textarea
      value={getAppInput}
      onChange={(event) => handleInput(event)}
      className="editor"
    ></textarea>
  );
};
