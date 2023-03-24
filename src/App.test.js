import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('correct initial color, and updates when clicked', () => {
  render(<App />);

  // find the element by the role of button and initial text
  const colorButton = screen.getByRole('button', {
    name: 'Change to blue',
  });

  //expect the background color is red
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' });

  //click Button
  fireEvent.click(colorButton);

  //expect the backgournd color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });

  // expect the button text to be 'change to red'
  expect(colorButton).toHaveTextContent('Change to red');
});

test('initial conditions', () => {
  render(<App />);

  // check that the button starts out enabled
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  expect(colorButton).toBeEnabled();

  // check that checkbox starts out unchecked
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
});

test('checkbox checked, button disabled; checkbox unchecked, button enabled', async () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });
  expect(checkbox).not.toBeChecked();

  await fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();
  expect(checkbox).toBeChecked();

  await fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
  expect(checkbox).not.toBeChecked();
});
