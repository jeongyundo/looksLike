import { 
    CHANGE_LOOK,
    NAVI_TURN, 
    CHANGE_LOOKS, 
    CANCLE_LIKE, 
    PREV_CLOTH, 
    LOCK_HANGER, 
    MAKE_STATE, 
    POST_CLOTH,
    GIVE_LIKE } from "./type"
import looks from "../apis/looks"
import data from "../data/data"
import randomPopup from "./randomPopup"

export const naviTurn = () => async dispatch => {

    dispatch({type:NAVI_TURN })
}
export const changeCloth = (name) => async dispatch => {
    var tempName = "hanger_"+String(name)
    dispatch({type:CHANGE_LOOK, payload:tempName })
}

export const lockHanger = (name) => async dispatch => {
    var tempName = "hanger_"+String(name)
    dispatch({ type: LOCK_HANGER, payload: tempName})
}

export const getBackCloth = (name) => async dispatch => {
    var tempName = "hanger_"+String(name)
    dispatch({ type: PREV_CLOTH, payload: tempName})
}

export const getForthCloth = (name) => async dispatch => {
    var tempName = "hanger_"+String(name)
    dispatch({ type: POST_CLOTH, payload: tempName})
}


export const giveLike = (name, item) => async dispatch => {
    console.log(name, item)
    var tempName = "hanger_"+String(name)
    dispatch({type: GIVE_LIKE, payload: tempName, item: item})
}

export const cancleLike = (name, item) => async dispatch => {
    var tempName = "hanger_"+String(name)
    dispatch({type: CANCLE_LIKE, payload: tempName, item: item})
}

export const changeClothes = () => async dispatch => {
    
    dispatch({type: CHANGE_LOOKS})
}

export const setHanger = (hangerNum) => async dispatch => {
    
    const makeHanger = (hangerNum, items) => {
        class hanger {
            constructor(name) {
                this.name = name
            }
    
            static item(name, cloth)  {
                const hangername= name;
                return {
                    hangername: hangername,
                    category: "all",
                    lockOn: false,
                    presentData : cloth,
                    previousData : [],
                    nextData: [],
                    tempData:[],
                }
                
            }
        }
        var item = {}
        for (var i = 0; i < hangerNum; i++) {
            var tempName = "hanger_"+String(i+1);
            var {item: cloth, itemset} = randomPopup(items);
            items = itemset
            Object.assign(item, {[tempName] : hanger.item(i+1, cloth)})
        }
        return {item, itemset}
    }
    

    const output = async (hangerNum) => {
        const items = await data;
        const {item:hangers, itemset} = await makeHanger(hangerNum, items);
        return {hangers, itemset, hangerNum };
    }
    
    dispatch({ type: MAKE_STATE, payload: output(hangerNum)})
}
