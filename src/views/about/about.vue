<template>
  <div id="about">
    <h1>I am</h1>
    <article class="item">
      <ul>
        <li v-for="developer in developers" class="item" :key="developer.id">
          <h2>{{ developer.name }}</h2>
          <div class="img">
            <img :src="developer.image" :alt="developer.name" />
          </div>
        </li>
      </ul>
    </article>
    <!-- todo: gamineのprofileも入れたい -->
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  name: 'about',
  setup() {
    const developers = reactive([
      { id: 1, name: 'Aizutowai🍮', image: 'https://pbs.twimg.com/profile_images/1323753389654618112/mX1CvRms_400x400.jpg' },
      { id: 2, name: 'gamine🍑', image: 'img/gamine.jpg' },
    ])
    return { developers }
  },
})
</script>

<style lang="scss" scoped>
.item {
  margin-top: 32px;
  h2 {
    font-size: 24px;
    font-weight: 600;
  }
}
.img {
  margin-top: 8px;
  img {
    width: 100vw;
    height: 96px;
    object-fit: cover;
  }
}
</style>
