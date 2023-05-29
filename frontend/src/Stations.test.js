import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { render, screen } from '@testing-library/react';
import Stations from './pages/Stations';

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
  render(<Stations />, container);
  expect(screen.getByText('Click on a station to get more information')).toBeInTheDocument();
  expect(screen.getByRole('textbox')).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Go to previous page' })).toBeDisabled();
  expect(screen.getByRole('button', { name: 'Go to next page' })).not.toBeDisabled();
});
