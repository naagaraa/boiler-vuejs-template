<template>
  <div>
    <component :is="layout">
      <RouterView/>
    </component>
  </div>
</template>

<script>
const defaultLayout = 'BlankLayout';
export default {
  name: "App",
  computed: {
    layout() {
      return this.$route.meta.layout || defaultLayout;
    }
  }
};
</script>
