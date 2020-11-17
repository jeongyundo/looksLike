import React, {useState} from 'react'
import data from "../../data/data";
import Cloth from "./Cloth";
import { createGlobalStyle } from "styled-components";

function Closet(props) {
    const item = props.items;
    const [num, setNum] = useState(Math.floor(window.innerWidth/330))

    const {moveItemToTemp, moveTempToItem} = props
    const hangerSetting = () => {
        const onCheck = () => {
            return (<div onClick={addHanger}>
                        옷걸이 개수 추가하기
                </div>)
        }
        return (num>6 ? "" : onCheck())
    }

    const addHanger = (e) => {
        e.preventDefault();
        moveTempToItem()
        setNum(num+1)
    }

    const subsHanger = (props) => {
        setNum(num-1)
        moveItemToTemp(props.id)
    }

    const GlobalStyles = createGlobalStyle`
    .closet {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 5px 5px;
        padding: 10px 40px;
    }

    .closetPlace {
        width : 300px;
        height : 450px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    }
    `

    const loadItem = (item) => {
        return item.map(data => {
            return (<div key={data.id? data.id:"none"} className="closetPlace">
                         <Cloth props={data} subsHanger={subsHanger} lockItem = {props.lockItem} addItemNum={props.addItemNum} />
                 </div>)
        });
    };

    return (
        <>
            <GlobalStyles></GlobalStyles>
            <div className="closet">
                {loadItem(item)}
                {hangerSetting()}
            </div>
        </>
    )
}

export default Closet
