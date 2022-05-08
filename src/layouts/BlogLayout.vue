<template lang="">
   <div>
      
      <BlogNavbar/>
      <slot/>
   </div>
</template>
<script>
import BlogNavbar from '../components/BlogNavigationView.vue';
export default {
   name: "BlankLayout",
   components: {
      BlogNavbar,
   },
}
</script>
<style lang="">
   
</style>