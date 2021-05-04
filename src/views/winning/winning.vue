<template>
  <div id="winning">
    <Toast style="width: 300px" position="bottom-right" group="error" class="error-toast" />
    <h1>Win Rate</h1>
    <div class="frame">
      <div class="margin-top-column">
        <!-- todo:バリデーションをつける -->
        <div class="p-fluid">
          <div class="p-field">
            <label for="playerName" style="display: block">player name</label>
            <InputText style="width: 300px" type="text" name="playerName" v-model="playerName" />
          </div>
        </div>
      </div>
      <div class="margin-top-column">
        <div class="p-fluid">
          <div class="p-field">
            <label for="ruleName" style="display: block">rule</label>
            <Dropdown v-model="ruleName" :options="gachiRules" optionLabel="name" placeholder="select a rule" />
          </div>
        </div>
      </div>
      <div class="margin-top-column">
        <div class="p-fluid">
          <div class="p-field">
            <label for="killNumber">stage</label>
            <span class="font-weight-thin margin-left-16 font-size-small sub-label">２つまで</span>
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
              class="input-number"
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
import { computed, defineComponent, ref, toRefs } from 'vue'
import { gachiRules } from '@/assets/GachiRule'
import { useStageInfos } from '@/assets/stageInfo'
import { useFormData } from '@/views/winning/compositions/useFormData'
import { useFetchWinning } from '@/views/winning/module/usefetchWinning'
import { useToast } from 'primevue/usetoast'
import { useErrorMessage } from '@/views/winning/compositions/useErrorMessage'
import Toast from 'primevue/toast'

export default defineComponent({
  name: 'WinningPercentage',
  components: {
    Toast,
  },
  setup() {
    const { formData } = useFormData()
    const { stageInfos } = useStageInfos()
    const stageList = ref(stageInfos)
    const callAnswer = ref('')
    const isLoading = ref(false)
    const toast = useToast()
    const isValidStages = ref(false)
    const computedStage = computed({
      get: () => formData.stageNames,
      set: (value) => {
        // 選択できるのは２ステージ以下
        if (formData.stageNames.length < 3 && value.length < 3) formData.stageNames = value
        // todo : 色を反映させる
        isValidStages.value = formData.stageNames.length == 2
        console.log(isValidStages.value)
      },
    })

    const submit = () => {
      const { inValid, errorPoint } = useErrorMessage(formData)
      console.log(inValid.value)
      // if (inValid) {
      //   toast.add({ severity: 'error', summary: '未入力がある余', detail: errorPoint.value, life: 3000, group: 'error' })
      //   return
      // }
      const fetch = useFetchWinning
      isLoading.value = true
      fetch(formData).then((result) => {
        callAnswer.value = result as string
        isLoading.value = false
      })
    }

    return {
      isValidStages,
      computedStage,
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
  font-size: 48px;
}
label {
  font-size: 24px;
}
.sub-label {
  color: #4f4f4f;
}
.error-toast {
  width: 300px;
}
.frame {
  margin: auto;
  max-width: 300px;
}
.p-multiselect-token-label {
  font-size: 8px;
}
.p-inputnumber-input {
  text-align: center;
}
.margin-top-column {
  margin-top: 32px;
}
.margin-left-16 {
  margin-left: 16px;
}
.font-size-small {
  font-size: 16px;
}
.submit {
  width: 100%;
}
.font-weight-thin {
  font-weight: 400;
}
</style>
