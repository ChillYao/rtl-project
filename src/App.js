import './App.css';
import { useState } from 'react';

export const replaceCamelWithSpace = (colorName) => {
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
};

function App() {
  const [buttonColor, setButtonColor] = useState('MediumVioletRed');
  const newButtonColor =
    buttonColor === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed';

  const [buttonStatus, setButtonStatus] = useState(false);

  return (
    <div>
      <button
        style={{ backgroundColor: buttonStatus ? 'grey' : buttonColor }}
        onClick={() => {
          setButtonColor(newButtonColor);
        }}
        disabled={buttonStatus}
      >
        Change to {replaceCamelWithSpace(newButtonColor)}
      </button>
      <input
        type='checkbox'
        id='disable-button-checkbox'
        onClick={() => setButtonStatus(!buttonStatus)}
      />
      <label htmlFor='disable-button-checkbox'>Disable button</label>
    </div>
  );
}

export default App;
