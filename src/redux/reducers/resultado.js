import * as types from '../actions/actionsTypes';

const initialState = {
  resultado: '0'
};

export default function counter(state = initialState, action = {}) {
  switch (action.type) {
    case types.RESULT:
      return {
        ...state,
        resultado: "hola"
      };
    default:
      return state;
  }
}