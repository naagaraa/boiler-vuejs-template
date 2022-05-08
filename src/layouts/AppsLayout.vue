<template lang="">
   <div>
      <AppsNavigaton/>
      <slot/>
   </div>
</template>
<script>
import AppsNavigaton from '../components/AppsNavigaton.vue';
export default {
   name: "AppsLayout",
   components: {
      AppsNavigaton
   }
}
</script>
<style lang="">
   
</style>