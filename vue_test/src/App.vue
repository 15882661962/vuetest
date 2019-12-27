<template>
  <div id="app">
    <router-view></router-view>
    <!--<login></login> -->
  </div>
</template>

<script>
import Login from './page/login/Login'
export default {
  name: 'App',
  components: {
    Login
  }
}
</script>

<style>
</style>
