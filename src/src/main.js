import { createApp } from 'vue'
import App from './App.vue'
import {Quasar} from 'quasar'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'
import {router} from "./routes/routes.js"
import '../src/style.css'





const app = createApp(App)

app.use(Quasar,{
    Plugins:{}
})

app.use(router)

app.mount('#app')