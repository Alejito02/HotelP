<template>
    <div class="containerHB">
      <div class="CardM">
        <div class="HabIn">
         <img src="https://www.hotelmedici.com/images/stories/camere/singola_1200/singola_1_1200.jpg" class="imgIn" height="90%" width="100%">
         <p class="text">Habitación Individual Perfecta para viajeros de negocios o aquellos que desean relajarse en un ambiente íntimo.</p>
        </div>
        <div class="HabDE">
         <img src="https://images.mirai.com/INFOROOMS/100121951/39rbIWlTZaauLh81PHWd/39rbIWlTZaauLh81PHWd_original.jpg" class="imgDE" height="90%" width="100%">
         <p class="text">Habitación Doble Estándar Ideal para parejas o quienes buscan más espacio, nuestra habitación doble estándar cuenta con una cómoda cama doble y un ambiente relajante. Disfruta de conexión Wi-Fi gratuita.</p>
        </div>
        <div class="HabDD">
         <img src="https://www.amsterdamforesthotel.com/images/rooms/deluxe-twin/gallery/deluxe-twin-room-amsterdam-forest-hotel-3.jpg" class="imgDD" height="100%" width="100%">
         <p class="text">Habitación Doble Deluxe Experimenta el lujo y el confort en nuestra Habitación Doble Deluxe. Con una amplia cama doble, elegante diseño y detalles exclusivos para una estancia inolvidable. Disfruta de Wi-Fi de alta velocidad, minibar, y vistas privilegiadas que te invitan a relajarte y disfrutar.</p>
        </div>
        <div class="Est">
         <img src="https://www.hoteloroeljaca.com/wp-content/uploads/habitacion-studio-similares.jpg" class="imgEst" height="90%" width="100%">
         <p class="text">Habitación Estudio Disfruta de la independencia y el confort en nuestra Habitación Estudio. Con un diseño moderno y funcional, cuenta con una cama cómoda, área de trabajo y kitchenette totalmente equipada.</p>
        </div>
        <div class="SuiJ">
         <img src="https://www.zaanhotel.com/images/rooms/junior-suite/gallery/Junior%20Suite%208.jpg" class="imgJ" height="90%" width="100%">
         <p class="text">Suite Júnior Vive una experiencia de lujo en nuestra Suite Júnior. Con un amplio espacio, una cama doble de gran confort y una zona de estar separada, es ideal para quienes buscan un toque extra de comodidad.</p>
        </div>
        <div class="SuiP">
         <img src="https://s3.amazonaws.com/static-webstudio-accorhotels-usa-1.wp-ha.fastbooking.com/wp-content/uploads/sites/19/2022/03/11175445/DUF_7063-v-ok-1170x780.jpg" class="imgP" height="100%" width="100%">
         <p class="text">Suite Presidencial Sumérgete en el máximo lujo y exclusividad en nuestra Suite Presidencial. Con un diseño sofisticado y amplios espacios, ofrece una elegante habitación principal, sala de estar privada, comedor y vistas panorámicas inigualables. Equipada con todas las comodidades de alta gama.</p>
        </div>
      </div>
      <router-view />
    </div>
</template>

<style>
.containerHB{
  height: 100vh;
  background-image:linear-gradient(rgba(36, 36, 36, 0.8), rgba(61, 61, 61, 0.808)), url(https://live.staticflickr.com/7688/17849982309_690149079b_b.jpg);
  background-repeat: no-repeat;
  background-size: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.CardM{
  background-color: rgba(90, 201, 235, 0.527);
  border-radius: 10px;
  width: 70%;
  height: 100vh;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  line-height: 2;
  text-align: center;
  color: #ffffff;
  margin-bottom: 5px;
  display: grid;
  grid-template-columns:30% 30% 30%;
  grid-template-rows: 50% 50% ;
  justify-content: center;

}
.HabIn{
    background-color: rgb(86, 141, 158);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.781);
    margin: 9px;
    transition: 0.5s;
    display: grid;
    grid-auto-rows: 60% 40%;
}
.HabDE{
    background-color: rgb(86, 141, 158);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.781);
    margin: 9px;
    transition: 0.5s;
    display: grid;
    grid-auto-rows: 60% 40%;    
}
.HabDD{
    background-color: rgb(86, 141, 158);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.781);
    margin: 9px;
    transition: 0.5s;  
    display: grid;
    grid-auto-rows: 50% 50%;
}
.Est{
    background-color: rgb(86, 141, 158);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.781);
    margin: 9px;
    transition: 0.5s;
    display: grid;
    grid-auto-rows: 60% 40%;
}
.SuiJ{
    background-color: rgb(86, 141, 158);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.781);
    margin: 9px;
    transition: 0.5s;
    display: grid;
    grid-auto-rows: 60% 40%;
}
.SuiP{
    background-color: rgb(86, 141, 158);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.781);
    margin: 9px;
    transition: 0.5s;
    display: grid;
    grid-auto-rows: 50% 50%;
}
.HabIn:hover{
    transform: scale(1.1);
}
.HabDE:hover{
    transform: scale(1.1);
}
.HabDD:hover{
    transform: scale(1.1);
}
.Est:hover{
    transform: scale(1.1);
}
.SuiJ:hover{
    transform: scale(1.1);
}
.SuiP:hover{
    transform: scale(1.1);
}

.text{
    font-size: 60%;
    color: rgb(230, 255, 241);
}
</style>

