import { Ref, ref } from 'vue'

type GachiRoleData = {
  id: number
  name: string
}
type GachiRolesData = GachiRoleData[]
type GachiRoles = Ref<GachiRolesData>
type FetchGachiRoles = () => { gachiRoles: GachiRoles }

const gachiRolesData = [
  { id: 1, name: 'ガチエリア' },
  { id: 2, name: 'ガチヤグラ' },
  { id: 3, name: 'ガチホコバトル' },
  { id: 4, name: 'ガチアサリ' },
]

const fetchGachiRoles: FetchGachiRoles = () => {
  const gachiRoles: GachiRoles = ref(gachiRolesData)

  return { gachiRoles }
}

export { fetchGachiRoles, GachiRoles }
