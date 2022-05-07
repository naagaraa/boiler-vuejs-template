<template lang="">
  <div>
    <!-- <router-link to="/">home</router-link>
      <router-link to="/about">about</router-link> -->
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#"><router-link class="nav-link"  to="/">home</router-link></b-nav-item>
          <b-nav-item href="#"><router-link class="nav-link" to="/about">about</router-link></b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <!-- <b-navbar-nav class="ml-auto">
        </b-navbar-nav> -->
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default {
  name: "AppNavigationView",
};
</script>
<style>
a {
  margin-left: 30px;
}
</style>
