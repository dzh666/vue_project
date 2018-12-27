import Mock from 'mockjs'

let musicList={
    title:'歌单推荐',
    list:[
        {
            img:'1.jpg',
            count:66658,
            msg:'要做什么梦是每个人的自由'
        },
        {
            img:'2.jpg',
            count:66658,
            msg:'要做什么梦是每个人的自由'
        },
        {
            img:'3.jpg',
            count:66658,
            msg:'要做什么梦是每个人的自由'
        },
        {
            img:'4.jpg',
            count:66658,
            msg:'要做什么梦是每个人的自由'
        },
        {
            img:'5.jpg',
            count:66658,
            msg:'要做什么梦是每个人的自由'
        },
        {
            img:'6.jpg',
            count:66658,
            msg:'要做什么梦是每个人的自由'
        }
    ],
    swiperList:['1.jpg','2.jpg','3.jpg','4.jpg']
}

Mock.mock('/singtuijian',()=>{
     return musicList
})


let anchorData={
    title:'今日优选',
    list:[
        {
            img:'1.jpg',
            num:18,
            msg:'要做什么梦是每个人的自由',
            name:'末那大叔'
        },
        {
            img:'2.jpg',
            num:18,
            msg:'要做什么梦是每个人的自由',
            name:'末那大叔'
        },
        {
            img:'3.jpg',
            num:18,
            msg:'要做什么梦是每个人的自由',
            name:'末那大叔'
        }
    ],
    swiperList:['11.jpg','12.jpg','13.jpg','14.jpg']
}


Mock.mock('/anchorData',()=>{
    return anchorData
})

