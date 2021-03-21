<template>
  <div>
    <p>child</p>
    <input type="text" v-model="titleComputed" />
    <GrandChild v-model:title="titleComputed" />
  </div>
</template>

<script>
import { defineComponent, toRefs, computed } from 'vue'
import GrandChild from './GrandChild.vue'
export default defineComponent({
  name: 'ChildInput',
  components: {
    GrandChild,
  },
  props: {
    title: String,
  },
  emits: ['update:title'],
  setup(props, { emit }) {
    const { title } = toRefs(props)
    const titleComputed = computed({
      get: () => title.value,
      set: (value) => {
        emit('update:title', value)
      },
    })

    return {
      titleComputed,
    }
  },
})
</script>

<style></style>
