import React, { useState } from 'react'

const App = (props) => {

  const [state, setState] = useState(props);
  const { name, price } = state;
  const onChangeText = (event) =>  setState({...state, name: event.target.value})
  const onChangePrice = (event) =>  setState({...state, price: event.target.value})
  const onClickReset = () => setState(props);

  return(
    <>
      <p>現在の{name}は、{price}円です</p>
      <input value={name} type="text" onChange={onChangeText}/>
      <input value={price} type="text" onChange={onChangePrice}/>
      <button onClick={onClickReset}>reset</button>
    </>
  )
};

App.defaultProps = {
  name: "",
  price: 0,
};

export default App
