import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Stations from '../pages/Stations';
import Card from '../components/Card';


describe('Stations page', () => {
test('renders the stations page', () => {
  render(<Stations />);
  expect(screen.getByText('Click on a station to get more information')).toBeInTheDocument();
  expect(screen.getByRole('textbox')).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Go to previous page' })).toBeDisabled();
  expect(screen.getByRole('button', { name: 'Go to next page' })).not.toBeDisabled();
});
})


describe('Card component', () => {
  const paginated = {
    station_name: 'Station 1',
    address: 'Address 1',
    dep_station_count: 10,
    ret_station_count: 20,
    avg_distance_dep: 5000,
    avg_distance_ret: 6000,
    x: 10,
    y: 20,
  };

  it('renders correctly', () => {
    const { getByText } = render(<Card paginated={paginated} />);
    expect(getByText('Station 1')).toBeInTheDocument();
    expect(getByText('Address 1')).toBeInTheDocument();
    expect(getByText('More')).toBeInTheDocument();
  });

  it('shows updated data when "More" button is clicked', () => {
    const { getByText } = render(<Card paginated={paginated} />);
    fireEvent.click(getByText('More'));
    expect(getByText('Total trips to the station:')).toBeInTheDocument();
    expect(getByText('Total trips from the station:')).toBeInTheDocument();
    expect(getByText('Average distance departing from the station:')).toBeInTheDocument();
    expect(getByText('Average distance returning to the station:')).toBeInTheDocument();
    expect(getByText('Less')).toBeInTheDocument();
  });

  it('shows initial data when "Less" button is clicked', () => {
    const { getByText } = render(<Card paginated={paginated} />);
    fireEvent.click(getByText('More'));
    fireEvent.click(getByText('Less'));
    expect(getByText('Station 1')).toBeInTheDocument();
    expect(getByText('Address 1')).toBeInTheDocument();
    expect(getByText('More')).toBeInTheDocument();
  });
});


