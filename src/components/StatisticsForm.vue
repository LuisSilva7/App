<template>
    <div class="center">
        <form>
            <div class="txt_field">
                <input type ="text" required v-model="dataForm.participants">
                <label>Número de Participantes:</label>
            </div>
                <div class="txt_field">
                    <input type ="text" required v-model="dataForm.donatives">
                    <label>Donativos (quantidade monetária):</label>
                </div>
                    <div class="txt_field">
                        <input type ="text" required v-model="dataForm.duration">
                        <label>Duração da Iniciativa:</label>
                    </div>
                    <div class="txt_field">
                        <input type ="text" required v-model="dataForm.costs">
                        <label>Custos da Iniciativa:</label>
                    </div>
      <div class="esferas">
          <div v-if="iniciative.successRate === 0">
            <div class="txt_field">
              <label for="companyField">Nível de Sucesso</label>
            </div>
            <div class="esferas-container">
              <div @click="esferasHandler(20)" class="esferaBranca"></div>
              <div @click="esferasHandler(40)" class="esferaBranca"></div>
              <div @click="esferasHandler(60)" class="esferaBranca"></div>
              <div @click="esferasHandler(80)" class="esferaBranca"></div>
              <div @click="esferasHandler(100)" class="esferaBranca"></div>
            </div>
          </div>
          <div v-else-if="iniciative.successRate === 20">
            <div class="txt_field">
              <label for="companyField">Nível de Sucesso</label>
            </div>
            <div class="esferas-container">
              <div @click="esferasHandler(20)" class="esferaVerde"></div>
              <div @click="esferasHandler(40)" class="esferaBranca"></div>
              <div @click="esferasHandler(60)" class="esferaBranca"></div>
              <div @click="esferasHandler(80)" class="esferaBranca"></div>
              <div @click="esferasHandler(100)" class="esferaBranca"></div>
            </div>
          </div>
          <div v-else-if="iniciative.successRate === 40">
            <div class="txt_field">
              <label for="companyField">Nível de Sucesso</label>
            </div>
            <div class="esferas-container">
              <div @click="esferasHandler(20)" class="esferaVerde"></div>
              <div @click="esferasHandler(40)" class="esferaVerde"></div>
              <div @click="esferasHandler(60)" class="esferaBranca"></div>
              <div @click="esferasHandler(80)" class="esferaBranca"></div>
              <div @click="esferasHandler(100)" class="esferaBranca"></div>
            </div>
          </div>
          <div v-else-if="iniciative.successRate === 60">
            <div class="txt_field">
              <label for="companyField">Nível de Sucesso</label>
            </div>
            <div class="esferas-container">
              <div @click="esferasHandler(20)" class="esferaVerde"></div>
              <div @click="esferasHandler(40)" class="esferaVerde"></div>
              <div @click="esferasHandler(60)" class="esferaVerde"></div>
              <div @click="esferasHandler(80)" class="esferaBranca"></div>
              <div @click="esferasHandler(100)" class="esferaBranca"></div>
            </div>
          </div>
          <div v-else-if="iniciative.successRate === 80">
            <div class="txt_field">
              <label for="companyField">Nível de Sucesso</label>
            </div>
            <div class="esferas-container">
              <div @click="esferasHandler(20)" class="esferaVerde"></div>
              <div @click="esferasHandler(40)" class="esferaVerde"></div>
              <div @click="esferasHandler(60)" class="esferaVerde"></div>
              <div @click="esferasHandler(80)" class="esferaVerde"></div>
              <div @click="esferasHandler(100)" class="esferaBranca"></div>
            </div>
          </div>
          <div v-else>
            <div class="txt_field">
              <label for="companyField">Nível de Sucesso</label>
            </div>
            <div class="esferas-container">
              <div @click="esferasHandler(20)" class="esferaVerde"></div>
              <div @click="esferasHandler(40)" class="esferaVerde"></div>
              <div @click="esferasHandler(60)" class="esferaVerde"></div>
              <div @click="esferasHandler(80)" class="esferaVerde"></div>
              <div @click="esferasHandler(100)" class="esferaVerde"></div>
            </div>
          </div>
        </div>
        <div class="last-btn">
          <button @click="end" class="button">Terminar</button>
        </div>
        </form>
    </div>
</template>

<script>
import { getAuth, onAuthStateChanged } from "firebase/auth"

export default {
    props: ['theme'],
    data() {
        return {
            dataForm: { participants: 0, donatives: 0, duration: 0, costs: 0 },
            iniciative: {}
        }
    },
    methods: {
        end() {
            const auth = getAuth()
            onAuthStateChanged(auth, (user) => {
                if (user) {
                this.iniciative.status = 'passada'
                this.iniciative.participants = this.dataForm.participants
                this.iniciative.donatives = this.dataForm.donatives
                this.iniciative.duration = this.dataForm.duration
                this.iniciative.costs = this.dataForm.costs
                var iniciatives = JSON.parse(localStorage.getItem('iniciatives')).filter(iniciative => iniciative.theme !== this.iniciative.theme)
                iniciatives.push(this.iniciative)
                localStorage.setItem('iniciatives', JSON.stringify(iniciatives))
                this.$router.push({ name: 'Iniciatives', params: { email: user.email } })
                }
            })
        },
        esferasHandler(success) {
        this.iniciative.successRate = success
        },
    },
    created() {
        this.iniciative = JSON.parse(localStorage.getItem('iniciatives')).find(iniciative => iniciative.theme === this.theme)
    }
}
</script>

<style scoped>

form{
  height: fit-content;
}    

.center form{
  max-width: 420px;
  text-align: left;
  padding: 20px;
  border-radius: 30px;
  box-sizing: border-box;
}

form .txt_field{
position: relative;
border-bottom: 2px solid #adadad;
margin: 30px 0;
}

.esferas .txt_field{ 
  margin-left: 5vh;
  border:none;
  text-align: center;
  border-bottom: 1px solid transparent;
}

.esferas-container{
  text-align: center;
  padding-bottom: 4px;
}

body{
margin:0;
padding: 0;
font-family: montserrat;
height:100vh;
overflow: hidden;
}

.esferas-container {
  display: flex;
  justify-content: center;
}

.esferaBranca {
  width: 30px; /* Define a largura da esfera */
  height: 30px; /* Define a altura da esfera */
  background-color: rgb(173, 163, 163); /* Define a cor branca */
  border-radius: 50%; /* Transforma o quadrado em uma esfera */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Adiciona uma sombra suave */
  margin-right: 10px;
  cursor: pointer;
}

.esferaVerde {
  width: 30px; /* Define a largura da esfera */
  height: 30px; /* Define a altura da esfera */
  background-color: rgb(5, 118, 10); /* Define a cor branca */
  border-radius: 50%; /* Transforma o quadrado em uma esfera */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Adiciona uma sombra suave */
  margin-right: 10px;
  cursor: pointer;
}

.center{
position:absolute;
margin-top: 15%;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width:80%;
height:60%;
border-radius: 30px;
border: 2px solid #adadad;
}

label {
    color: #adadad;
    position:absolute;
    top:50%;
    left:5px;
    transform: translateY(-50%);
    font-size: 13px;
    pointer-events: none;
    transition: .5s;
}

.last-btn{
  margin-top: 3vh;
  text-align: center;
}

.last-btn button{
  font-size: 18px;
  padding:2px;
}

input {
    color: #c6c6c6;
    padding: 0 5px;
    width: 100%;
    height: 40px;
    font-size: 16px;
    border: none;
    background:none;
    outline:none;
}

span::before{
content: '';
position: absolute;
top: 40px;
left:0;
width: 0%;
height: 2px;
background: #2691d9;
transition: .5s;
}

input:focus ~label,
input:valid~label{
top: -5px;
color: #ffffff;
}

input:focus ~ span::before,
input:valid ~ span::before{
width: 100%;
}

input[type="submit"]{
width: 100%;
height: 50px;
border: 1px solid;
background: #2691d9;
border-radius: 25px;
font-size: 18px;
color: #e9f4fb;
font-weight: 700;
cursor:pointer;
outline:none;
margin: -5px 0 -10px 5px;
}

input[type="submit"]:hover{
border-color: #2691d9;
transition: .5s;
}

.button-container {
  position: fixed;
  bottom: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  box-sizing: border-box;
}

.button {
  display: inline-block;
  padding: 10px 20px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: #ffffff;
  color: #830a0a;
  transition: background-color 0.3s ease;
  border: 1px solid black;
  }
  .button:hover {
  background-color: #bcc2c7;
  }

</style>