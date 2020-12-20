import React from 'react'
import styled from "styled-components";
import NaviList from './NaviList'

const NaviBarWrapper = styled.div`
        position: absolute;
        top: 60px;
        
        width: 320px;
        right: 0px;;
        z-index: 1;
        border-left: 2px;
        border-left-style: ridge;
        background-color: gainsboro;
        text-align: center;

    `

function MainNavi() {
    
    return (
        <NaviBarWrapper>
            <NaviList></NaviList>
        </NaviBarWrapper>
    )
}

export default MainNavi
