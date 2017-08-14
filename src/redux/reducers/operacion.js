import * as types from '../actions/actionsTypes';

const initialState = {
  operacion: 0
};

export default function counter(state = initialState, action = {}) {
  switch (action.type) {
    case types.INCREMENT:
      return {
        ...state,
        operacion: state.count + 1
      };
    case types.DECREMENT:
      return {
        ...state,
        operacion: state.count - 1
      };
    default:
      return state;
  }
}