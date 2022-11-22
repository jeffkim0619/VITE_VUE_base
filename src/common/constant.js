export default {
    url: {
        HOME: '/'
    },
    choise: {
        items: [{
                label: "증명서 선택",
                to: "/choise/choiseDocument",
            },
            {
                label: "진료과 선택",
                to: "/choise/choiseDepartment",
            },
            {
                label: "진료의 선택",
                to: "/choise/choiseDocter",
            },
            {
                label: "진료일선택",
                to: "/choise/choiseDate",
            },
            {
                label: "발급용도선택",
                to: "/choise/choisePurpose",
            },
        ],
        telecomList: [{
                name: "SKT",
                code: "1",
            },
            {
                name: "KT",
                code: "2",
            },
            {
                name: "LG U+",
                code: "3",
            },
            {
                name: "SKT 알뜰폰",
                code: "5",
            },
            {
                name: "KT 알뜰폰",
                code: "6",
            },
            {
                name: "LG 알뜰폰",
                code: "7",
            },
        ]
    },
}