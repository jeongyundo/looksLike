import React, {useState, useEffect} from 'react'

import { createGlobalStyle } from "styled-components";

const Cloth = ({props, subsHanger, addItemNum, lockItem}) => {

    const [itemNum, setItemNum] = useState(props? props['num']:0);
    const [itemList, setItemList] = useState(props? props['itemList']:[]);
    const [item, setItem] = useState(itemList[itemNum])

    const onSubsHanger = (e) => {
        e.preventDefault();
        subsHanger(props)
    }

    useEffect(() => {
        setItemNum(props['num'])
        setItem(itemList[props['num']])
    }, [props])

    const onClickAddItemNum = (e) => {
        e.preventDefault();
        addItemNum(props['id']);
    }

    const onClickLockItem = (e) => {
        e.preventDefault();
        lockItem(props['id']);
    }
    const GlobalStyles = createGlobalStyle`

    .clothCard {
        margin: auto;
        height: 100%;
    }

    .cloth {
        position: relative;
        width: 100%;
        height: 80%;

    }

    .clothImage {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        
    }
    
    img {
        width: 100%;
        height: auto;
    }

    .clothContainer {
        height: 20%;
    }

    .clothContent {
        height: 66.66%;
        padding: 2px;
    }
    .clothContentItem {
        
    }

    .clothContentTitle {
        font-size: large;
        font-weight: 400;
    }

    .clothContentDetails {
        display: flex;
        justify-content: space-between;
    }
    
    .clothPrice {
        color : red;
    }

    .clothSetting {
        height: 33.33%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    .clothSettingItem {
        width: 33.33%;
        position: relative;
        background-color: gray;
        border: 0.5px solid white;
        border-radius: 3px;
    }

    .clothSettingBtn {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: gray;
        color: white;
    }
    `
    return (
        <>
            <div className="clothCard">
                
                <div className="cloth">
                <div className="subHangerBtn" onClick={onSubsHanger}>
                        x
                    </div>
                    <div className="clothImage">
                        <img src={item.img} alt={props.name}/>
                    </div>
                    
                </div>
                <div className="clothContainer">
                    <div className="clothContent">
                        <div className="clothContentTitle">
                            {item.name}
                        </div>
                        <div className="clothContentDetails">
                            <div className="clothContentItem">
                                {item.brand}
                            </div>
                            <div className="clothContentItem">
                                {item.price}
                            </div>
                        </div>
                    </div>
                    <div className="clothSetting">
                        <div className="clothSettingItem" onClick={onClickLockItem}>
                            <button className="clothSettingBtn">
                                고정하기
                            </button>
                        </div>
                        <div className="clothSettingItem" onClick={onClickAddItemNum}> 
                            <button className="clothSettingBtn">
                                랜덤돌리기
                            </button>
                        </div>
                        <div className="clothSettingItem">
                            <button className="clothSettingBtn">
                                좋아요
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <GlobalStyles></GlobalStyles>
        </>
    )
}

export default Cloth
