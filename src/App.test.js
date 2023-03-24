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
