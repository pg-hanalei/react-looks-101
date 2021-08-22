import React, { useContext}  from 'react';


import Event from "./Event";
import AppContext from "../contexts/AppContext";

const Events = (props) => {
  const { dispatch, state } = props;
  const value = useContext(AppContext);
  return(
    <>
      {/*<AppContext.Consumer>*/}
      {/*  {(value) =>{return <>{value}</> }}*/}
      {/*</AppContext.Consumer>*/}
      <div>{value}</div>
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
        { state.map( ( event ) => <Event key={event.id} event={event} dispatch={dispatch} />  )}
        </tbody>
      </table>
    </>
  )
};

export default Events

