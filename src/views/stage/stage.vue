<template>
  <div>
    <h1>Stage</h1>
    <div>{{ stage.rule }}</div>
    <div v-if="stage">
      <ul>
        <li v-for="map in stage.maps_ex" :key="map.id">
          <div>{{ map.name }}</div>
          <div><img style="width: 300px" :src="map.image" alt="map.id" /></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from '@vue/runtime-core'

export default defineComponent({
  name: 'Stage',
  setup() {
    const stage = ref({})
    // const stage = ref({})
    // const req = new XMLHttpRequest()
    // // memo: 連絡先が必要になるかもしれない。
    // // req.setRequestHeader('User-Agent', 'twitter @homusuke SplaAI/0.1 ')
    // req.onreadystatechange = function () {
    //   if (req.readyState == 4) {
    //     // 通信の完了時
    //     if (req.status == 200) {
    //       // 通信の成功時
    //       console.log(req.response())
    //       stage.value = req.response
    //     }
    //   } else {
    //     console.log('通信中...')
    //   }
    // }
    // req.open('GET', 'https://spla2.yuu26.com/gachi/now', true)
    // req.send()

    // const myHeaders = new Headers()
    // myHeaders.append('application/json', 'charset=utf-8')
    // fetch('https://spla2.yuu26.com/gachi/now', {
    //   method: 'GET',
    //   headers: myHeaders,
    // })
    //   .then((response) => {
    //     console.log(response)
    //   })
    //   // memo:配列で撮りたい場合
    //   // .then((response) => {
    //   //   console.log(response.json())
    //   // })
    //   .catch((error) => console.log('error', error))

    fetch('https://spla2.yuu26.com/gachi/now', {
      method: 'GET',
      mode: 'cors',
    })
      .then((response) => {
        return response.json()
      })
      .then((result) => {
        stage.value = result.result[0]
        console.log(result.result[0])
      })
      // memo:配列で撮りたい場合
      // .then((response) => {
      //   console.log(response.json())
      // })
      .catch((error) => console.log('error', error))

    return {
      stage,
    }
  },
})
</script>
