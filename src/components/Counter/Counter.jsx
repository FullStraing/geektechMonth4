import React, { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0)

  const decrease = () => {
    setCount(count - 1)
  }
  const increase = () => {
    setCount(count +1)
  }

  return(
    <div className="App">
        <h1>{count}</h1>
        <input 
          type='number'
          onChange={(event) => setCount(event.target.value)}
        />

        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>

    </div>
  )
}

export default Counter