<template>
  <TheHeader />
  <Tittle :tittle="tittle"/>
  <div class="container">
    <h3>Colaborador / Profissional</h3>
    <h3>Material</h3>
  </div>
  <div class="container">
  <div class="trabalhadores-container">
    <div v-for="trabalhador in trabalhadores" :key="trabalhador.nome">
      <CheckInOutBox :nome="trabalhador.nome" :papel="trabalhador.papel" check="CheckOut" class="checkinout-box"/>
    </div>
  </div>
  <div class="materiais-container">
    <div v-for="material in materiais" :key="material.nome">
      <CheckInOutBox :nome="material.nome" :papel="material.papel" check="CheckOut" class="checkinout-box"/>
    </div>
  </div>
</div>
<div class="button-container">
  <ButtonGoBack />
  <ButtonGoFoward :id="id" redirectPage="Statistics"/>
</div>
</template>

<script>
import TheHeader from '../components/TheHeader.vue'
import Tittle from '../components/Tittle.vue'
import ButtonGoBack from '../components/ButtonGoBack.vue'
import ButtonGoFoward from '../components/ButtonGoFoward.vue'
import CheckInOutBox from '../components/CheckInOutBox.vue'

export default {
  components: { TheHeader, Tittle, ButtonGoBack, ButtonGoFoward, CheckInOutBox },
  props: ['id'],
  data() {
        return {
          tittle: 'Gestão de Evento',
          trabalhadores: [],
          materiais: []
        }
  },
  mounted() {
    if (localStorage.getItem('iniciatives')) {
      const iniciativas = JSON.parse(localStorage.getItem('iniciatives'))
      this.trabalhadores = iniciativas[this.id].trabalhadores
      this.materiais = iniciativas[this.id].materiais
    }
  }
}
</script>

<style scoped>
.container {
  display: flex; /* Usando flexbox para alinhar os elementos lado a lado */
}

h3 {
  text-align: center;
  margin-left: 12.5%;
  background: url("@/assets/background-header-image.jpeg");
  width: 30%;
  padding: 7px 0;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
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


</style>