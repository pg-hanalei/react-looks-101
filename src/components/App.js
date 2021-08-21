import React, { useState, useReducer } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import reducer from '../reducers'; //indexは省略可

const App = () => {
  const [state, dispatch] = useReducer(reducer, []);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const addEvent = (e) => {
    e.preventDefault();
    // dispatch(action)
    // action = { type: 'CREATE_EVENT', title, body}
    dispatch({
      type: "CREATE_EVENT",
      title,
      body,
    });
    setTitle("");
    setBody("");
  };
  return (
    <div className="container-fluid">
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          <input id="formEventTitle"
                 className="form-control"
                 type="text"
                 value={title}
                 onChange={ (e) => setTitle(e.target.value)}/>
        </div>

        <div className="form-group">
          <label htmlFor="formEventBody">内容</label>
          <textarea id="formEventBody" className="form-control"
                    value={body}
                    onChange={ (e) => setBody(e.target.value)}/>
        </div>

        <button className="btn btn-primary" onClick={addEvent}>イベントを作成する</button>
        <button className="btn btn-danger">すべてのイベントを削除する</button>
      </form>

      <h4>イベント一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>ボディー</th>
            <th></th>
          </tr>
        </thead>
        <tbody>

        </tbody>
      </table>
    </div>
  )
}

export default App
