import React from 'react';
import ListView from './ListView';
// import style from './style.css';
import styleCount from './styleCount.css';
import Counter from './Counter';

const App = () => {
  const items = [' Use Array.map', 'Not a for loop', 'Give each item a unique key', 'Avoid using array index as the key'];

  return (
    <div className="App">
      {/* <ListView items={items} /> */}
          <Counter />
    </div>
  );
};
export default App;