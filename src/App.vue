import router from './router/index';
<template>
  <div id="nav">
    <ul class="router-links">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/WinningPercentage">AISpla</router-link></li>
      <li><router-link to="/stage">Stage</router-link></li>
      <li><router-link to="/about">AIzutowai</router-link></li>
    </ul>
  </div>
  <router-view />
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="scss" scoded>
@import 'reset-css';
@import url('views/common/css/spla-multi-select.css');
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.router-links {
  display: flex;
  justify-content: center;
  list-style: none;
  li {
    margin-right: 16px;
  }
}
</style>
