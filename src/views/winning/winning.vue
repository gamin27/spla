<template>
  <div id="winning">
    <Toast position="top-right" group="error" />
    <h1>Spla Amplify</h1>
    <div class="frame">
      <div class="margin-top-column">
        <!-- todo:バリデーションをつける -->
        <div class="p-fluid">
          <div class="p-field">
            <label for="playerName" style="display: block">palyer name</label>
            <InputText type="text" name="playerName" v-model="playerName" />
          </div>
        </div>
      </div>
      <div class="margin-top-column">
        <div class="p-fluid">
          <div class="p-field">
            <label for="ruleName" style="display: block">rule</label>
            <Dropdown v-model="ruleName" :options="gachiRules" optionLabel="name" placeholder="choose a stage" />
          </div>
        </div>
      </div>
      <div class="p-fluid">
        <div class="margin-top-column p-field">
          <label for="stageName">stage</label>
          <Dropdown id="stageName" v-model="stageName" :options="stageInfos" optionLabel="name" placeholder="choose a stage" />
        </div>
      </div>
      <div class="margin-top-column">
        <div class="p-fluid">
          <div class="p-field">
            <label for="killNumber">kill</label>
            <InputNumber
              name="killNumber"
              id="killNumberz"
              v-model="killNumber"
              :min="0"
              :max="30"
              showButtons
              buttonLayout="horizontal"
              incrementButtonIcon="pi pi-plus"
              decrementButtonIcon="pi pi-minus"
            />
          </div>
        </div>
      </div>
      <div class="margin-top-column">
        <div class="p-fluid">
          <div class="p-field">
            <label for="deathNumber">death</label>
            <InputNumber
              name="deathNumber"
              id="deathNumber"
              v-model="deathNumber"
              :min="0"
              :max="30"
              showButtons
              buttonLayout="horizontal"
              incrementButtonIcon="pi pi-plus"
              decrementButtonIcon="pi pi-minus"
            />
          </div>
        </div>
      </div>
      <div class="margin-top-column">
        <Button label="callAPI" class="submit" @click="submit" />
      </div>
      <div style="margin-top: 48px">
        <div v-if="isLoading" style="color: red">loading...</div>
        <div>あなたの勝率は・・・</div>
        <div>{{ callAnswer }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, toRefs } from 'vue'
import { gachiRules } from '@/assets/GachiRule'
import { useStageInfos } from '@/assets/stageInfo'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Dropdown from 'primevue/dropdown'
import InputNumber from 'primevue/inputnumber'
import { useFormData } from '@/views/winning/compositions/useFormData'
import { useFetchWinning } from '@/views/winning/module/usefetchWinning'
import { useToast } from 'primevue/usetoast'
import Toast from 'primevue/toast'

export default defineComponent({
  name: 'WinningPercentage',
  components: {
    Button,
    InputText,
    Dropdown,
    InputNumber,
    Toast,
  },
  setup() {
    const { formData } = useFormData()
    const { stageInfos } = useStageInfos()
    const stageList = ref(stageInfos)
    const callAnswer = ref('')
    const isLoading = ref(false)
    const toast = useToast()

    const submit = () => {
      // todo: 全ての項目でバリデーションを反映させる
      const errorPoint = ref('')
      console.log('toast')
      if (formData.playerName === '' || formData.stageName === '' || formData.ruleName === '') {
        if (!formData.playerName) errorPoint.value += 'player name, '
        if (!formData.ruleName) errorPoint.value += 'rule, '
        if (!formData.stageName) errorPoint.value += 'stage, '
        toast.add({ severity: 'error', summary: '未入力がある余', detail: errorPoint.value, life: 3000, group: 'error' })

        return
      }
      const fetch = useFetchWinning
      isLoading.value = true
      fetch(formData).then((result) => {
        callAnswer.value = result as string
        isLoading.value = false
      })
    }

    return {
      ...toRefs(formData),
      stageList,
      submit,
      callAnswer,
      isLoading,
      gachiRules,
      stageInfos,
    }
  },
})
</script>

<style lang="scss">
#winning {
  font-weight: bold;
  text-align: left;
}
h1 {
  text-align: center;
}
.frame {
  margin: auto;
  width: 400px;
  max-width: 80%;
}
.margin-top-column {
  margin-top: 32px;
}
.submit {
  width: 100%;
}
</style>
