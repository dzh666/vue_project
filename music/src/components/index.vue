<template>
     <div class="find_page">
         <router-view></router-view>
         <footer>
             <router-link v-for="(val,ind) in footerList" :key="ind" :to="val.path" active-class="active">
                 <i :class="val.class"></i>
                 <span>{{val.name}}</span>
             </router-link>
         </footer>
     </div>
</template> 

<script>

export default {
  name: '',
  data () {
    return {
     footerList:[
         {
             class:'icon iconfont icon-icon--1',
             name:'发现',
             path:'/index/find'
         },
         {
             class:'icon iconfont icon-bofang1',
             name:'视频',
             path:'/index/video'
         },
         {
             class:'icon iconfont icon-yinyue',
             name:'我的',
             path:'/index/wode'
         },
         {
             class:'icon iconfont icon-wode',
             name:'朋友',
             path:'/index/friend'
         },
         {
             class:'icon iconfont icon-wode1',
             name:'账号',
             path:'/index/user'
         },
     ]
    }
  }
}
</script>

<style>
 @import url('../css/find.css');
</style>
