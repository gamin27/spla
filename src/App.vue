import router from './router/index';
<template>
  <div class="wrapper">
    <div id="nav">
      <ul class="router-links">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/WinningPercentage">Win Rate</router-link></li>
        <li><router-link to="/schedule">Schedule</router-link></li>
        <li><router-link to="/about">🙋‍♀️</router-link></li>
      </ul>
    </div>
    <router-view />
  </div>
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
  color: #f4f4f4;
  background-color: #1f2d40;
  margin: 0 auto;
  padding: 0;
  width: 100vw;
  min-height: 100vh;
}
h1 {
  margin-top: 16px;
  text-align: center;
  font-size: 48px;
  font-weight: 600;
}

#nav {
  margin: 0 auto;
  padding: 16px 0;
}

#nav a {
  font-weight: bold;
  color: #80c683;
  padding: 4px 4px;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #f4f4f4;
  background-color: #80c683;
  border-radius: 4px;
}

.router-links {
  display: flex;
  justify-content: center;
  list-style: none;
  margin-left: -8px;
  li {
    margin-left: 8px;
  }
}
// .wrapper {
//   padding: 0 16px;
// }
</style>
