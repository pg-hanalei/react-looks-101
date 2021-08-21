import React, { useEffect, useState } from 'react'

const App = (props) => {

  const [state, setState] = useState(props);
  const { name, price } = state;
  const onChangeText = (event) =>  setState({...state, name: event.target.value})
  const onChangePrice = (event) =>  setState({...state, price: event.target.value})
  const onClickReset = () => setState(props);

  //こっちが後 つまりレンダリングされた後に実行される
  useEffect(()=>{
    console.log('useEffect is invoked.')
  },[]);

  useEffect(()=>{
    console.log('name.')
  },[name]);


  //こっちが先
  const renderPeriod = () => {
    console.log("renderPeriod")
    return '。';
  }

  return(
    <>
      <p>現在の{name}は、{price}円です{renderPeriod()}</p>
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
