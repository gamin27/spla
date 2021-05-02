import { FormData } from '../compositions/useFormData'

const useFetchWinning = async (data: FormData): Promise<string | void> => {
  const myHeaders = new Headers()
  myHeaders.append('Content-Type', 'application/json')
  const raw = JSON.stringify({ ...data })
  const myRedirect = 'follow'
  return fetch('https://zt8gesobv3.execute-api.us-east-1.amazonaws.com/dev', {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: myRedirect,
  })
    .then((response) => response.text())
    .then((result) => JSON.parse(result).body as string)
    .catch((error) => console.log('error', error))
}

export { useFetchWinning }
