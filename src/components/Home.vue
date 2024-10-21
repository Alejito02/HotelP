<template>
    <div class="containerHM">
      <div class="Card-information">
         <h3>¿Quienes somos?</h3>

         <p>El Hotel Cosmo Sky, un oasis elegante de espacio y tranquilidad, es el destino de lujo ideal en Tokio, donde los huéspedes pueden disfrutar de una vista de 360 grados a la animada ciudad y al monte Fuji. El hotel, que ocupa los 14 últimos pisos de la torre de 52 plantas, ofrece a los huéspedes un nivel incomparable de comodidad y servicio personalizado, además de opciones gastronómicas de primera en pleno centro de la dinámica ciudad.</p>
        <iframe
         width="90%"
         height="48%"
         src="https://www.youtube.com/embed/eDa2rdFmOiY?autoplay=1&loop=1&playlist=eDa2rdFmOiY&mute=1"
         title="YouTube video player"
         frameborder="0"
         allow="mute"
         allowfullscreen>
       </iframe>
      </div>
     <router-view />
    </div>

</template>

<style>
.containerHM{
  height: 100vh;
  background-image:linear-gradient(rgba(36, 34, 34, 0.753), rgba(71, 68, 68, 0.705)), url(https://media-cdn.tripadvisor.com/media/photo-s/03/c5/48/86/park-hyatt-tokyo.jpg);
  background-repeat: no-repeat;
  background-size: 100%;
  justify-content: center;
}

.Card-information{
  background-color: rgba(90, 201, 235, 0.527);
  margin-left: 34%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  width: 40%;
  height: 95%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  line-height: 2;
  text-align: center;
  color: #eeeeee;
}
.Card-information h3{
  font-family: "Bebas Neue", sans-serif;
  padding-top: 2%;
}

.Card-information p{
  font-family:'Times New Roman', Times, serif;
  font-size: 100%;
  padding: 4%;
}
p{
  margin: 0% !important;
}
</style>

<style>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
</style>

