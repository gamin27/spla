<template>
  <h2>{{ message }}</h2>
  <div></div>
  <ul>
    <li v-for="character in characters" :key="character.id">
      <h3>{{ character.name }}</h3>
    </li>
  </ul>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import { useQuery, useResult } from '@vue/apollo-composable'
import allCharactersQuery from '@/graphql/allCharacters.query.gql'

export default defineComponent({
  name: 'App',
  setup() {
    const message = ref("Retrieved the character's name.")
    const { result } = useQuery(allCharactersQuery)
    const characters = useResult(result, null, (data) => data.characters.results)
    console.log(characters)

    return { message, characters }
  },
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
