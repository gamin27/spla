// vue
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

// prime VUE
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import CascadeSelect from 'primevue/cascadeselect'
import Dropdown from 'primevue/dropdown'
import ToastService from 'primevue/toastservice'
import InputNumber from 'primevue/inputnumber'
import MultiSelect from 'primevue/multiselect'
import Skeleton from 'primevue/skeleton'
import 'primevue/resources/themes/vela-green/theme.css' //theme
import 'primevue/resources/primevue.min.css' //core css
import 'primeicons/primeicons.css' //icons

createApp(App)
  .use(PrimeVue)
  .use(store)
  .use(router)
  .use(ToastService)
  .component('InputText', InputText)
  .component('Button', Button)
  .component('CascadeSelect', CascadeSelect)
  .component('Dropdown', Dropdown)
  .component('InputNumber', InputNumber)
  .component('MultiSelect', MultiSelect)
  .component('Skeleton', Skeleton)
  .mount('#app')
