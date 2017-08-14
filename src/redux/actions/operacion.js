import * as types from './actionsTypes';

export function clear() {
  return {
    type: types.CLEAR
  };
}

export function write(e) {
  return {
    type: types.WRITE,
    element: e
  };
}

export function result() {
  return {
    type: types.RESULT
  };
}
