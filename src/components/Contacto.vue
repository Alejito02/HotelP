<template>
  <div class="containerC">
    <div class="map">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25925.262469948524!2d139.6702394347656!3d35.68542689999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f32cd7dab227%3A0x2cd8a394ca8e7d96!2sPark%20Hyatt%20Tokyo!5e0!3m2!1ses!2sco!4v1729437943707!5m2!1ses!2sco" 
        width="100%" 
        height="100%" 
        style="border:0;" 
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    </div>

    <div class="reservation-form">
      <h4>Reservar Habitación</h4>
      <form @submit.prevent="submitReservation">
        <div class="form-group">
          <label for="name">Nombre Completo</label>
          <input type="text" id="name" v-model="reservation.name" required />
        </div>
        <div class="form-group">
          <label for="email">Correo Electrónico</label>
          <input type="email" id="email" v-model="reservation.email" required />
        </div>
        <div class="form-group">
          <label for="checkin">Fecha de Check-in</label>
          <input type="date" id="checkin" v-model="reservation.checkin" required />
        </div>
        <div class="form-group">
          <label for="checkout">Fecha de Check-out</label>
          <input type="date" id="checkout" v-model="reservation.checkout" required />
        </div>
        <div class="form-group">
          <label for="roomType">Tipo de Habitación</label>
          <select id="roomType" v-model="reservation.roomType" required>
            <option value="single">Individual</option>
            <option value="double">Doble</option>
            <option value="suite">Suite</option>
          </select>
        </div>
        <div class="form-group">
          <label for="requests">Peticiones Especiales</label>
          <textarea id="requests" v-model="reservation.requests" placeholder="Escribe aquí cualquier petición especial..."></textarea>
        </div>
        <button type="submit" class="btn-reserve">Reservar Ahora</button>
      </form>
    </div>

    <router-view />
  </div>
</template>

<script>
import Swal from 'sweetalert2';
export default {
  data() {
    return {
      reservation: {
        name: '',
        email: '',
        checkin: '',
        checkout: '',
        roomType: '',
        requests: ''
      }
    };
  },
  methods: {
    submitReservation() {
      // Lógica para enviar los datos de la reserva
      console.log("Reserva realizada con éxito:", this.reservation);
      Swal.fire({
        title: '¡Reserva Exitosa!',
        text: 'Tu reserva ha sido procesada correctamente.',
        icon: 'success',
        confirmButtonText: 'Aceptar'
      });
    }
  }
};
</script>

<style>
.containerC {
  height: 100vh;
  background-image: linear-gradient(rgba(36, 36, 36, 0.795), rgba(61, 61, 61, 0.808)), url(https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgr9zgBVA5ybxlTDSsALn-69NxucNSRAOJnePINGxmiN9lvHP8gtMQr1RMJXHeO26J2uF9NepuA6VFGIjqiq7pJw1s_xZWfA9VeUm9kOAxM7DtMFbrzmWuMLTdQdD35Olq3BIxYc17ac-wc/s1600/Imagen18.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  gap: 20px;
}

.map {
  flex: 1;
  height: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
}

.reservation-form {
  flex: 1;
  background: rgba(255, 255, 255, 0.9);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.reservation-form h4 {
  margin-bottom: 20px;
  color: #0789bd;
  text-align: center;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #555;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
}

.form-group textarea {
  resize: vertical;
  min-height: 80px;
}

.btn-reserve {
  background-color: #16d6f0;
  color: #ffffff;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.btn-reserve:hover {
  background-color: #04b6ec;
}

@media (max-width: 768px) {
  .containerC {
    flex-direction: column;
  }

  .map, .reservation-form {
    width: 100%;
    height: auto;
  }

  .reservation-form {
    max-width: none;
  }
}

</style>

