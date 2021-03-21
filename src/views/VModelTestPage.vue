<template>
  <div class="about">
    <h1>This is an v-model test page.</h1>
    <ParentInput />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ParentInput from '@/components/Parent.vue'

export default defineComponent({
  name: 'VModelTestPage',
  components: {
    ParentInput,
  },
})
</script>
