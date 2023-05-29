import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { render, screen } from '@testing-library/react';
import App from './App';

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test('renders the landing page', () => {
  render(<App />, container);
  expect(screen.getByRole('heading')).toHaveTextContent(/Helsinki city bike data/);
  expect(screen.getByRole('banner')).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'stations' })).not.toBeDisabled();
  expect(screen.getByRole('link', { name: 'trips' })).not.toBeDisabled();
});
