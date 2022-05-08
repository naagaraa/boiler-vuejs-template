<template>
  <div class="container">
    <h1>Home page</h1>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  metaInfo: {
    title: "Home Page",
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
  },
};
</script>
