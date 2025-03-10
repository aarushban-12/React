import React, {useState, useEffect} from "react";

function MyComponent() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Component has been rendered");

    return () => {
      console.log("Component is unmounting")
    };
  });

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count+1)}> 
        Increment Count
      </button>
    </div>
  );
}

export default MyComponent;
