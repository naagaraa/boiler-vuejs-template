<template>
   <div>
      <div class="container" >
         <div class="row d-flex justify-content-center">
        <div class="col-6">
          <h1>register page</h1>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label"
              >Email address</label
            >
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label"
              >Password</label
            >
            <input
              type="password"
              class="form-control"
              id="exampleFormControlInput1"
            />
          </div>
          <div>
            <button class="btn btn-primary">Register</button>
          </div>
        </div>
      </div>
      </div>
   </div>
</template>
<script>
export default {
   name: 'RegisterView',
   metaInfo: {
      title: 'Register Page',
      }
}
</script>
<style lang="">
   
</style>