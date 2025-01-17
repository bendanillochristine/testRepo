// src/components/Fruit.jsx
import React from "react";

const Fruit = ({ name, price, emoji }) => {
  return (
    <li>
      {emoji} {name} - ${price}
    </li>
  );
};

export default Fruit;
