<template>
  <div>
    <p>parent</p>
    <input type="text" v-model="titleComputed" />
    <ChildInput v-model:title="titleComputed" />
  </div>
</template>

<script>
import { computed, defineComponent, ref } from 'vue'
import ChildInput from './Child.vue'

export default defineComponent({
  name: 'ParentInput',
  components: {
    ChildInput,
  },
  setup() {
    const title = ref('')
    const titleComputed = computed({
      get: () => title.value,
      set: (value) => (title.value = value),
    })

    return {
      titleComputed,
    }
  },
})
</script>

<style></style>
