import { FormData } from '@/views/winning/compositions/useFormData'
import { ref, Ref } from 'vue'

type UseErrorMessage = (
  formData: FormData,
) => {
  errorPoint: Ref<string>
}

// bug
const useErrorMessage: UseErrorMessage = (formData: FormData) => {
  const errorPoint = ref('')

  if (!formData.playerName) errorPoint.value += 'player name, '
  if (!formData.ruleName) errorPoint.value += 'rule, '
  if (formData.stageNames.length === 0) errorPoint.value += 'stage, '
  return { errorPoint }
}

export { useErrorMessage }
