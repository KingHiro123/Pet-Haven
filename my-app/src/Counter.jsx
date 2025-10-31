import React from "react";

function Counter() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <h2> Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;
