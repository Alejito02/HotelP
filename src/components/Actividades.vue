<template>
    <div class="containerA">
     <div class="Principal">
       <div class="Card1">
        <img src="https://cl2.buscafs.com/www.tomatazos.com/public/uploads/images/30731/30731.jpg" class="img" height="90%" width="100%">
        <p class="textCA">Clase de Yoga al Amanecer "Despierta tus sentidos con el sol: Únete a nuestras clases de yoga al amanecer y empieza el día en armonía. 🌅🧘‍♂️"</p>
        </div>

        <div class="Card2">
          <img src="https://preview.redd.it/jfawxying9511.jpg?auto=webp&s=235f9376a5a2e4ea352a121f9ad1afd51df51c95" class="img" height="90%" width="100%">
          <p class="textCA">"¡Desata tu Estrella Interior! Únete a nuestra noche de karaoke y canta tus éxitos favoritos en un ambiente lleno de diversión. 🎤✨"</p>
        </div>

       <div class="Card3">
        <img src="https://img.freepik.com/fotos-premium/noche-cine-al-aire-libre-estrellas_1007506-22239.jpg" class="img" height="90%" width="100%">
        <p class="textCA">Noches de Cine al Aire Libre "Bajo las estrellas: Disfruta de películas clásicas en nuestra terraza con palomitas y vistas al cielo nocturno. 🎬🌌"</p>
        </div>      

       <div class="Card1">
        <img src="https://i.blogs.es/06e73c/hannibal8/650_1200.jpg" class="img" height="90%" width="100%">
        <p class="textCA">Descubre la cocina local: "Explora los sabores auténticos en nuestro restaurante y déjate sorprender por cada bocado. ¡El placer está en el plato!"</p>
        </div>

        <div class="Card2">
          <img src="https://images.squarespace-cdn.com/content/v1/659d79bfcbafbe5e3269d464/1646d4c2-868b-41ac-bd00-b918e0759aa6/chris-bumstead-cbum-rutina-hombros.jpg" class="img" height="90%" width="100%">
          <p class="textCA">Entrena en el gimnasio: "¡Mantente activo incluso en tus vacaciones! Visita nuestro gimnasio y empieza el día con energía renovada."</p>
        </div>

       <div class="Card3">
        <img src="https://www.formulatv.com/images/noticias/77100/77146/1_94bcb769b0.jpg" class="img" height="90%" width="100%">
        <p class="textCA">Explora los alrededores con una caminata guiada: "Conéctate con la naturaleza y la historia local en una caminata guiada. ¡Aventúrate y descubre paisajes únicos!"</p>
        </div>    
     </div>
      <router-view />
    </div>
</template>
<style>
.containerA{
 background-image:linear-gradient(rgba(36, 36, 36, 0.452), rgba(180, 168, 168, 0.349)), url(https://images.bauerhosting.com/empire/2023/09/lost-translation-3.jpg?auto=format&w=1440&q=80);
 background-repeat: no-repeat;
 background-size: 130%;
 display: flex;
 justify-content: center;
}

.Principal{
  background-color: rgba(66, 211, 255, 0.452);
  border-radius: 10px;
  width: 80%;
  height: 100vh;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.616);
  line-height: 2;
  text-align: center;
  color: #ffffff;
  display: grid;
  grid-template-columns:50% 50%;
  grid-template-rows: 34% 34% 33% ;;
  justify-content: center;
  padding: 1%;
}

.Card1{
  background-color: rgba(72, 154, 179, 0.795);
  border-radius: 10px;
  width: 90%;
  height: 90%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.623);
  line-height: 2;
  text-align: center;
  color: #ffffff;
  display: grid;
  grid-template-columns: 50% 50%;
  margin-left: 5%;
  margin-top: 2%;
}

.Card2{
  background-color: rgba(68, 152, 177, 0.692);
  border-radius: 10px;
  width: 90%;
  height: 90%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.623);
  line-height: 2;
  text-align: center;
  color: #ffffff;
  display: grid;
  grid-template-columns: 50% 50%;
  margin-left: 5%;
  margin-top: 2%;
}

.Card3{
  background-color: rgba(68, 152, 177, 0.699);
  border-radius: 10px;
  width: 90%;
  height: 90%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.623);
  line-height: 2;
  text-align: center;
  color: #ffffff;
  display: grid;
  grid-template-columns: 50% 50%;
  margin-left: 5%;
  margin-top: 2%;
}

.img{
  transition: 0.5s;
  opacity: 0.8;
}


.textCA{
  font-family: "Manrope", sans-serif;
}
.img:hover{
  transform: scale(1.3);
}

</style>

<style>
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap');
</style>