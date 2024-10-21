<template>
  <div class="tittleM">
    <h2>
      Hotel Cosmo Sky
      <img
        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/37199f25-cd7b-469a-9253-b4fd8696b369/d4zoho-3cf5dafc-574d-4837-ab00-59c70aeeb9fb.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzM3MTk5ZjI1LWNkN2ItNDY5YS05MjUzLWI0ZmQ4Njk2YjM2OVwvZDR6b2hvLTNjZjVkYWZjLTU3NGQtNDgzNy1hYjAwLTU5YzcwYWVlYjlmYi5naWYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.SekbO-OpQcEca3n7aM2YLHnn5LdNOhXJ5Ulri0WnWlU"
        alt=""
        height="10%"
        width="8%"
      />
    </h2>
    <div>
      <q-btn class="btn" icon="login" @click="showModal = true"></q-btn>

      <div v-if="showModal" class="modal-overlay" @click.self="showModal = false">
        <div class="modal-content">
          <h2>Registrate</h2>
          <div class="input">
            <input type="text" class="email" placeholder="Correo" />
            <input type="password" class="password" placeholder="Contraseña" />
          </div>
          <div class="iconLog">
            <button class="Loging">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
                <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
              </svg>
            </button>
            <button class="Loginf">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2 .03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
              </svg>
            </button>
            <button class="Loginx">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
              </svg>
            </button>
          </div>
          <button @click="showModal = false" class="ButtonClose">Registro</button>
        </div>
      </div>
    </div>
  </div>

  <div class="bar">
    <q-btn flat icon="home" to="/Home">Inicio</q-btn>
    <q-btn flat icon="room_service" to="/Servicios">Servicios</q-btn>
    <q-btn flat icon="sports" to="/Actividades">Actividades</q-btn>
    <q-btn flat icon="bed" to="/Habitaciones">Habitaciones</q-btn>
    <q-btn flat  icon="phone" to="/Contacto">Contacto</q-btn>
  </div>

  <div v-if="isHomeRoute" class="banner">
    <div class="banner-container">
      <img :src="currentBannerImage" class="banner-image" />
    </div>
  </div>

  <div class="container">
    <router-view />
  </div>
  <footer>
    <div class="derechos"> 
        <div class="contentDiv">
          <div class="tems">
            <h3>informacion de la compañia</h3>
            <ul>
              <router-link to="/Home"><li><a class="iniciobtn">Inicio</a></li></router-link>
              <router-link to="/Contacto"><li><a>Contacto</a></li></router-link>
              <router-link to="/Servicios"><li><a>Servicios</a></li></router-link>
            </ul>
      <div class="info">
        <p>Contacta con nosotros</p>
        <div class="icons"> 
          <q-btn flat icon="mail"></q-btn>
          <q-btn flat icon="phone"></q-btn>
          <q-btn flat icon="location_on"></q-btn>
          <q-btn flat icon="facebook"></q-btn>
        </div>
          </div>
        </div>
      </div>

    </div>
  </footer>
</template>

<script>
export default {
  name: 'ModalComponent',
  data() {
    return {
      showModal: false,
      banners: [
        {
          images: [
            "https://www.momondo.com.co/rimg/kimg/31/aa/9a4eb172-60b750aa-8.jpeg?width=968&height=607&crop=true",
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/66/7e/80/alejandria-resort.jpg?w=1200&h=-1&s=1",
            "https://imagenes.eltiempo.com/files/image_1200_600/uploads/2022/10/15/634af63a9c1ea.jpeg",
          ],
        },
        {
          images: [
            "https://images.ecestaticos.com/HusK4xNt2WmNiLo7tQ8p5Z-u7ag=/0x0:2000x1332/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F157%2F730%2Fc84%2F157730c84ea1578f120c75c3f997989a.jpg",
            "https://fotografias.correryfitness.com/clipping/cmsimages02/2016/08/01/4DC29812-B537-4839-8AF1-69E7F86C2058/69.jpg",
            "https://media-cdn.tripadvisor.com/media/photo-s/0d/dc/83/2f/meson-del-cuchicute.jpg?w=1200&h=-1&s=1",
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/dc/83/2f/meson-del-cuchicute.jpg?w=1200&h=-1&s=1",
          ],
        },
        {
          images: [
            "https://cdn.kiwicollection.com/media/property/PR003646/xl/003646-01-dining-room-city-view-sunset.jpg?cb=1413919376",
          ],
        },
        {
          images: [
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/309772907.jpg?k=d8439e57969d6b3c6f22100118a1ee0ebe02e0793b34ece1d07af24dd3b1de84&o=&hp=1",
          ],
        },
      ],
      currentIndex: 0,
      autoSlideInterval: null,
    };
  },
  computed: {
    currentBannerImage() {
      return this.banners[this.currentIndex].images[0]; 
    },
    isHomeRoute() {
      return this.$route.path === '/'; 
    },
  },
  methods: {
    previousImage() {
      this.currentIndex = (this.currentIndex - 1 + this.banners.length) % this.banners.length;
    },
    nextImage() {
      this.currentIndex = (this.currentIndex + 1) % this.banners.length;
    },
    startAutoSlide() {
      this.autoSlideInterval = setInterval(this.nextImage, 5000); // Cambia de imagen cada 5 segundos
    },
    stopAutoSlide() {
      clearInterval(this.autoSlideInterval);
    },
  },
  mounted() {
    this.startAutoSlide();
  },
  beforeDestroy() {
    this.stopAutoSlide();
  },
};
</script>

<style>
body{
    height: 100vh;
}

*{
 margin: 0%;
}

.bar{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(108, 243, 243);
    padding: 20px;
    box-shadow: none;
    border: none;
}


.bar .q-btn {
  position: relative;
  overflow: hidden;
}

.bar .q-btn::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 4px;
  background-color: #000000; 
}

.bar .q-btn:hover::after {
  animation: carga 0.3s ease-in-out ;
}

@keyframes carga {
  0% {
    width: 0;
  }
  50% {
    width: 50%;
  }
  100% {
    width: 100%;
  }
}

.tittleM {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #07a1a1;
    align-items: center;
    padding: 20px;
    background-color: azure;
}

.tittleM h2{
  font-family: "Bebas Neue", sans-serif;
}

.btn{
    width: 35px;
    height: 35px;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 5px;
  width: 28%;
  height: 50%;
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.email{
  border-left: none;
  border-right: none;
  border-top: none;
}

.password{
  border-left: none;
  border-right: none;
  border-top: none;
}

.ButtonClose{
  display: flex;
  flex-direction: center;
  text-align: center;
  border: none;
  background-color: aquamarine;
  padding-left: 17%;
  margin-top: 1%;
  margin-left: 27%;
  margin-right: 27%;
}



.input{
  margin-left: 8%;
  margin-right: 8%;
}

.iconLog{
  margin: 5%;
}
.Loging{
border-style: none;
background-color: white;
color: aqua;
cursor: pointer;
}

.Loginf{
border-style: none;
background-color: white;
color: aqua;
cursor: pointer;
}

.Loginx{
border-style: none;
background-color: white;
color: aqua;
cursor: pointer;
}

.ButtonClose{
  cursor: pointer;
  border-radius: 5%;
}

.bi-google{
  margin: 2px;
}
.bi-facebook{
  margin: 2px;
}
.bi-twitter-x{
  margin: 2px;
}

.modal-content h2{
  margin-bottom: 9%;
}

.banner-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden; 
}

.banner-image {
  width: 100%;
  height: 100%;
  object-fit: cover; 
}
.nav-button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 2em;
  color: #07a1a1;
}

</style>
