import { reactive } from 'vue'
type FormData = {
  playerName: string
  ruleName: string
  stageNames: string[]
  killNumber: number | null
  deathNumber: number | null
}

type UseFormData = (data?: FormData) => { formData: FormData }

const useFormData: UseFormData = () => {
  const formData = reactive<FormData>({
    playerName: '',
    ruleName: '',
    stageNames: [],
    killNumber: 0,
    deathNumber: 0,
  })

  return { formData }
}

export { useFormData, UseFormData, FormData }
