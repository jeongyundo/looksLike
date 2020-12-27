import {CHANGE_LOOK, CHANGE_LOOKS,  MAKE_STATE,POST_CLOTH, NAVI_TURN,  LOCK_HANGER, GIVE_LIKE, CANCLE_LIKE, PREV_CLOTH } from '../actions/type'
import initialState from "./initialState";
import randomPopup from '../actions/randomPopup'
import _ from "lodash"


function arrayRemove(arr, value) { 
    return arr.filter(function(ele){ 
        return ele?.name !== value?.name; 
    });
}


const itemReducer = (state = initialState, action) => {
    var tempState = _.cloneDeep(state);
    var oneData = tempState?.dataSet[action.payload]
    switch(action.type) {
        case NAVI_TURN :
            tempState.naviOn = !tempState.naviOn
            return {...state, ...tempState}

        case MAKE_STATE : 
            tempState.hangerNum = action?.payload?.hangerNum;
            tempState.dataSet = action.payload?.hangers;
            tempState.clothSet = action?.payload?.itemset;
            return {...state, ...tempState}

        case CHANGE_LOOKS :
            if(tempState.clothSet.length<tempState.hangerNum){
                alert("자료가 이제 없어요.")
                return state;
            }
            for (var i = 0; i < tempState.hangerNum; i++) {
                var tempName = "hanger_"+String(i+1)
                var tempData = tempState?.dataSet[tempName]
                if(!tempData.lockOn){
                    tempData.previousData.push(tempData.presentData)
                    let {item, itemset} = randomPopup(tempState.clothSet)
                    tempData.presentData = item
                    tempState.clothSet = itemset
                }
            }
            return {...state, ...tempState} 
        
        case CHANGE_LOOK :
            if(!tempState.clothSet){
                alert("자료가 이제 없어요.")
                return state;
            }
            oneData.previousData.push(oneData.presentData)
                let {item:oneItem, itemset:oneItemset} = randomPopup(tempState.clothSet)
            tempState.clothSet = oneItemset
            oneData.presentData = oneItem
            return {...state, ...tempState}

        case PREV_CLOTH :
            console.log(oneData.previousData)
            if(oneData.previousData.length!==0){
                oneData.nextData.push(oneData.presentData)
                oneData.presentData = oneData.previousData.shift()
            }else{
                alert("이전 옷이 없습니다.")
            }
            return {...state, ...tempState}

        case POST_CLOTH :
            console.log(oneData.nextData)
            if(oneData.nextData.length!==0){
                oneData.previousData.push(oneData.presentData)
                oneData.presentData = oneData.nextData.pop()
            }else{
                alert("이후 옷이 없습니다.")
            }
            return {...state, ...tempState}

        case LOCK_HANGER : 
            oneData.lockOn = !oneData.lockOn
            return {...state, ...tempState}

        case GIVE_LIKE : 
            oneData.presentData.like = !oneData.presentData.like
            if(!tempState.likeList.includes(oneData.presentData)){
                tempState.likeList.push(oneData.presentData)
            }
            return {...state, ...tempState}
            
        case CANCLE_LIKE : 
            if(oneData){
                oneData.presentData.like = !oneData.presentData.like
                if(tempState.likeList.find(data => data.name === action.item.name)){
                    tempState.likeList=arrayRemove(tempState.likeList, action.item)
                }
                var forCancleData = oneData.previousData.find(data => data === action.item)
                if(forCancleData){
                    forCancleData.like= !forCancleData.like
                }
            }else{
                if(tempState.likeList.find(data => data.name === action.item.name)){
                    tempState.likeList=arrayRemove(tempState.likeList, action.item)
                }
                //hanger에 걸린 이전 옷 혹은 현재 옷 확인
                for (var j = 0; j < tempState.hangerNum; j++) {
                    var tempCalcleName = "hanger_"+String(j+1)
                    var tempCalcleData = tempState?.dataSet[tempCalcleName]
                    if(tempCalcleData.presentData===action.item){
                        tempCalcleData.presentData.like=!tempCalcleData.presentData.like
                    }else {
                        var forCancleTempData = tempCalcleData.previousData.find(data => data.name === action.item.name)
                        if(forCancleTempData){
                            forCancleTempData.like= !forCancleTempData.like
                        }
                    }
                    
                }
            }
            return {...state, ...tempState}
        
        default :
            return state;
    }
}


export default itemReducer;