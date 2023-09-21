import React from 'react';

const ListView = ({ items }) => {
  return (
    <div className='container'>
      <h2>The "React Way" to Render a List</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListView;