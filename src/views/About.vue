<template>
  <div class="about">
    <h1>{{ message }}</h1>
    <div>
      <img src="https://pbs.twimg.com/profile_images/1323753389654618112/mX1CvRms_400x400.jpg" alt="Aizutowai" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'about',
  setup() {
    const message = ref('This is an about Aizutowai🍮')
    return { message }
  },
})
</script>
