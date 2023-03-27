import './App.css';
import { useState } from 'react';

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

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
        Change to {newButtonColor}
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
