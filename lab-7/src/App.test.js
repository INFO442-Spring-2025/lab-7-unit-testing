import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders a title', () => {
  render(<App />);
  // use a test id to find exactly the right element 
  // https://testing-library.com/docs/queries/bytestid
  const linkElement = screen.getByTestId('header-title')
  expect(linkElement).toBeInTheDocument();
});

test('class cards are not displayed on load', () => {
  render(<App />);

  expect(screen.queryByTitle('Class and instructor')).not.toBeInTheDocument()
})

test('class cards are displayed after click of toggle', () => {
  render(<App />);

  // Not there on page load
  expect(screen.queryByTitle('Class and instructor')).not.toBeInTheDocument()

  fireEvent.click(screen.getByTestId('card-toggle'));

  // Multiple there after click
  const cards = screen.queryAllByTitle(/Details of*/);
  expect(cards.length).toBeGreaterThan(0)
})