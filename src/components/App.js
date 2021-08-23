import React, { useState, useReducer } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import AppContext from "../contexts/AppContext";

import {CREATE_EVENT , DELETE_ALL_EVENTS} from "../actions";
import reducer from '../reducers'; //indexは省略可

import EventForm from './EventForm';
import Events from "./Events";

const App = () => {
  const [state, dispatch] = useReducer(reducer, []);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addEvent = (e) => {
    e.preventDefault();
    // dispatch(action)
    // action = { type: 'CREATE_EVENT', title, body}
    dispatch({
      type: CREATE_EVENT,
      title,
      body,
    });
    setTitle("");
    setBody("");
  };
  const deleteAllEvent = (e) => {
    e.preventDefault();
    const result = window.confirm('すべてのイベントを削除しますか？');
    if(result){
      dispatch({
        type: DELETE_ALL_EVENTS
      })
    }
  }

  const unCreatable = title.trim() === "" || body.trim() === "";

  const store = {
    state,title, body, setTitle, setBody, addEvent,
    unCreatable, deleteAllEvent, dispatch
  }
  return (
    <AppContext.Provider value={store}>
      <div className="container-fluid">
        <EventForm  />
        <Events dispatch={dispatch} state={state} />
      </div>
    </AppContext.Provider>
  )
}

export default App
