import Mock from "mockjs";

Mock.mock("/giftList",{
    "list|10":[
        {
            "title":"@ctitle",
            "id|+1":1,
            "desc":"精美时尚礼品",
            "img":"@image(100x100)",
            "price|10-20":0,
            "count":1
        }
    ]
})