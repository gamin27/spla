<template>
  <div>
    <p>grand child</p>
    <input type="text" v-model="titleComputed" />
  </div>
</template>

<script>
import { computed, defineComponent, toRefs } from 'vue'

export default defineComponent({
  props: { title: null },
  emits: ['update:title'],
  setup(props, { emit }) {
    const { title } = toRefs(props)
    const titleComputed = computed({
      get: () => title.value,
      set: (value) => emit('update:title', value),
    })

    return {
      titleComputed,
    }
  },
})
</script>
