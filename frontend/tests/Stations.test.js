import { render, screen } from '@testing-library/react';
import Stations from './pages/Stations';

test('renders the stations page', () => {
  render(<Stations/>);
  expect(screen.getByText("Click on a station to get more information")).toBeInTheDocument();
  expect(screen.getByRole("textbox")).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "Go to previous page" })).toBeDisabled();
  expect(screen.getByRole("button", { name: "Go to next page" })).not.toBeDisabled();
});