import React from 'react'
import { createGlobalStyle } from "styled-components";

export const MainHeader = () => {
    const GlobalStyles = createGlobalStyle`
    .header {
        width: 100%;
        height: 60px;
        display: flex;
        justify-content: space-between;
        
    }

    .headerIcon {
        position: relative;
    }

    .headerIconTxt {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        font-size: 40px;
        weight: 500;
    }
    .headerSetting {
        display: flex;
    }

    .headerSettingContainer {
        width: 50px;
        position: relative;
    }

    .headerSettingTxt {
        width: 50px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 12px;
        weight: 500;
        text-align: center;
    }
    `

    return (
        <>
            <GlobalStyles></GlobalStyles>
            <div className="header">
                <div className="headerIcon">
                    <div className="headerIconTxt">
                        LooksLike
                    </div>
                </div>
                <div className="headerSetting">
                    <div className="headerSettingContainer">
                        <p className="headerSettingTxt">
                            랜덤
                        </p>
                    </div>
                    <div className="headerSettingContainer">
                        <p className="headerSettingTxt">
                            행거추가
                        </p>
                    </div>
                    <div className="headerSettingContainer">
                        <p className="headerSettingTxt">
                            행거저장
                        </p>
                    </div>
                    <div className="headerSettingContainer">
                        <p className="headerSettingTxt">
                            내 옷장
                        </p>
                    </div>
                    <div className="headerSettingContainer">
                        <p className="headerSettingTxt">
                            내 페이지
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainHeader
