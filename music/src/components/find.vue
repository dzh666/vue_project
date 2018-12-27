<template>
    <div class="find">
         <header>
              <i class="icon iconfont icon-maikefeng"></i>
               <label for="">
                   <input type="text" placeholder="猜你喜欢 浮生">
               </label>
              <i class="icon iconfont icon-icon--"></i>
         </header>
         <section>
          <router-view></router-view>
         </section>
    </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
     
    }
  }
}
</script>

<style>
  .find{
      flex:1;
      width: 100%;
      overflow: hidden;
      display: flex;
      flex-direction: column;
  }
</style>
