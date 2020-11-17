import {FETCH_LOOKS, FETCH_ITMES, ADD_HANGER, SUB_HANGER} from '../actions/type'
import initialState from "./initialState";


const itemReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_LOOKS :
            return {...state, ...action.payload}
        case FETCH_ITMES :
            return {...state, ...action.payload}
        case ADD_HANGER :
            return {...state, ...action.payload}
        case SUB_HANGER :
            return {...state, ...action.payload}
        default :
            return state;
    }
}


export default itemReducer;