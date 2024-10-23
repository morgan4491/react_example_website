import { useState } from 'react';

import Header from "./components/Header";

function App() {
  const firstName = 'Matt';

  const [count, setCount] = useState(0);  // useState(0) - the zero sets the initial value to 0. count is the initial value and setCount is the new value. useState store to memory the new value for 'count' 

  const [color, setColor] = useState('');

  const increaseCount = () => {
    setCount(count + 1);  // The setCount 'setter function' takes what you want the variable to be        
  };

  const decreaseCount = () => {
    if (count) {
      setCount(count - 1);
    }
  };

  const startCountdown = () => {
    if (count > 0) {
      // Start an interval (store it so we can clear it)
      // In the code block, decrease count by one every second (1000 millisecond)
      const timer = setInterval(() => {
        // If count has reached zero, clear the interval
        setCount((prevCount) => {
          if (prevCount === 0) {
            clearInterval(timer);
            return prevCount;
          }
          return prevCount - 1;
        });
        }, 1000);
      }
  };

  const handleInputChange = (eventObj: React.ChangeEvent<HTMLInputElement>) => {
    setColor(eventObj.target.value);
  };

    return (
      <>
        <Header color={color} count={count} userName={firstName} />

        <h2>{count}</h2>

        <div>
          <input onChange={handleInputChange} type="text" placeholder='Enter a color value'/>
          <button>Set Color</button>
        </div>

        <div>
          <button onClick={increaseCount}>Increase</button>
          {/* Create a button that decreases count by one */}
          <button onClick={decreaseCount}>Decrease</button>

          <button onClick={startCountdown}>Start Countdown</button>
        </div>
      </>
    )
  }

  export default App
