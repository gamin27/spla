<template>
  <div id="spla-amplify">
    <h1>Spla Amplify</h1>
    <div>
      <label for="playerName" style="display: block">プレイヤー</label>
      <input type="text" name="playerName" v-model="playerName" />
    </div>
    <article>
      <div style="margin-top: 16px">
        <label for="ruleName" style="display: block">ルール</label>
        <select name="ruleName" v-model="ruleName">
          <option v-for="item in gachiRole" :value="item.name" :key="item.id">{{ item.name }}</option>
        </select>
      </div>
      <div style="margin-top: 16px">
        <label for="stageName" style="display: block">ステージ</label>
        <select name="ruleName" v-model="stageName">
          <option v-for="item in stageInfo" :value="item.name" :key="item.id">{{ item.name }}</option>
        </select>
      </div>
      <div style="margin-top: 16px">
        <label for="killNumber" style="display: block">キル数</label>
        <input type="number" name="killNumber" v-model="killNumber" />
      </div>
      <div style="margin-top: 16px">
        <label for="deathNumber" style="display: block">デス数</label>
        <input type="number" name="deathNumber" v-model="deathNumber" />
      </div>
      <div style="margin-top: 24px">
        <button type="button" @click="submit">Call API</button>
      </div>
    </article>
    <div style="margin-top: 48px">
      <div v-if="isLoading" style="color: red">loading...</div>
      <div>あなたの勝率は・・・: {{ answer }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from 'vue'
import { gachiRole } from '@/assets/GachiRolue'
import { stageInfo } from '@/assets/stageInfo'

type FormData = {
  playerName: number | null
  ruleName: string
  stageName: string
  killNumber: number | null
  deathNumber: number | null
}
const useCallAPI = (data: FormData) => {
  const myHeaders = new Headers()
  myHeaders.append('Content-Type', 'application/json')
  // todo: サーバサイドのプロパティ名を適切なものに変える
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
  name: 'AmplifyTestPage',
  setup() {
    const formData = reactive({
      playerName: null,
      ruleName: gachiRole[0].name,
      stageName: stageInfo[0].name,
      killNumber: null,
      deathNumber: null,
    })
    const answer = ref('')
    const isLoading = ref(false)
    const submit = () => {
      if (formData.playerName === null || formData.ruleName === null) {
        alert('未入力がある余')
        return
      }
      const fetch = useCallAPI
      isLoading.value = true
      fetch(formData).then((result) => {
        // todo: 型をなんとかする
        answer.value = result as string
        isLoading.value = false
      })
      console.log(answer.value)
    }

    return {
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
