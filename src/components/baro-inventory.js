import React from 'react';

const Inventory = (props) => {
  return (
    <div className="voidItem">
      <h1>{props.name}</h1>
      <p>Price:</p>
      <p>{props.price} Ducats</p>
      <p>{props.credits} Credits</p>
    </div>
  )
}

export default Inventory;
