import * as types from '../actions/actionsTypes';

const initialState = {
  operacion: '3',
  resultado: '4'
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case types.WRITE:
      return {
        ...state,
        operacion: state.operacion+action.element
      };
    case types.CLEAR:
      return {
        operacion: '0',
        resultado: '0'
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