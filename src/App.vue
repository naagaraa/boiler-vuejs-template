<template>
  <div>
    <AppNavigation/>
    <RouterView/>
  </div>
</template>

<script>
import AppNavigation from './components/AppNavigationView.vue'
export default {
  name: "App",
  components: {
    AppNavigation
  }
};
</script>
