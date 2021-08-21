import React, { useState } from 'react'

const App = () => {
  const [ count, setCount ] = useState(0)
  const onClickButton = () => setCount((prevCount) => prevCount + 1)
  const onClickReset = () => setCount(0);
  return (
    <>
      <div>count : { count }</div>
      <button onClick={onClickButton}>up</button>
      <button onClick={onClickReset}>reset</button>
    </>
  )
}

export default App
