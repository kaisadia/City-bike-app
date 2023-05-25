import { render, screen } from '@testing-library/react';
import Trips from './pages/Trips';

test('renders the stations page', () => {
  render(<Trips/>);
  expect(screen.getByText("Search for journeys")).toBeInTheDocument();
  expect(screen.getByRole("table", { name: "simple table" })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "Go to next page" })).not.toBeDisabled();
  expect(screen.getByRole("button", { name: "Go to previous page" })).toBeDisabled();
});