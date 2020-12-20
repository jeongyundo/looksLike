import React from 'react'
import {connect} from 'react-redux'
import { changeCloth, lockHanger, giveLike, cancleLike} from '../../actions/index'

import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`

    .clothCard {
        height: 100%;
        width: 100%;
        background-color: white;
        .cloth {
            position: relative;
            width: 100%;
            height: 80%;

            .clothImage {
                position: absolute; top:0; left: 0;
                height: 100%;
                
                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }

    .clothContainer {
        height: 20%;
        background-color: white;
        .clothContent {
            height: 67%;
            padding: 2px;

            .clothContentTitle {
                font-size: small;
                font-weight: 300;
            }

            .clothContentDetails {
                display: flex;
                justify-content: space-between;

                .clothContentItem {
        
                }

                .clothPrice {
                    color : red;
                }
            }
        }

        .clothSetting {
            height: 33%;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;

            .clothSettingItem {
                width: 33.33%;
                position: relative;
                background-color: gray;
                
                border-radius: 3px;

                .clothSettingBtn {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background-color: gray;
                    color: white;
                }
            }
        }
    }
    `

const Cloth = ({props, name, giveLike, changeCloth, lockHanger, cancleLike}) => {

    const onClickSendLike = (e) => {
        e.preventDefault();
        giveLike(name, props);
    }

    const onClickCancleLike = (e) => {
        e.preventDefault();
        console.log(name, props)
        cancleLike(name, props);
    }

    const onClickAddItemNum = (e) => {
        e.preventDefault();
        changeCloth(name);
    }

    const onClickLockItem = (e) => {
        e.preventDefault();
        lockHanger(name);
    }
    

    const LikeButton = () => {
        return !props.like ? (
            <div className="clothSettingItem" onClick={onClickSendLike}>
                            <button className="clothSettingBtn">
                                좋아요
                            </button>
                        </div>
        ) : (
            <div className="clothSettingItem" onClick={onClickCancleLike}>
                            <button className="clothSettingBtn">
                                좋아요 취소
                            </button>
                        </div>
        ) 
        
    }
    
    return (
        <>
            <div className="clothCard">
                
                <div className="cloth">
                    <div className="clothImage">
                        <img src={props.img} alt={props.name}/>
                    </div>
                </div>
                <div className="clothContainer">
                    <div className="clothContent">
                        <div className="clothContentTitle">
                            {props.name}
                        </div>
                        <div className="clothContentDetails">
                            <div className="clothContentItem">
                                {props.brand}
                            </div>
                            <div className="clothContentPrice">
                                {props.price}
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
                        {LikeButton()}
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
    changeCloth,
    lockHanger,
    giveLike,
    cancleLike
}


export default connect(mapStateToProps, mapDispatchToProps)(Cloth);
