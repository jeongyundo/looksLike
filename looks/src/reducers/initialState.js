const initalState = {
    dataNum: 6,
    dataList: [
        {
            id: 1,
            num: 0,
            lockOn: false,
            category: "all",
            itemList: [{"src": "https://store.musinsa.com/app/product/detail/1559528/0", "name": "N204USW950 \ud3f4\ub9ac\uce74\ud130 \uc2a4\ubab0 \ub85c\uace0 \ud480\uae30\ubaa8 \ub9e8\ud22c\ub9e8 \ud2f0\uc154\uce20 CARBON BLACK", "brand": "\ub0b4\uc154\ub110\uc9c0\uc624\uadf8\ub798\ud53d", "site": "musinsa", "price": 79000},{"src": "https://store.musinsa.com/app/product/detail/659554/0", "name": "[\uc138\ud2b8]  \ud558\ud504 \ud3f4\ub77c \ub2c8\ud2b8 \ud2f0\uc154\uce20", "brand": "\uc774\uc5d0\uc2a4\uc5d4", "site": "musinsa", "price": 32700},{"src": "https://store.musinsa.com/app/product/detail/1548491/0", "name": "\ud0d1\ud544 \uce90\uc2dc\ubbf8\uc5b4 \ub77c\uc6b4\ub4dc \ub2c8\ud2b8 (\ud06c\ub9bc)", "brand": "\ucfe0\uc5b4", "site": "musinsa", "price": 87200}]
        },
        {
            id: 2,
            num: 0,
            lockOn: false,
            category: "all",
            itemList: [{"src": "https://store.musinsa.com/app/product/detail/1548467/0", "name": "\ud0d1\ud544 \uce90\uc2dc\ubbf8\uc5b4 \ub77c\uc6b4\ub4dc \ub2c8\ud2b8 (\ube14\ub799)", "brand": "\ucfe0\uc5b4", "site": "musinsa", "price": 87200},{"src": "https://store.musinsa.com/app/product/detail/1582506/0", "name": "ARC-Logo hooded Sweatshirt Grey", "brand": "\ub514\uc2a4\uc774\uc988\ub124\ubc84\ub313", "site": "musinsa", "price": 82000},{"src": "https://store.musinsa.com/app/product/detail/1551767/0", "name": "[\ud328\ud0a4\uc9c0] 9TH ANNIVERSARY 3PACK SWEAT SHIRTS EDITION", "brand": "\uadf8\ub8e8\ube0c\ub77c\uc784", "site": "musinsa", "price": 59000},{"src": "https://store.musinsa.com/app/product/detail/1139175/0", "name": "\ud654\ub780 \uc138\ubbf8\uc624\ubc84 \ub2c8\ud2b8 \ube14\ub799", "brand": "\uc5d8\ubb34\ub4dc", "site": "musinsa", "price": 59900}]
        },
        {
            id: 3,
            num: 0,
            lockOn: false,
            category: "all",
            itemList: [{"src": "https://store.musinsa.com/app/product/detail/1551889/0", "name": "[\ud328\ud0a4\uc9c0] NYC LOCATION HOODIE [LROWCTH731M]", "brand": "\uadf8\ub8e8\ube0c\ub77c\uc784", "site": "musinsa", "price": 69000},{"src": "https://store.musinsa.com/app/product/detail/1072375/0", "name": "N194UDW980 \ubc14\uc774\uc2a8 RDS \ub355 \ub2e4\uc6b4 \uc810\ud37c CARBON BLACK", "brand": "\ub0b4\uc154\ub110\uc9c0\uc624\uadf8\ub798\ud53d", "site": "musinsa", "price": 169000},{"src": "https://store.musinsa.com/app/product/detail/668822/0", "name": "MTR \uc624\ubc84\ud54f \ub354\ube14 \ub871 \ucf54\ud2b8 (\ube14\ub799)", "brand": "\ucfe0\uc5b4", "site": "musinsa", "price": 247200}]
        },
        {
            id: 4,
            num: 0,
            lockOn: false,
            category: "all",
            itemList: [{"src": "https://store.musinsa.com/app/product/detail/1505908/0", "name": "\ub9ac\ubc84\uc11c\ube14 \ubcf4\uc544 \uc20f\ud478\ud37c WHJPA4T02U [\uadf8\ub808\uc774]", "brand": "\ud6c4\uc544\uc720", "site": "musinsa", "price": 89910},{"src": "https://store.musinsa.com/app/product/detail/1173385/0", "name": "[\ub9ac\ub274\uc5bc ver.]\ubbf8\ub2c8\uba40 \ud478\ud37c \ub2e4\uc6b4 \uc20f\ud328\ub529_Gray", "brand": "\ub77c\ud37c\uc9c0\uc2a4\ud1a0\uc5b4", "site": "musinsa", "price": 82800},{"src": "https://store.musinsa.com/app/product/detail/1647324/0", "name": "NC1DL72A_\uace0 \ud504\ub9ac \ub2e4\uc6b4 \ucf54\ud2b8 EX", "brand": "\ub178\uc2a4\ud398\uc774\uc2a4", "site": "musinsa", "price": 275500}]
        },
        {
            id: 5,
            num: 0,
            lockOn: false,
            category: "all",
            itemList: [{"src": "https://store.musinsa.com/app/product/detail/865862/0", "name": "\uce90\uc2dc\ubbf8\uc5b4 \ube14\ub80c\ub4dc \uc624\ubc84\uc0ac\uc774\uc988 \uc2f1\uae00 \ucf54\ud2b8 [\ube14\ub799]", "brand": "\ubb34\uc2e0\uc0ac \uc2a4\ud0e0\ub2e4\ub4dc", "site": "musinsa", "price": 118990},{"src": "https://store.musinsa.com/app/product/detail/1515891/0", "name": "N204UFT930 \ucf54\uc2a4\ud1a0\ub2c8 \ud50c\ub9ac\uc2a4 \ubf40\uae00\uc774 \ud480\uc9d1\uc5c5 CARBON BLACK", "brand": "\ub0b4\uc154\ub110\uc9c0\uc624\uadf8\ub798\ud53d", "site": "musinsa", "price": 179000},{"src": "https://store.musinsa.com/app/product/detail/1613767/0", "name": "[\uc138\ud2b8\uc0c1\ud488][NF] \ubca8\ubcb3 \ud06c\ub9ac\uc2a4\ud0c8 \uc14b\uc5c5 (\ube14\ub799)(20FW-F615XF719)", "brand": "\ub124\uc2a4\ud2f0\ud32c\uc2dc\ud074\ub7fd", "site": "musinsa", "price": 85600}]
        },
        {
            id: 6,
            num: 0,
            lockOn: false,
            category: "all",
            itemList: [{"src": "https://store.musinsa.com/app/product/detail/898078/0", "name": "\ub9ac\ubc84\uc2dc\ube14 \ud50c\ub9ac\uc2a4  \uc6dc\uc5c5 \uc790\ucf13 \uc544\uc774\ubcf4\ub9ac/\ube14\ub799", "brand": "\ucee4\ubc84\ub0ab", "site": "musinsa", "price": 118150},{"src": "https://store.musinsa.com/app/product/detail/1651038/0", "name": "20FW 23 \ud2b8\uc719\ud074\uc6d0\ud53c\uc2a4 \ud504\ub9ac\ubbf8\uc5c4 \ud2b8\uc704\ub4dc \ud37c\ud50c", "brand": "\uc974\ub9ac\uc564\uce7c\ub77c", "site": "musinsa", "price": 174400},{"src": "https://store.musinsa.com/app/product/detail/1651039/0", "name": "20FW 23 \ud2b8\uc719\ud074\uc6d0\ud53c\uc2a4 \ud2b8\uc704\ub4dc\ube14\ub799", "brand": "\uc974\ub9ac\uc564\uce7c\ub77c", "site": "musinsa", "price": 154400}]
        }
    ],
    tempList: [

    ]
}

export default initalState;