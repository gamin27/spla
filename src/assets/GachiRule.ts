import { Ref, ref } from 'vue'

type GachiRuleData = {
  id: number
  name: string
}
type GachiRulesData = GachiRuleData[]
type GachiRules = Ref<GachiRulesData>
type FetchGachiRules = () => { gachiRules: GachiRules }

export const gachiRules = [
  { id: 1, name: 'ガチエリア' },
  { id: 2, name: 'ガチヤグラ' },
  { id: 3, name: 'ガチホコバトル' },
  { id: 4, name: 'ガチアサリ' },
]

const fetchGachiRules: FetchGachiRules = () => {
  const RefGachiRules: GachiRules = ref(gachiRules)

  return { gachiRules: RefGachiRules }
}

export { fetchGachiRules, GachiRules }
