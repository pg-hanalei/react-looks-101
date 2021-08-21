import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <div className="container-fluid">
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          <input id="formEventTitle" className="form-control" type="text" />
        </div>

        <div className="form-group">
          <label htmlFor="formEventBody">内容</label>
          <textarea id="formEventBody" className="form-control" />
        </div>

        <button className="btn btn-primary">イベントを作成する</button>
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
