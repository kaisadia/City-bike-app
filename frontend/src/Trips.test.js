import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { render, screen } from '@testing-library/react';
import Trips from './pages/Trips';

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

test('renders the stations page', () => {
  render(<Trips />, container);
  expect(screen.getByText('Search for journeys')).toBeInTheDocument();
  expect(screen.getByRole('table', { name: 'simple table' })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Go to next page' })).not.toBeDisabled();
  expect(screen.getByRole('button', { name: 'Go to previous page' })).toBeDisabled();
});
