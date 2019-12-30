var redux = require('redux');
var autoId = 0;

var store = redux.createStore(function (state = [], action) {
   switch (action.type) {
      case 'ADD':
         return [
            ...state,
            {
               _id: ++autoId,
               name: action.name
            }
         ]
      case 'DEL':
         return state.filter(i => i._id !== action._id);
      default:
         return state;
   }
});

store.subscribe(function () {
   console.log(store.getState());
});

store.dispatch({ type: 'ADD', name: 'Tom' });
store.dispatch({ type: 'ADD', name: 'Mary' });
store.dispatch({ type: 'ADD', name: 'Brown' });
store.dispatch({ type: 'DEL', _id: 3 });