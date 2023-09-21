import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button className='m-2' onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button className='m-2' onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;