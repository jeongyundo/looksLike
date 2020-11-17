import {FETCH_LOOKS, FETCH_ITMES, ADD_HANGER, SUB_HANGER, ROTATE_ITEMS, LOCK_HANGER, ROTATE_ITEM} from '../actions/type'
import initialState from "./initialState";
import _ from "lodash"


const itemReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_LOOKS :
            var tempState = _.cloneDeep(state)
            var itemList = action.payload
            var itemSettingNum = 0;
            var itemSettingLimitedNum = tempState.dataList.length
            itemList.map((data)=>{
                
                tempState.dataList[itemSettingNum].itemList.push(data)
                itemSettingNum++;
                itemSettingNum = itemSettingLimitedNum <= itemSettingNum ?  0 : itemSettingNum;
                return null;
            })
            return {...state, ...tempState}
        case ROTATE_ITEMS :
            var tempStateForRotate = _.cloneDeep(state)
            tempStateForRotate.dataList.map((data)=>{
                if(!data.lockOn){
                    data.num = data.num + 1
                }
                return null
            })
            return {...state, ...tempStateForRotate}
            case ROTATE_ITEM :
            var tempStateForOneRotate = _.cloneDeep(state)
            tempStateForOneRotate.dataList.map((data)=>{
                if(!data.lockOn&&data.id===action.payload){
                    data.num = data.num + 1
                }
                return null
            })
            return {...state, ...tempStateForOneRotate}
        case FETCH_ITMES :
            return {...state, ...action.payload}
        case ADD_HANGER :
            //initialState의 dataNum +1, temp to Item
            var tempStateForAddHanger = _.cloneDeep(state)
            var tempListforAdd = tempStateForAddHanger.tempList.length !== 0 ? tempStateForAddHanger.tempList[0] : []
            tempStateForAddHanger.dataList=tempStateForAddHanger.dataList.concat(tempListforAdd)
            tempStateForAddHanger.tempList=tempStateForAddHanger.tempList.slice(1)
            return {...state, ...tempStateForAddHanger}
        case SUB_HANGER :
            //initialState의 dataNum -1, Item to temp
            var tempStateForSubHanger = _.cloneDeep(state)
            console.log(tempStateForSubHanger)
            var tempListforSub = tempStateForSubHanger.dataList.filter(data => data.id === action.payload).pop()
            tempStateForSubHanger.tempList.push(tempListforSub)
            tempStateForSubHanger.dataList.filter(data => data.id !== action.payload)
            tempStateForSubHanger.dataList=tempStateForSubHanger.dataList.filter(data => data.id !== action.payload)
            return {...state, ...tempStateForSubHanger}
        case LOCK_HANGER : 
            var tempStateForLockHanger = _.cloneDeep(state)
            tempStateForLockHanger.dataList.map((data) => {
                data.lockOn = data.id === action.payload ? !data.lockOn : data.lockOn
                return null;
            })
            return {...state, ...tempStateForLockHanger}
        default :
            return state;
    }
}


export default itemReducer;