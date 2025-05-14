import { render, screen } from '@testing-library/react';
import App from './App';

test('renders a title', () => {
  render(<App />);
  // use a test id to find exactly the right element 
  // https://testing-library.com/docs/queries/bytestid
  const linkElement = screen.getByTestId('header-title')
  expect(linkElement).toBeInTheDocument();
});
