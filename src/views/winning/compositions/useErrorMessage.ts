import { FormData } from '@/views/winning/compositions/useFormData'
import { ref, Ref } from 'vue'

type UseErrorMessage = (
  formData: FormData,
) => {
  inValid: Ref<boolean>
  errorPoint: Ref<string>
}

// bug
const useErrorMessage: UseErrorMessage = (formData: FormData) => {
  const inValid = ref(false)
  const errorPoint = ref('')
  inValid.value = formData.playerName === '' || formData.stageNames === [] || formData.ruleName === ''

  if (!formData.playerName) errorPoint.value += 'player name, '
  if (!formData.ruleName) errorPoint.value += 'rule, '
  if (formData.stageNames !== []) errorPoint.value += 'stage, '
  return { inValid, errorPoint }
}

export { useErrorMessage }
