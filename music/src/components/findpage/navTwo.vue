<template>
   <nav class="nav_tap_2">
           <p v-for='(val,ind) in this.navList' :key="ind">
                <i :class="val.class"></i>
                <span>{{val.name}}</span>
           </p>
   </nav>
</template>

<script>
export default {
  name: '',
     props:['navList'],
  data () {
    return {
     
    }
  },
  // mounted(){
  //     console.log(this.navList)
  // }

}
</script>

<style>

</style>
