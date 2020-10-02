import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Markdown Previewer header', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Markdown Previewer/i);
  expect(linkElement).toBeInTheDocument();
});
