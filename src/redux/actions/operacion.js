import * as Types from './actionsTypes';

export function clear(){
    return {
        type: Types.CLEAR
    }
}

export function addElement(e){
    return {
        type: Types.WRITE,
        element: e
    }
}

export function write(e){
    return dispatch =>{
        dispatch(addElement(e));
    }
}

export function showResult(){
    return dispatch => dispatch({
        type: Types.RESULT
    })
}