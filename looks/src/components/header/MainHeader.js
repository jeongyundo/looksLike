import React from 'react'
import { connect } from 'react-redux';
import { createGlobalStyle } from "styled-components";
import { changeClothes, naviTurn } from '../../actions/index';
import '../../style/index.css'

const MainHeader = (props) => {
    const GlobalStyles = createGlobalStyle`
    .header {
        width: 100%;
        height: 60px;
        display: flex;
        justify-content: space-between;
        font-family: 'GimhaeGayaR'!important;

        .headerIcon {
            position: relative;
            .headerIconTxt {
                padding: 20px;
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                font-size: 40px;
                font-family: 'IAMAPLAYER'!important;
                weight: 500;
            }
        }

       

        .headerSetting {
            display: flex;
            margin-right: 10px;
            .headerSettingContainer {
                margin: 10px;
                width: 70px;
                line-height: 40px;
                text-align: center;
                position: relative;
                font-weight: bold;
                
            }
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
                    <div className="headerSettingContainer" onClick={props.changeClothes}>
                        
                            랜덤
                        
                    </div>
                    <div className="headerSettingContainer" onClick={props.naviTurn}>
                      
                            내 옷장
                    
                    </div>
                    <div className="headerSettingContainer">
                      
                            내 페이지
               
                    </div>
                </div>
            </div>
        </>
    )
}
const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

    changeClothes,
    naviTurn

}

export default connect(mapStateToProps, mapDispatchToProps)(MainHeader);
