import * as types from '../actions/actionsTypes';

const initialState = {
  operacion: '0',
  resultado: '0'
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case types.WRITE:
      return {
        ...state,
        operacion: toString(state.operacion) + toString(action.element)
      };
    case types.CLEAR:
      return {
        ...state,
        operacion: '0',
      };
    case types.RESULT:
      return {
        ...state,
        resultado: "hola"
      };
    default:
      return state;
  }
}