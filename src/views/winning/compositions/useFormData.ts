import { reactive } from 'vue'
type FormData = {
  playerName: number | null
  ruleName: string | undefined
  stageName: string | undefined
  killNumber: number | null
  deathNumber: number | null
}

type UseFormData = (data?: FormData) => { formData: FormData }

const useFormData: UseFormData = () => {
  const formData = reactive<FormData>({
    playerName: null,
    ruleName: '',
    stageName: '',
    killNumber: 0,
    deathNumber: 0,
  })

  return { formData }
}

export { useFormData, UseFormData, FormData }
