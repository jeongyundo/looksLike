import { FETCH_LOOKS, FETCH_ITMES, ADD_HANGER, SUB_HANGER,ROTATE_ITEMS, LOCK_HANGER, ROTATE_ITEM } from "./type"
import looks from "../apis/looks"
import data from "../data/data"

export const fetchLottery = () => async dispatch => {
    //const response = await looks.get(`/getClothList`)
    const response = data
    console.log(response)
    dispatch({ type: FETCH_LOOKS, payload: response})
}

export const winLotto = (id) => async dispatch => {
    dispatch({type:ROTATE_ITEM, payload:id })
}
export const winLottery = () => async dispatch => {
    var items = []

    dispatch({ type: ROTATE_ITEMS, payload: items})
}

export const setDataItems = () => async dispatch => {
    var items = []

    dispatch({ type: FETCH_ITMES, payload: items})
}

export const addHanger = () => async dispatch => {
    
    dispatch({ type: ADD_HANGER})
}

export const subHanger = (id) => async dispatch => {
    
    dispatch({ type: SUB_HANGER, payload: id})
}

export const lockHanger = (id) => async dispatch => {
    
    dispatch({ type: LOCK_HANGER, payload: id})
}

