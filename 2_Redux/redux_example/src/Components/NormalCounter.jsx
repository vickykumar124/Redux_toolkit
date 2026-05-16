import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increament = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
      }}
    >
      <button onClick={increament}>+</button>

      <p>Count : {count}</p>

      <button onClick={decrement}>-</button>
    </div>
  );
}

export default Counter;