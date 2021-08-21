// action = {
//   type: 'CREATE_EVENT',
//   title: '2020年東京オリンピックのお知らせ',
//   body: '2020年に東京でオリンピックを開催します！ つきましては・・・'
// }

// 起動時
// state = []
// after
// state = [
//   {id: 1, title: 'タイトル', body: 'ボディ'},
// ]
// after2
// state = [
//   {id: 1, title: 'タイトル', body: 'ボディ'},
//   {id: 2, title: '2020年東京オリンピックのお知らせ', body: '2020年に東京でオリンピックを開催します！ つきましては・・・'},
// ]

const events = (state = [], action) => {
  switch(action.type){
    case 'CREATE_EVENT':
      const event = { title: action.title, body: action.body }
      const length = state.length
      const id = length === 0 ? 1 : state[length-1].id + 1;
      return [...state, { id, ...event}]; //id: id のショートハンド
    case 'DELETE_EVENT':
      return state.filter( (event) => (
        event.id !== action.id
      ));
    case 'DELETE_ALL_EVENT':
      return [];
    default:
      return state
  }
}

export default events;