import { FETCH_LOOKS, FETCH_ITMES, ADD_HANGER, SUB_HANGER } from "./type"
import looks from "../apis/looks"

export const fetchAirs = () => async dispatch => {
    const response = await looks.get(`/getClothList`)
    dispatch({ type: FETCH_LOOKS, payload: response.data})
}

export const setDataItems = () => async dispatch => {
    var items = []

    dispatch({ type: FETCH_ITMES, payload: items})
}

export const addHanger = () => async dispatch => {
    var items = []
    
    dispatch({ type: ADD_HANGER, payload: items})
}

export const subHanger = () => async dispatch => {
    var items = []
    
    dispatch({ type: SUB_HANGER, payload: items})
}