import Home from "../components/Home.vue"
import Habitaciones from '../components/Habitaciones.vue'
import Contacto from "../components/Contacto.vue"
import Actividades from "../components/Actividades.vue"
import Servicios from "../components/Servicios.vue"
import {createRouter, createWebHashHistory} from "vue-router"


const routes = [
    {path:"/Home", component:Home},
    {path:'/Habitaciones', component:Habitaciones},
    {path:"/Contacto", component:Contacto},
    {path:"/Actividades", component:Actividades},
    {path:"/Servicios", component:Servicios},

]

export const router = createRouter({
    history: createWebHashHistory(),
    routes
})