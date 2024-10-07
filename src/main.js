import { createApp } from 'vue'
import {Quasar} from 'quasar'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'


import App from './App.vue'

const MyApp = createApp(App)

MyApp.use(Quasar,{
    plugins: {},
})

MyApp.mount('#app')