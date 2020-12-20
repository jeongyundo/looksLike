
function setCloset (hangerNum) {
    const setHanger = (hangerNum) => {
        class hanger {
            constructor(name) {
                this.name = name
            }

            static item(name)  {
                const hangername= name;
                return {
                    name: hangername,
                    category: "all",
                    lockOn: false,
                    presentData : {},
                    previousData : [],
                    tempData:[]
                }
                
            }
        }

        var item = []
        for (var i = 0; i < hangerNum; i++) {
            item.push(hanger.item(i+1))
        }
        return item;
    }

    const output = async (hangerNum) => {
        const hangers = await setHanger(hangerNum)
        console.log(hangers)
    }
    
    output(hangerNum)
}

export default setCloset
