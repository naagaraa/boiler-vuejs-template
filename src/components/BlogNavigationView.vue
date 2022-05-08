<template lang="">
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to="/" class="nav-link active" >Home</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{name : 'BlogIndex'}" class="nav-link active" >Blog</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{name : 'ContactIndex'}" class="nav-link active" >Contact</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{name : 'AboutIndex'}" class="nav-link active" >About</router-link>
        </li>
      </ul>
      <div class="d-flex">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link :to="{name : 'LoginIndex'}" class="nav-link active" >login</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name : 'RegisterIndex'}" class="nav-link active" >Register</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
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
