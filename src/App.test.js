import { render, screen } from '@testing-library/react';
import App from './App';

test('Amazing! The alien zapped the lizard!', () => {
  render(<App />);
  const linkElement = screen.getByText(/the alien zapped/i);
  expect(linkElement).toBeInTheDocument();
});
