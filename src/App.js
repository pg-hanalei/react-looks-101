import React, { useState } from 'react'

const App = (props) => {

  const [name, setName] = useState(props.name);
  const [price, setPrice] = useState(props.price);
  const onChangeText = (e) => setName(e.target.value)
  const onChangePrice = (e) => setPrice(e.target.value)
  const onClickReset = () => {
    setPrice(0)
    setName("");
  }
  return(
    <>
      <p>現在の{name}は、{price}円です</p>
      <input value={name} type="text" onChange={onChangeText}/>
      <input value={price} type="text" onChange={onChangePrice}/>
      <button onClick={onClickReset}>reset</button>
    </>
  )
}

App.defaultProps = {
  name: "",
  price: 1000,
}

export default App
