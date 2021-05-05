<template>
  <div id="home">
    <div class="main">
      <div class="main__item">
        <h1>SplaAI</h1>
        <div class="link">
          <router-link to="/WinningPercentage">はじめる</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Home',
})
</script>

<style lang="scss">
.main {
  position: relative;
  width: 100vw;
  height: 90vh;
  .main__item {
    position: absolute;
    top: 40%;
    margin: 0 auto;
    transform: translateY(-50%);
    width: 100%;
    .link {
      display: block;
      margin-top: 32px;
    }
    a {
      font-weight: bold;
      color: #f4f4f4;
      background-color: #80c683;
      border-radius: 4px;
      padding: 8px 16px;
      text-decoration: none;
    }
  }
}
</style>
