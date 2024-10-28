<template>
  <div class="containerHB">
    <div class="CardM">
      <div v-for="(room, index) in rooms" :key="index" class="room-card">
        <div class="room-image-container">
          <img :src="room.image" class="room-img" />
          <div class="room-description">
            <p>{{ room.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rooms: [
        {
          image: "https://www.hotelmedici.com/images/stories/camere/singola_1200/singola_1_1200.jpg",
          description: "Habitación Individual. Perfecta para viajeros de negocios. 40$ por noche"
        },
        {
          image: "https://images.mirai.com/INFOROOMS/100121951/39rbIWlTZaauLh81PHWd/39rbIWlTZaauLh81PHWd_original.jpg",
          description: "Habitación Doble Estándar. Cama doble y ambiente relajante. 50$ por noche"
        },
        {
          image: "https://www.amsterdamforesthotel.com/images/rooms/deluxe-twin/gallery/deluxe-twin-room-amsterdam-forest-hotel-3.jpg",
          description: "Habitación Doble Deluxe. Experimenta el lujo y el confort. 60$ por noche"
        },
        {
          image: "https://www.hoteloroeljaca.com/wp-content/uploads/habitacion-studio-similares.jpg",
          description: "Habitación Estudio. Disfruta de la independencia. 70$ por noche"
        },
        {
          image: "https://www.zaanhotel.com/images/rooms/junior-suite/gallery/Junior%20Suite%208.jpg",
          description: "Suite Júnior. Vive una experiencia de lujo. 75$ por noche"
        },
        {
          image: "https://www.windsortower.com/wp-content/uploads/2015/04/1-1.jpg",
          description: "Habitación Ejecutiva, Amplia y elegante, ideal para viajeros de negocios. $150 por noche."
        },
        {
          image: "https://hotelgrandpark.com.co/wp-content/uploads/2024/06/Familiar_02.jpg",
          description: "Suite Familiar, Espacio cómodo para familias, con un dormitorio principal. $200 por noche."
        },
        {
          image: "https://www.windsortower.com/wp-content/uploads/2015/04/2-SUPERIOR.jpg",
          description: "Habitación Superior, Con vistas panorámicas, decorada con gusto y equipada con comodidades. $250 por noche."
        },
        {
          image: "https://images.homify.com/v1441997275/p/photo/image/899911/15._Habitaci%C3%B3n_2.jpg",
          description: "Habitación con Balcón, Habitación luminosa con un balcón privado para disfrutar del aire libre. $250 por noche."
        },
        {
          image: "https://st3.idealista.com/news/archivos/styles/fullwidth_xl/public/2015-10/piratas.jpg?VersionId=HECY.nYwM8NFJCHqHv9J2fOiSMUlyp7J&itok=F3s-aLyv",
          description: "Habitación Temática, Diseñada con un estilo único y decoraciones creativas. $250 por noche."
        }
      ]
    };
  }
};
</script>

<style>
.containerHB {
  height: 100vh;
  background-image: linear-gradient(rgba(36, 36, 36, 0.8), rgba(61, 61, 61, 0.808)), url(https://live.staticflickr.com/7688/17849982309_690149079b_b.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.CardM {
  background-color: rgba(90, 201, 235, 0.527);
  border-radius: 10px;
  width: 90%;
  max-height: 90vh;
  box-shadow: 0 4px 8px rgba(82, 226, 236, 0.671);
  text-align: center;
  color: #ffffff;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 10px;
  overflow-y: auto;
  padding: 10px;
}

.room-card {
  background-color: rgb(86, 141, 158);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(87, 201, 195, 0.781);
  transition: transform 0.3s;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.room-card:hover {
  transform: scale(1.05);
}

.room-image-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.room-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  transition: opacity 0.3s ease-in-out;
}

.room-description {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(51, 155, 173, 0.651);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  border-radius: 10px;
  transition: opacity 0.3s ease-in-out;
}

.room-card:hover .room-description {
  opacity: 1;
}

.room-description p {
  color: rgb(255, 255, 255);
  font-size: 16px;
  text-align: center;
  margin: 0;
  padding: 10px;
}
</style>
