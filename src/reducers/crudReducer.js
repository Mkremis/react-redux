import { UPDATE_DATA } from '../types';
import { NO_DATA } from '../types';
import { DELETE_DATA } from '../types';
import { CREATE_DATA } from '../types';
import { READ_ALL_DATA } from '../types';

export const initialState = { db: [] };
export function crudReducers(state = initialState, action) {
  switch (action.type) {
    case READ_ALL_DATA: {
      console.log(action.payload);
      return {
        ...state,
        db: action.payload.map((data) => data),
      };
    }
    case CREATE_DATA: {
      return { ...state, db: [...state.db, action.payload] };
    }
    case UPDATE_DATA: {
      let newData = state.db.map((el) =>
        el.id === action.payload.id ? action.payload : el
      );
      return { ...state, db: newData };
    }
    case DELETE_DATA: {
      let newData = state.db.filter((el) => el.id !== action.payload);
      return { ...state, db: newData };
    }
    case NO_DATA: {
      return initialState;
    }
    default:
      return state;
  }
}
