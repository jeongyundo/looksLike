import React, { useCallback, useEffect } from 'react'
import Closet from './Closet'
import {connect} from 'react-redux'
import { changeCloth, changeClothes, setHanger} from '../../actions/index'
import { toInteger } from 'lodash'
import styled from "styled-components";
import MainNavi from '../navigation/MainNavi'

const ClosetWrapper = styled.div`
background-color: lavenderblush;
`

function Mainbody(props) {

   

    const spaceFunction = useCallback(
        (event) => {
            if(event.keyCode === 32) {
                event.preventDefault();
                props.changeClothes()
            };
        },
        [props],
    );

    useEffect(() => {
        window.addEventListener('keydown',spaceFunction, false)
        return () => {window.removeEventListener('keydown',spaceFunction, false)}
    }, [spaceFunction])


    const loadData = () => {
        var windowWidth = document.body.clientWidth
        props.setHanger(toInteger(windowWidth/300)*2)
    }
    
    useEffect(() => {
        loadData()
        // eslint-disable-next-line 
    }, [])
    

    return (
        <>
            <ClosetWrapper>
                <Closet addItemNum={props.changeCloth} ></Closet>
            </ClosetWrapper>
            {props.naviOn?<MainNavi></MainNavi>:<></>}
        </>
    )
}
const mapStateToProps = (state) => ({
    naviOn : state.items.naviOn
})

const mapDispatchToProps = {

    changeCloth,
    setHanger,
    changeClothes
}


export default connect(mapStateToProps, mapDispatchToProps)(Mainbody);
