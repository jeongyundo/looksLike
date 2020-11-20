import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchLottery, winLottery, winLotto, subHanger, addHanger, lockHanger} from '../../actions/index'

import { createGlobalStyle } from "styled-components";

const Cloth = (props) => {

    const [itemNum, setItemNum] = useState(props.props? props.props['num']:0);
    const [itemList, setItemList] = useState(props.props? props.props['itemList']:[]);
    const [item, setItem] = useState(itemList[itemNum])

    const onSubsHanger = () => {
        props.subHanger(props.props.id)
    }



    useEffect(() => {
        setItemNum(props.props['num'])
        setItem(itemList[props.props['num']])
    }, [itemList, props.props])

    const onClickAddItemNum = (e) => {
        e.preventDefault();
        props.winLotto(props.props['id']);
    }

    const onClickLockItem = (e) => {
        e.preventDefault();
        props.lockHanger(props.props['id']);
    }
    const GlobalStyles = createGlobalStyle`

    .clothCard {
        height: 100%;
        width: 100%;
    }

    .cloth {
        position: relative;
        width: 100%;
        height: 80%;
    }

    .clothImage {
        position: absolute; top:0; left: 0;

        height: 100%;
    }
    
    .clothImage img {
        width: 100%;
        height: 100%;
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
        font-size: small;
        font-weight: 300;
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

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
    fetchLottery,
    winLottery,
    subHanger, 
    addHanger,
    lockHanger,
    winLotto
}


export default connect(mapStateToProps, mapDispatchToProps)(Cloth);
