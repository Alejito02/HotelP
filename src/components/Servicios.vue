<template>
    <div class="containerS">
        <div class="Card10">
          <h4>Masajes</h4>
           <p class="textC10">Relájate y Renueva tú Cuerpo y Mente en Nuestro Spa: ¡El Escape Perfecto Te Espera! Sumérgete en la tranquilidad de nuestro exclusivo servicio de masajes, donde nuestros expertos terapeutas cuidarán cada detalle para que disfrutes de una experiencia revitalizante.
✨ Reserva tu momento de paz hoy y despierta tus sentidos. ¡Te esperamos para consentirte! ✨ </p>
           <img src="https://www.masshotelservice.com/wp-content/uploads/2023/04/servicio-wellness-room-a-hoteles-inicio.jpg" height="26%" width="32%" class="img1">
          <h4>Piscina</h4>
          <p class="textC20">Sumérgete en la Tranquilidad: Disfruta de Nuestra Piscina con Vistas Incomparables
Nada mejor que un refrescante chapuzón para complementar tu estadía. Relájate bajo el sol, déjate llevar por la serenidad del agua y disfruta de las impresionantes vistas desde nuestra piscina.
💦 Relájate, sumérgete y vive la experiencia. ¡La piscina perfecta te espera! 💦</p>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJgSVbgkmPlZNUVv04n1yImkOIQhYp9lozLw&s" height="26%" width="32%" class="img1">
        </div>
      <router-view />
    </div>
 

</template>
<style>
.containerS{
  height: 140vh;
  background-image:linear-gradient(rgba(36, 36, 36, 0.795), rgba(61, 61, 61, 0.808)),url(https://www.oberaxe.es/wp-content/uploads/2023/02/mejorar-al-atencion-de-los-clientes.png);
  background-repeat: no-repeat;
  background-size: 100%;
}

.Card10{
  background-color: rgba(90, 201, 235, 0.527);
  width: 60%;
  height: 140vh;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  line-height: 2;
  text-align: center;
  color: #ffffff;
  margin-bottom: 5px;
  margin-left: 17%;
  display: flex;
  flex-direction: column;
  align-items: center;
}


.Card10 img{
  border-radius: 10px;
  margin-bottom: 4%;
  transition: 0.5s;
  opacity: 0.8;
}

.textC10{
  font-family: "Manrope", sans-serif;
  font-size: 100%;
  padding-left: 20%;
  padding-right: 20%;
  padding-top: 1%;
}
.textC20{
  font-family: "Manrope", sans-serif;
  font-size: 100%;
  padding-left: 20%;
  padding-right: 20%;
}
.img1:hover{
  transform: scale(1.3);
}

.Card10 h4{
  font-family: "Fira Sans Condensed", sans-serif;
  padding: 1%
}
</style>

<style>
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap');
</style>

<style>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Fira+Sans+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
</style>
