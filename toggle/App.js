import React from "react";
import useToggle from "./toggle";

const MyComponent = () => {
  const [isOn, toggle] = useToggle(false);
  return (
    <div>
      <button onClick={toggle}>Toggle</button>
      <p>{isOn ? 'ON' : 'OFF'}</p>
    </div>
  );
};

export default MyComponent;
