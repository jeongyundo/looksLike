import React from 'react'
import { connect } from 'react-redux'
import NaviCloth from './NaviCloth';
import { createGlobalStyle } from "styled-components";



export const NaviList = (props) => {
   
    const GlobalStyles = createGlobalStyle`
        .naviCloset {
            margin: auto;
            height: ${document.body.clientHeight-60}px;
            padding-top: 10px;
 

            overflow:auto;
            overflow-x:hidden;

            .naviClosetPlace {
                width : 300px;
                height : 400px;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                margin: auto;
                margin-bottom: 10px;
         
            }

            .noLikes {
                height: ${document.body.clientHeight-60}px;
                display: flex;
                justify-content: center;
                align-items: center;

                div {
                    font-weight: bold;
                    flex: 0 0 240px;
                }
            }
        }

        ::-webkit-scrollbar {
            width: 4px;
        }

        
    `

    const loadItem = (item) => {
        return (item?.length===0)? (<div className="noLikes">
            <div>추가하신 아이템이 없습니다.</div>
        </div>):
        (item?.map(data => {
            if(data){
                return (
                    <div key={data?.name} className="naviClosetPlace">
                        <NaviCloth props={data} name={data?.hangername} like={data.like}  />
                    </div>
                )
            }
            return null;
        })
        )
    };

    return (
        <>
            <GlobalStyles></GlobalStyles>
            <div className="naviCloset">
                {loadItem(props.naviSet)}
           
            </div>
        </>
    )
}

const mapStateToProps = (state) => ({
    naviSet : state.items.likeList
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(NaviList)
