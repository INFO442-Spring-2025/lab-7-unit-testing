import { fireEvent, render, screen } from '@testing-library/react';
import Form from './Form';

let testData = [
    {
        "name": "One",
        "role": "Associate Teaching Professor",
        "course": "INFO 999",
        "img": "",
        "netId": "qqq",
        "isRequired": false
    },
    {
        "name": "Two",
        "role": "Associate Professor",
        "course": "INFO 999",
        "img": "",
        "netId": "zzz",
        "isRequired": false
    }
  ]


test('accepts valid text input', () => {
  render(<Form data={testData} />);

  const textbox = screen.getByRole('textbox');
  fireEvent.change(textbox, { target: { value: "INFO 999" } });

  const submitButton = screen.getByText(/submit/i);
  fireEvent.click(submitButton);

  // TODO: this test is brittle. If the message language is ever changed, the test will need to be updated.
  // Consider how the HTML and test might be made more flexible.
  const successMessage = screen.getByText('Thank you for submitting!');
  expect(successMessage).toBeInTheDocument();

  // Form is gone, replaced by success message
  const theForm = screen.queryByRole('form');
  expect(theForm).not.toBeInTheDocument();

});

test('rejects invalid text input', async () => {
  render(<Form data={testData} />);

  const textbox = screen.getByRole('textbox');
  fireEvent.change(textbox, { target: { value: "9" } });

  const submitButton = screen.getByText('Submit');
  fireEvent.click(submitButton);

  // Error message is displayed
  const errorMessage = screen.getByText(/Error: /);
  expect(errorMessage).toBeInTheDocument();

  // Form is still visible
  const theForm = screen.getByRole('form');
  expect(theForm).toBeInTheDocument();
});
