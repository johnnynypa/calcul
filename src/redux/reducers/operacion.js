import * as types from '../actions/actionsTypes';

const initialState = {
  operacion: '0'
};

export default function counter(state = initialState, action = {}) {
  switch (action.type) {
    case types.WRITE:
      return {
        ...state,
        operacion: toString(state.operacion) + toString(action.element)
      };
    case types.CLEAR:
      return {
        ...state,
        operacion: '0'
      };
    default:
      return state;
  }
}