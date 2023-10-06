import React from 'react';
import DataTable from './DataTable'


  const App = () => {
    const data = [
      { name: 'Amanda Velvet Shirt Man', price: '$333', Category: 'Fashion'},
        { name: 'Abercrombie Allen Brook shirt', price: '$70', Category: 'Fashion'},
        { name: 'Abercrombie Lake Arnok Shirt', price: '$60', Category: 'Fashion'},
        { name: 'Benco Shirt', price: '$29', Category: 'Fashion'},
    ];
  

  return (
    <div>
      <h1> Search Products : Shirt </h1>
      <DataTable data={data} />
    </div>
  );
};
export default App;