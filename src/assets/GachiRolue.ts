import { Ref, ref } from 'vue'

type GachiRoleData = {
  id: number
  name: string
}
type GachiRolesData = GachiRoleData[]
type GachiRoles = Ref<GachiRolesData>
type FetchGachiRoles = () => { gachiRules: GachiRoles }

export const gachiRoles = [
  { id: 1, name: 'ガチエリア' },
  { id: 2, name: 'ガチヤグラ' },
  { id: 3, name: 'ガチホコバトル' },
  { id: 4, name: 'ガチアサリ' },
]

const fetchGachiRoles: FetchGachiRoles = () => {
  const RefGachiRoles: GachiRoles = ref(gachiRoles)

  return { gachiRules: RefGachiRoles }
}

export { fetchGachiRoles, GachiRoles }
