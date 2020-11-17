import React, { useState, useCallback, useEffect } from 'react'
import Closet from './Closet'
import {connect} from 'react-redux'
import {fetchLottery, winLottery, subHanger, addHanger} from '../../actions/index'

function Mainbody(props) {

    

    const [items, setItems] = useState([])

    // const [tempItems, setTempItems] = useState([]);

    // const moveItemToTemp = useCallback(
    //     (id) => {
    //         console.log(items, tempItems)
    //         let temp = items.filter(data => data.id === id).pop()
    //         setTempItems(tempItems.concat(temp))
    //         setItems(items.filter(data => data.id !== id))
    //     },
    //     [items, tempItems]
    // )

    // const moveTempToItem = useCallback(
    //     () => {
    //         console.log(items, tempItems)
    //         let temp = tempItems.length !== 0 ? tempItems[0] : []
    //         setItems(items.concat(temp))
    //         setTempItems(tempItems.filter(data => data !== temp))
    //     },
    //     [items, tempItems]
    // )

    const setNewItems = useCallback(
        (id) => {
            let temp = items.filter(data => data.id === id).pop()
            temp['itemList'].push()
            console.log(items.concat(temp))
            setItems(items.concat(temp))
        },
        [items],
    )

    const spaceFunction = useCallback(
        (event) => {
            if(event.keyCode === 32) {
                event.preventDefault();
                // setItems(
                //     items.map(item =>
                //         !item.lockOn ? { ...item, num: item.num+1 } : item
                //     )
                // );
                props.winLottery();
            };
        },
        [items],
    );

    const lockItem = useCallback(
        (id) => {
            setItems(
                items.map(item =>
                    item.id === id ? { ...item, lockOn: !item.lockOn} : item
                )
            )
        },
        [items],
    )

    // const addItemNum = useCallback(
    //     (id) => {
    //         setItems(
    //             items.map(item =>
    //               item.id === id ? { ...item, num: item.num+1 } : item
    //             )
    //         );
    //     },
    //     [items],
    // );

    useEffect(() => {
        window.addEventListener('keydown',spaceFunction, false)
        return () => {window.removeEventListener('keydown',spaceFunction, false)}
    }, [items])

    useEffect(() => {
        console.log(items)
        props.fetchLottery();
        setItems(props.itemSet)
    }, [])
    

    return (
        <div>
            <Closet items={items} addItemNum={props.winLottery} lockItem={lockItem} moveItemToTemp={props.subHanger} moveTempToItem={props.addHanger}></Closet>
        </div>
    )
}
const mapStateToProps = (state) => ({
    itemSet : state.items.dataList
})

const mapDispatchToProps = {
    fetchLottery,
    winLottery,
    subHanger, 
    addHanger
}


export default connect(mapStateToProps, mapDispatchToProps)(Mainbody);
