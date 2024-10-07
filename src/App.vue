<template>
  <div class="tittleM">
    <h1 >Hotel</h1>
    <q-btn class="btn" icon="login" to="/"></q-btn>
  </div>
  <div class="bar"> 
    <q-tabs
        v-model="tab"
        inline-label
        class="bg-primary text-white shadow-2"
      >
        <q-tab name="Inicio" icon="home"  label="Inicio" />
        <q-tab name="Servicos" icon="room_service" label="Servicos" />
        <q-tab name="Habitaciones" icon="bed" to="/Habitaciones" label="Habitaciones" />
        <q-tab name="Actividades" icon="sports" label="Servicios" />
        <q-tab name="Contacto" icon="phone" label="Contacto" />
    </q-tabs>
 </div>
 <div class="container">
    <vue-router></vue-router>
 </div>
</template>
<style>
.tittleM {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #07a1a1;
    align-items: center;
}

.btn{
    width: 35px;
    height: 35px;
}

</style>