import { combineReducers } from 'redux';
import contadorReducer from './contadorReducer';
import { crudReducers } from './crudReducer';
import { shoppingReducer } from './shoppingReducer';

const reducer = combineReducers({
  contador: contadorReducer,
  shopping: shoppingReducer,
  crud: crudReducers,
});

export default reducer;
