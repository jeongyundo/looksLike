function randomPopup(listdata) {
    var randomNum = (Math.floor(Math.random()*listdata.length))
    var item = listdata[randomNum]

    function arrayRemove(arr, value) { 
        return arr.filter(function(ele){ 
            return ele !== value; 
        });
    }

    var itemset = arrayRemove(listdata, item)
    return {item, itemset}
}

export default randomPopup;