<template>
  <div>
    <MultiSelect
      id="getStage"
      v-model="computedStage"
      display="chip"
      :options="stageInfos"
      optionLabel="name"
      scrollHeight="250px"
      placeholder="Select stages"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from '@vue/runtime-core'
import { StageInfos } from '../../../assets/stageInfo'

export default defineComponent({
  name: 'SplaMultiSelect',
  props: {
    stageNames: {
      type: Array as PropType<string[]>,
      default: '',
    },
    stageInfos: {
      type: Array as PropType<StageInfos>,
      default: '',
    },
  } as const,
  setup(props, { emit }) {
    const computedStage = computed({
      get: () => props.stageNames,
      set: (value) => {
        // 選択できるのは２ステージ以下
        if (props.stageNames.length < 3 && value.length < 3) emit('update:stageName', value)
      },
    })

    return {
      computedStage,
    }
  },
})
</script>

<style lang="scss" scoped>
.p-multiselect-panel .p-multiselect-header .p-checkbox {
  display: none !important;
}
.p-multiselect-header {
  justify-content: flex-end !important;
}
</style>
