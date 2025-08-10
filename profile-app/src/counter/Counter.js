import React, {useState} from 'react'
import "./Counter.css"

const Counter = () => {
    const [count, setCount] = useState(0);

    const increase = () => {
        setCount((val)=> val + 1)
    }

     const decrease = () => {
        setCount((val)=> val - 1)
    }

         const reset = () => {
        setCount( 0 )
    }


  return (
    <div className='counter-div'>
        <h1> {count} </h1>
        <button onClick={decrease}> -1  </button>
        <button onClick={increase}> + 1 </button>
        <button onClick={reset}> Reset </button>

    </div>
  )
}

export default Counter
