import {FETCH_LOOKS, FETCH_ITMES, ADD_HANGER, SUB_HANGER, ROTATE_ITEMS} from '../actions/type'
import initialState from "./initialState";


const itemReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_LOOKS :
            return {...state, ...action.payload}
        case FETCH_ITMES :
            return {...state, ...action.payload}
        case ADD_HANGER :
            //initialState의 dataNum +1, temp to Item
            return {...state, ...action.payload}
        case SUB_HANGER :
            //initialState의 dataNum -1, Item to temp
            return {...state, ...action.payload}
        case ROTATE_ITEMS :
            //Item의 내부 num 숫자 증가
            return {...state, ...action.payload}
        default :
            return state;
    }
}


export default itemReducer;