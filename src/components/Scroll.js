import React from 'react';

// Scroll component
const Scroll = (props) => {
  return (
    <div style={{ overflow: 'scroll', border: '2px solid white', height: '800px'}}>
      {props.children}
    </div>
  );
};

export default Scroll;