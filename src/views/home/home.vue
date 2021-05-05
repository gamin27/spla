<template>
  <div id="home">
    <div class="main">
      <div>
        <h1>SplaAI</h1>
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
  & div {
    position: absolute;
    top: 40%;
    margin: 0 auto;
    transform: translateY(-50%);
    width: 100%;
  }
}
</style>
