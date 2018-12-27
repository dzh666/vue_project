<template>
      <div class="recommend">
          <navone></navone>
         <banners :swiperList='swiperList'></banners>
         <navtwo :navList='navList'></navtwo>
         <div class="recommend_list">
           <h2>{{this.listTitle}}</h2>
            <dl v-for="(val,ind) in singList" :key='ind'>
              <dt>
                <img :src="'/src/assets/listImg/'+val.img" alt="">
              </dt>
              <dd>
                <p>{{val.msg}}</p>
                <span>{{val.count}}</span>
              </dd>
            </dl>
         </div>
      </div>
</template>

<script>
import banners from './banner'
import navone from './navOne'
import navtwo from './navTwo'
import axios from 'axios'
import '../../mock/mock'
export default {
  name: 'recommend',
  components:{
    banners,navone,navtwo
  },
  data () {
    return {
       swiperList:[],
      navList:[
        {
          class:'icon iconfont icon-bofang',
          name:'私人FM'
        },
        {
          class:'icon iconfont icon-xinwenshenhedan-wenzijizhe',
          name:'每日推荐'
        },
        {
          class:'icon iconfont icon-iconset0163',
          name:'歌单'
        },
        {
          class:'icon iconfont icon-ziyuanldpi',
          name:'排行榜'
        }
      ],
      listTitle:'',
      singList:[],
     
    }
  },
  mounted(){
    axios.get('/singtuijian').then(res=>{
     this.listTitle=res.data.title;
     this.singList=res.data.list;
     this.swiperList=res.data.swiperList;
    })
  }
}
</script>

<style>
.recommend{
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x:hidden;
}
</style>
