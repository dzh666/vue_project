<template>
    <div class="anchor">
          <navone></navone>
          <banners :swiperList='swiperList'></banners>
          <navtwo :navList='navList'></navtwo>
           <div class="anchor_list">
             <h2>{{this.listTitle}}</h2>
             <dl v-for="(val,ind) in list" :key="ind">
               <dt>
                 <img :src="'/src/assets/listImg/'+val.img" alt="">
               </dt>
               <dd>
                 <h5>{{val.name}}</h5>
                 <p>节目:{{val.num}}</p>
                 <em>{{val.msg}}</em>
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
      navList:[
        {
          class:'icon iconfont icon-fenlei',
          name:'电台分类'
        },
        {
          class:'icon iconfont icon-benzi',
          name:'电台排行'
        },
        {
          class:'icon iconfont icon-icon-',
          name:'DI电音'
        },
        {
          class:'icon iconfont icon-xuegao',
          name:'小冰电台'
        }
      ],
      listTitle:'',
      list:[],
      swiperList:[]
    }
  },
  mounted(){
    axios.get('/anchorData').then(res=>{
     this.listTitle=res.data.title;
     this.list=res.data.list;
     this.swiperList=res.data.swiperList
    })
  }
}
</script>

<style>
.anchor{
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x:hidden;
}
</style>
