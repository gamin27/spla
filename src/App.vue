import router from './router/index';
<template>
  <div id="nav">
    <ul class="router-links">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/v-model-test-page">V-model</router-link></li>
      <li><router-link to="/apollo-test-page">Apollo</router-link></li>
      <li><router-link to="/amplify-test-page">Amplify</router-link></li>
    </ul>
  </div>
  <router-view />
</template>

<style lang="scss" scoded>
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
