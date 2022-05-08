<template lang="">
   <div>
      <div class="container" >
         <h1>Blog page</h1>
      </div>
   </div>
</template>
<script>
export default {
   name: "BlogView",
   metaInfo: {
      title: 'Blog Page',
      meta: [
      { 
        charset: "utf-8" 
      },
      { 
        name: "viewport",
        content: "width=device-width, initial-scale=1",
        property: 'og:title',
      },
    ],
    link: [
      { 
        rel: "stylesheet", 
        // href: "/css/index.css" 
        },
      { 
        rel: "favicon", 
        href: "favicon.ico" 
      },
    ],
  }
}
</script>
<style>
   
</style>