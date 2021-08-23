import React , {useContext} from  "react";
import AppContext from "../contexts/AppContext";

import {DELETE_EVENT} from '../actions';

const Event = ({event}) => {
  const { dispatch } = useContext(AppContext);
  const deleteEvent = ()=> {
    const id = event.id;
    const result = window.confirm(`イベント(id=${id})を本当に削除しますか？`);
    if(result){
      dispatch({
        type: DELETE_EVENT,
        id,
      })
    }
  }
  return (
    <tr>
      <td>{event.id}</td>
      <td>{event.title}</td>
      <td>{event.body}</td>
      <td>
        <button className="btn btn-danger" onClick={deleteEvent}>削除</button>
      </td>
    </tr>
  );
}

export default Event