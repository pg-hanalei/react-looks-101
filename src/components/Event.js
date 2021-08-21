import React from "react";

const Event = ({event, dispatch}) => {
  const deleteEvent = ()=> {
    const id = event.id;
    dispatch({
      type: "DELETE_EVENT",
      id,
    })
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