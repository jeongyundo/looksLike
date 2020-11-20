import React, {useEffect, useState} from 'react'
import Cloth from "./Cloth";
import { createGlobalStyle } from "styled-components";
import {connect} from 'react-redux'
import {fetchLottery, winLottery, subHanger, addHanger} from '../../actions/index'


function Closet(props) {
    
    
    const {moveItemToTemp, moveTempToItem} = props
    const hangerSetting = () => {
        const onCheck = () => {
            return (<div onClick={addHanger}>
                        옷걸이 개수 추가하기
                </div>)
        }
        return (props.itemSet.length>=6 ? "" : onCheck())
    }

    const addHanger = (e) => {
        e.preventDefault();
        props.addHanger()
    }


    const GlobalStyles = createGlobalStyle`
    .closet {

        display: grid;
        grid-template-columns: repeat(3, 300px);
        gap: 5px 5px;
        padding: 10px;
    }

    .closetPlace {
        width : 300px;
        height : calc((100vh - 80px) /2);
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    }
    `

    const loadItem = (item) => {
        return item.map(data => {
            console.log(data)
            if(data.itemList.length>0){
                return (<div key={data.id? data.id:"none"} className="closetPlace">
                        <Cloth props={data}  lockItem = {props.lockItem}  />
                </div>)
            }
            return null;
        });
    };

    return (
        <>
            <GlobalStyles></GlobalStyles>
            <div className="closet">
                {loadItem(props.itemSet)}
                {hangerSetting()}
            </div>
        </>
    )
}

const mapStateToProps = (state) => ({
    itemSet : state.items.dataList
})

const mapDispatchToProps = {
    fetchLottery,
    winLottery,
    subHanger, 
    addHanger
}


export default connect(mapStateToProps, mapDispatchToProps)(Closet);
