import './App.css';
import { useState } from 'react';

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

  const [buttonStatus, setButtonStatus] = useState(false);
  return (
    <div>
      <button
        style={{ backgroundColor: buttonColor }}
        onClick={() => {
          setButtonColor(newButtonColor);
        }}
        disabled={buttonStatus}
      >
        Change to {newButtonColor}
      </button>
      <input type='checkbox' onClick={() => setButtonStatus(!buttonStatus)} />
    </div>
  );
}

export default App;
