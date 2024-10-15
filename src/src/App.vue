<template>
  <div class="tittleM">
    <h2>Hotel Cosmo Sky <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/37199f25-cd7b-469a-9253-b4fd8696b369/d4zoho-3cf5dafc-574d-4837-ab00-59c70aeeb9fb.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzM3MTk5ZjI1LWNkN2ItNDY5YS05MjUzLWI0ZmQ4Njk2YjM2OVwvZDR6b2hvLTNjZjVkYWZjLTU3NGQtNDgzNy1hYjAwLTU5YzcwYWVlYjlmYi5naWYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.SekbO-OpQcEca3n7aM2YLHnn5LdNOhXJ5Ulri0WnWlU" alt="" height="10%" width="8%"></h2> 
    <div>
        <q-btn class="btn" icon="login" @click="showModal = true"></q-btn>
        
        <div v-if="showModal" class="modal-overlay" @click.self="showModal = false">
          <div class="modal-content">
            <h2>Login</h2>
            <div class="input">
             <input type="text" class="email" placeholder="E-mail" >
             <input type="password" class="password" placeholder="Password">
            </div>
            <div class="iconLog">
              <button class="Loging"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16"><path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z"/></svg></button>
              <button class="Loginf"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16"><path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/></svg></button>
              <button class="Loginx"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16"><path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/></svg></button>
            </div>
            <button @click="showModal = false" class="ButtonClose">Login</button>
       </div>
      </div>
    </div>
  </div>
  <div class="bar"> 
        <q-btn icon="home" to="/Home" >Inicio</q-btn>
        <q-btn icon="room_service" to="/Servicios"> Servicios</q-btn>
        <q-btn icon="sports" to="/Actividades">Actividades</q-btn>
        <q-btn icon="bed" to="/Habitaciones">Habitaciones</q-btn>
        <q-btn icon="phone" to="/Contacto">Contacto</q-btn>
 </div>

 <div class="container">
    <router-view />
 </div>


</template>
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
  width: 30%;
  height: 40%;
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
</style>

<script>
export default {
  name: 'ModalComponent',
  data() {
    return {
      showModal: false
    }
  }
}
</script>

