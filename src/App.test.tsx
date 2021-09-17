import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import {dialogs, messages, posts} from "./index";

test('renders learn react link', () => {
  render(<App p={posts} d={dialogs} m={messages} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
