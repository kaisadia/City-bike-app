import { render, screen } from '@testing-library/react';
import App from '../src/App';

test('renders the landing page', () => {
  render(<App/>);
  expect(screen.getByRole("heading")).toHaveTextContent(/Helsinki city bike data/);
  expect(screen.getByRole("banner")).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "stations" })).not.toBeDisabled();
  expect(screen.getByRole("link", { name: "trips" })).not.toBeDisabled();
});