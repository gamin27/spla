<template>
  <h1>Schedule</h1>
  <div class="header">
    <ul>
      <li><router-link to="/router/gachi"></router-link></li>
    </ul>
    <router-view />
  </div>
  <div v-if="stages[0]">
    <article v-for="stage in stages" :key="stage.start">
      <section class="time section">
        <div v-if="stage.start">{{ time(stage.start) }} ~ {{ time(stage.end) }}</div>
        <div v-else><Skeleton :borderRadius="bprderRadius" height="18px" width="180px" style="margin: auto" /></div>
      </section>
      <section class="rule section">
        <div class="rule__label">Rule</div>
        <div class="rule__name">
          <div v-if="stage.rule">
            <div>{{ stage.rule }}</div>
          </div>
          <div v-else><Skeleton :borderRadius="bprderRadius" height="24px" width="240px" style="margin: auto" /></div>
        </div>
      </section>
      <section class="stage section">
        <div class="stage__rule">Stage</div>
        <ul v-if="stage.maps_ex">
          <li v-for="map in stage.maps_ex" :key="map.id" class="stage__item">
            <div class="item__name">
              <span v-if="stage.maps_ex">
                {{ map.name }}
              </span>
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
              <Skeleton :borderRadius="bprderRadius" width="180px" height="20px" style="margin: auto" />
            </div>
            <div class="item__image">
              <Skeleton :borderRadius="bprderRadius" height="96px" />
            </div>
          </li>
        </ul>
      </section>
    </article>
  </div>
  <div v-else>
    <div v-for="(item, index) in 4" :key="index">
      <section class="time section">
        <Skeleton :borderRadius="bprderRadius" height="18px" width="180px" style="margin: auto" />
      </section>
      <section class="rule section">
        <div class="rule__label">Rule</div>
        <div class="rule__name">
          <Skeleton :borderRadius="bprderRadius" height="24px" width="240px" style="margin: auto" />
        </div>
      </section>
      <section class="stage section">
        <div class="stage__rule">Stage</div>
        <ul>
          <li v-for="(item, index) in 2" :key="index" class="stage__item">
            <div class="item__name">
              <Skeleton :borderRadius="bprderRadius" width="180px" height="20px" style="margin: auto" />
            </div>
            <div class="item__image">
              <Skeleton :borderRadius="bprderRadius" height="96px" />
            </div>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/runtime-core'
import Skeleton from 'primevue/skeleton'

export default defineComponent({
  name: 'GachiSchedule',
  components: {
    Skeleton,
  },
  setup() {
    const bprderRadius = '4px'
    const stages = ref([])
    const isLoading = ref(true)
    const isLoaded = () => (isLoading.value = false)

    fetch('https://spla2.yuu26.com/gachi/schedule', {
      method: 'GET',
      mode: 'cors',
    })
      .then((response) => {
        return response.json()
      })
      .then((result) => {
        stages.value = result.result
        console.log('---result', result)
      })
      .catch((error) => console.log('error', error))

    return {
      stages,
      bprderRadius,
      isLoading,
      isLoaded,
      time: (value: string) => value?.slice(11, -3) || '',
    }
  },
})
</script>

<style lang="scss" scoped>
$main-color: #80c683;
.header {
  display: flex;
  justify-content: center;
}
.section {
  margin: 16px auto 0;
}
.time {
  font-weight: 600;
  color: $main-color;
  font-size: 18px;
}
.rule {
  .rule__label {
    font-weight: 600;
    color: $main-color;
  }
  .rule__name {
    margin: 8px auto 0;
    font-size: 24px;
    font-weight: 600;
  }
}
.stage {
  .stage__rule {
    font-weight: 600;
    color: $main-color;
  }
  .stage__item {
    margin: 8px auto 0;
  }
  .item__name {
    font-weight: 600;
    font-size: 20px;
  }
  .item__image {
    margin: 4px auto 0;
    width: 100vw;
    height: 96px;
    img {
      width: 100vw;
      height: 96px;
      object-fit: cover;
      filter: brightness(60%);
    }
  }
}
</style>
