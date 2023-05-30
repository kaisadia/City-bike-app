import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Trips from '../pages/Trips';

describe('Trips page', () => {
it('renders the stations page', () => {
  render(<Trips />);
  expect(screen.getByText('Search for journeys')).toBeInTheDocument();
  expect(screen.getByRole('table', { name: 'simple table' })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Go to next page' })).not.toBeDisabled();
  expect(screen.getByRole('button', { name: 'Go to previous page' })).toBeDisabled();
});
})

describe('Trips table component', () => {
  it('updates search query correctly', () => {
    const { getAllByRole } = render(<Trips />);
    const inputs = getAllByRole('textbox');
    fireEvent.change(inputs[0], { target: { value: 'Station 1' } });
    fireEvent.change(inputs[1], { target: { value: 'Station 2' } });
    fireEvent.change(inputs[2], { target: { value: '01/01/2023' } });
    expect(inputs[0]).toHaveValue('Station 1');
    expect(inputs[1]).toHaveValue('Station 2');
    expect(inputs[2]).toHaveValue('01/01/2023');
  });
})