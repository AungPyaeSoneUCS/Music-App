import React, { useState } from 'react'

const TextExample = () => {

  const [text, setText] = useState("Hello World")

  function textChange(e){
    setText(e.target.value)
  }

  return (
    <div>

        <h1> {text} </h1>
        <input value={text} onChange={textChange} type='text' />
      
    </div>
  )
}

export default TextExample
