import React, {useContext} from 'react';
import AppContext from "../contexts/AppContext";


const EventForm = (props) => {
  const { title, body, setTitle, setBody, addEvent, unCreatable, deleteAllEvent, state } = useContext(AppContext);

  return (
    <>
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
        <button className="btn btn-primary" onClick={addEvent} disabled={unCreatable}>イベントを作成する</button>
        <button className="btn btn-danger" onClick={deleteAllEvent} disabled={state.length === 0}>すべてのイベントを削除する</button>
      </form>
    </>
  );
}

export default EventForm;


