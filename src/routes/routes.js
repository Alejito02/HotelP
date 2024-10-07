import Inicio from "../components/Inicio.vue"
import Habitaciones from "../components/Habitaciones.vue"
import Contacto from "../components/Contacto.vue"
import Actividades from "../components/Actividades.vue"
import Servicios from "../components/Servicios.vue"
import Home from "../components/Home.vue"
import {createRouter, createWebHashHistory} from "vue-router"


const routes = [
    {path:"/Inicio", component:Inicio},
    {path:"/Habitaciones", component:Habitaciones},
    {path:"/Contacto", component:Contacto},
    {path:"/Actividades", component:Actividades},
    {path:"/Servicios", component:Servicios},
    {path:"/", component:Home}
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes
})