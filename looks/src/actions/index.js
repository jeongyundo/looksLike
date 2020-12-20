import { CHANGE_LOOK,NAVI_TURN, CHANGE_LOOKS, CANCLE_LIKE, LOCK_HANGER, MAKE_STATE, GIVE_LIKE } from "./type"
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
                    tempData:[],
                }
                
            }
        }
        var item = {}
        for (var i = 0; i < hangerNum; i++) {
            var tempName = "hanger_"+String(i+1);
            var cloth = randomPopup(items);
            Object.assign(item, {[tempName] : hanger.item(i+1, cloth)})
        }
        return item
    }
    

    const output = async (hangerNum) => {
        const items = await data;
        const hangers = await makeHanger(hangerNum, items);
        return {hangers, items, hangerNum};
    }
    
    dispatch({ type: MAKE_STATE, payload: output(hangerNum)})
}
