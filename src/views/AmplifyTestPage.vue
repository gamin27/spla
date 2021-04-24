<template>
  <div id="spla-amplify">
    <h1>Spla Amplify</h1>
    <h2>足算する余</h2>
    <div>
      <label for="num1" style="display: block">足すもの</label>
      <input type="number" name="num1" v-model="num1" />
    </div>
    <div style="margin-top: 16px">
      <label for="num2" style="display: block">足されるもの</label>
      <input type="number" name="num2" v-model="num2" />
    </div>
    <div>
      <button type="button" @click="submit">Call API</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue-demi'

// type RequestInit = {
//   method: string
//   headers: HeadersInit
//   body: string
//   redirect: RequestRedirect
// }
const useCallAPI = (num1: number, num2: number) => {
  const myHeaders = new Headers()
  myHeaders.append('Content-Type', 'application/json')
  // todo: サーバサイドのプロパティ名を適切なものに変える
  const raw = JSON.stringify({ firstName: num1, lastName: num2 })
  const myRedirect = 'follow'
  fetch('https://zt8gesobv3.execute-api.us-east-1.amazonaws.com/dev', {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: myRedirect,
  })
    .then((response) => response.text())
    .then((result) => alert(JSON.parse(result).body))
    .catch((error) => console.log('error', error))
}
export default defineComponent({
  name: 'AmplifyTestPage',
  setup() {
    const num1 = ref<number | null>(null)
    const num2 = ref<number | null>(null)
    const submit = () => {
      if (num1.value === null || num2.value === null) {
        alert('未入力がある余')
        return
      }
      const call = useCallAPI
      call(num1.value, num2.value)
    }

    return {
      num1,
      num2,
      submit,
    }
  },
})
</script>
<style scoped></style>
