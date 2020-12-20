import React from 'react'
import Cloth from "./Cloth";
import { createGlobalStyle } from "styled-components";
import {connect} from 'react-redux'



function Closet(props) {

    const GlobalStyles = createGlobalStyle`
        .closet {
            margin: auto;
            display: grid;
            grid-template-columns: repeat(${props.clothNum/2}, 300px);
            gap: 5px 5px;
            padding-top: 10px;
            justify-content: center;
        }

        .closetPlace {
            width : 300px;
            height : calc((100vh - 80px) /2);
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        }
    `

    const loadItem = (item) => {
        return item.map(data => {
            
            if(data){
                return (
                    <div key={data?.hangername} className="closetPlace">
                        <Cloth props={data?.presentData} name={data?.hangername} like={data.like}  />
                    </div>
                )
            }
            return null;
        });
    };

    return (
        <>
            <GlobalStyles></GlobalStyles>
            <div className="closet">
                {loadItem(props.itemSet)}
           
            </div>
        </>
    )
}

const mapStateToProps = (state) => ({
    itemSet : Object.values(state.items.dataSet),
    clothNum : state.items.hangerNum
})

const mapDispatchToProps = {

}


export default connect(mapStateToProps, mapDispatchToProps)(Closet);
