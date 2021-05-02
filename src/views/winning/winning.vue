<template>
  <div id="winning">
    <h1>Spla Amplify</h1>
    <div class="frame">
      <div class="margin-top-column">
        <!-- todo:バリデーションをつける -->
        <label for="playerName" style="display: block">palyer name</label>
        <InputText type="text" name="playerName" v-model="playerName" />
      </div>
      <article>
        <div class="margin-top-column">
          <label for="ruleName" style="display: block">role</label>
          <Dropdown v-model="ruleName" :options="gachiRoles" optionLabel="name" placeholder="choose a stage" />
        </div>
        <div class="margin-top-column">
          <label for="stageName" style="display: block">stage</label>
          <Dropdown v-model="stageName" :options="stageInfos" optionLabel="name" placeholder="choose a stage" />
        </div>
        <div class="margin-top-column">
          <div>
            <label for="killNumber">kill</label>
          </div>
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
        <div class="margin-top-column">
          <div>
            <label for="deathNumber">death</label>
          </div>
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

        <div class="margin-top-column">
          <Button :label="'ask IA'" class="submit" @click="submit" />
        </div>
      </article>
      <div style="margin-top: 48px">
        <div v-if="isLoading" style="color: red">loading...</div>
        <div>あなたの勝率は・・・: {{ callAnswer }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, toRefs } from 'vue'
import { gachiRoles } from '@/assets/GachiRolue'
import { useStageInfos } from '@/assets/stageInfo'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Dropdown from 'primevue/dropdown'
import InputNumber from 'primevue/inputnumber'
import { useFormData } from '@/views/winning/compositions/useFormData'
import { useFetchWinning } from '@/views/winning/module/usefetchWinning'

export default defineComponent({
  name: 'WinningPercentage',
  components: {
    Button,
    InputText,
    Dropdown,
    InputNumber,
  },
  setup() {
    const { formData } = useFormData()
    const { stageInfos } = useStageInfos()
    const stageList = ref(stageInfos)
    const callAnswer = ref('')
    const isLoading = ref(false)
    // todo: toastを書いてみる
    // const toast = useToast()

    const submit = () => {
      // todo: 全ての項目でバリデーションを反映させる
      if (formData.killNumber === null || formData.deathNumber === null) {
        alert('未入力がある余')
        return
      }
      const fetch = useFetchWinning
      isLoading.value = true
      fetch(formData).then((result) => {
        // todo: 型をなんとかする
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
      gachiRoles,
      stageInfos,
    }
  },
})
</script>

<style lang="scss">
#winning {
  font-weight: bold;
}
.frame {
  margin: auto;
  width: 400px;
  max-width: 80%;
}
.margin-top-column {
  margin-top: 56px;
}

.submit {
  background-color: var(--green-300);
}
</style>
