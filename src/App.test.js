import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { replaceCamelWithSpace } from './App';

test('correct initial color, and updates when clicked', () => {
  render(<App />);

  // find the element by the role of button and initial text
  const colorButton = screen.getByRole('button', {
    name: 'Change to Midnight Blue',
  });

  //expect the background color is MediumVioletRed
  expect(colorButton).toHaveStyle({ backgroundColor: 'MediumVioletRed' });

  //click Button
  fireEvent.click(colorButton);

  //expect the backgournd color to be MidnightBlue
  expect(colorButton).toHaveStyle({ backgroundColor: 'MidnightBlue' });

  // expect the button text to be 'change to MediumVioletRed'
  expect(colorButton).toHaveTextContent('Change to Medium Violet Red');
});

test('initial conditions', () => {
  render(<App />);

  // check that the button starts out enabled
  const colorButton = screen.getByRole('button', {
    name: 'Change to Midnight Blue',
  });
  expect(colorButton).toBeEnabled();

  // check that checkbox starts out unchecked
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
});

test('checkbox checked, button disabled; checkbox unchecked, button enabled', async () => {
  render(<App />);
  const colorButton = screen.getByRole('button', {
    name: 'Change to Midnight Blue',
  });
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });
  expect(checkbox).not.toBeChecked();

  await fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();
  expect(checkbox).toBeChecked();

  await fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
  expect(checkbox).not.toBeChecked();
});

test('button grey when disabled', async () => {
  render(<App />);
  const colorButton = screen.getByRole('button', {
    name: 'Change to Midnight Blue',
  });
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });

  await fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: 'grey' });
  await fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ backgroundColor: 'grey' });
  await fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: 'MediumVioletRed' });
  await fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ backgroundColor: 'MidnightBlue' });
});

describe('space before camel-case capital letters', () => {
  test('works for no inner capital letters', () => {
    expect(replaceCamelWithSpace('Red')).toBe('Red');
  });
  test('works for one inner capital letter', () => {
    expect(replaceCamelWithSpace('MidnightBlue')).toBe('Midnight Blue');
  });
  test('works for multiple inner capital letters', () => {
    expect(replaceCamelWithSpace('MediumVioletRed')).toBe('Medium Violet Red');
  });
});
