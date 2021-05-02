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
          <Dropdown v-model="ruleName" :options="gachiRole" optionLabel="name" placeholder="choose a stage" />
        </div>
        <div class="margin-top-column">
          <label for="stageName" style="display: block">stage</label>
          <Dropdown v-model="stageName" :options="stageInfo" optionLabel="name" placeholder="choose a stage" />
        </div>
        <div class="margin-top-column">
          <div>
            <label for="killNumber">kill</label>
          </div>
          <InputNumber
            name="killNumber"
            id="killNumber"
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
        <div>あなたの勝率は・・・: {{ answer }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from 'vue'
import { gachiRole } from '@/assets/GachiRolue'
import { stageInfo } from '@/assets/stageInfo'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Dropdown from 'primevue/dropdown'
import InputNumber from 'primevue/inputnumber'

type FormData = {
  playerName: number | null
  ruleName: string | undefined
  stageName: string | undefined
  killNumber: number | null
  deathNumber: number | null
}
const useCallAPI = async (data: FormData) => {
  const myHeaders = new Headers()
  myHeaders.append('Content-Type', 'application/json')
  const raw = JSON.stringify({ ...data })
  const myRedirect = 'follow'
  return fetch('https://zt8gesobv3.execute-api.us-east-1.amazonaws.com/dev', {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: myRedirect,
  })
    .then((response) => response.text())
    .then((result) => JSON.parse(result).body as string)
    .catch((error) => console.log('error', error))
}

export default defineComponent({
  name: 'WinningPercentage',
  components: {
    Button,
    InputText,
    Dropdown,
    InputNumber,
  },
  setup() {
    const formData = reactive<FormData>({
      playerName: null,
      ruleName: gachiRole[0].name,
      stageName: stageInfo[0].name,
      killNumber: 0,
      deathNumber: 0,
    })
    const stageList = ref(stageInfo)
    const num = ref(0)
    const answer = ref('')
    const isLoading = ref(false)
    const submit = () => {
      // todo: 全ての項目でバリデーションを反映させる
      if (formData.killNumber === null || formData.deathNumber === null) {
        alert('未入力がある余')
        return
      }
      // todo:間にハイフンが入っても通ってしまう不具合を直す
      if (formData?.killNumber < 0 || formData?.deathNumber < 0) {
        alert('人間様余、kill/deathは０以上で入力するのだぞ')
        return
      }
      const fetch = useCallAPI
      isLoading.value = true
      fetch(formData).then((result) => {
        // todo: 型をなんとかする
        answer.value = result as string
        isLoading.value = false
      })
    }

    return {
      stageList,
      num,
      ...toRefs(formData),
      submit,
      answer,
      isLoading,
      gachiRole,
      stageInfo,
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
