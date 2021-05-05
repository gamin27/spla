<template>
  <h1>Stage</h1>
  <section class="rule">
    <div class="rule__label">Schedule</div>
    <div class="rule__name">
      <div v-if="stage.rule">
        <div>{{ stage.rule }}</div>
      </div>
      <div v-else><Skeleton :borderRadius="bprderRadius" height="24px" /></div>
    </div>
  </section>
  <section class="stage">
    <div class="stage__rule">Stage</div>
    <ul v-if="stage.maps_ex">
      <li v-for="map in stage.maps_ex" :key="map.id" class="stage__item">
        <div class="item__name">
          <span v-if="stage.maps_ex">
            {{ map.name }}
          </span>
          <!-- <span v-else>
            <Skeleton :borderRadius="bprderRadius" width="100%" />
          </span> -->
        </div>
        <div class="item__image">
          <div v-show="isLoading">
            <Skeleton :borderRadius="bprderRadius" height="96px" />
          </div>
          <div v-show="!isLoading">
            <img :src="map.image" @load="isLoaded" alt="map.id" />
          </div>
        </div>
      </li>
    </ul>
    <ul v-else>
      <li v-for="(item, index) in 2" :key="index" class="stage__item">
        <div class="item__name">
          <Skeleton :borderRadius="bprderRadius" width="100%" height="32px" />
        </div>
        <div class="item__image">
          <Skeleton :borderRadius="bprderRadius" height="96px" />
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
import { defineComponent, ref } from '@vue/runtime-core'
import Skeleton from 'primevue/skeleton'

export default defineComponent({
  name: 'Schedule',
  components: {
    Skeleton,
  },
  setup() {
    const bprderRadius = '4px'
    const stage = ref({})
    const isLoading = ref(true)
    const isLoaded = () => {
      isLoading.value = false
    }
    fetch('https://spla2.yuu26.com/gachi/now', {
      method: 'GET',
      mode: 'cors',
    })
      .then((response) => {
        return response.json()
      })
      .then((result) => {
        stage.value = result.result[0]
      })
      .catch((error) => console.log('error', error))

    return {
      stage,
      bprderRadius,
      isLoading,
      isLoaded,
    }
  },
})
</script>

<style lang="scss" scoped>
.rule {
  margin: 32px auto 0;
  .rule__label {
    font-weight: 600;
  }
  .rule__name {
    margin: 8px auto 0;
    font-size: 24px;
    font-weight: 600;
  }
}
.stage {
  margin-top: 32px;
  .stage__rule {
    font-weight: 600;
  }
  .stage__item {
    margin: 16px auto 0;
  }
  .item__name {
    font-weight: 600;
    font-size: 24px;
    height: 32px;
  }
  .item__image {
    margin: 0 auto;
    width: 100vw;
    height: 96px;
    img {
      width: 100vw;
      height: 96px;
      object-fit: cover;
    }
  }
}
</style>
