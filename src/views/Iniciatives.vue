<template>
  <TheHeader />
  <Tittle :tittle="tittle"/>
  <div class="mini-container">
    <h3>{{ iniciativesNumber }}</h3>
  </div>
  <div class="container">
    <div class="scroll-container">
      <div v-for="iniciative in iniciatives" :key="iniciative.id">
        <IniciativeFrame :iniciative="iniciative"/>
      </div>
  </div>
</div>
</template>

<script>
import TheHeader from '../components/TheHeader.vue'
import Tittle from '../components/Tittle.vue'
import IniciativeFrame from '../components/IniciativeFrame.vue'

export default {
  components: { TheHeader, Tittle, IniciativeFrame},
  data() {
    return {
      tittle: 'Minhas Iniciativas',
      iniciatives: [],
      iniciativesNumber: 0
    }
  },
  created() {
    this.iniciatives = JSON.parse(localStorage.getItem('iniciatives')).filter(iniciative => (iniciative.email === this.$route.params.email) && (iniciative.status === 'aceite'))
    this.iniciativesNumber = this.iniciatives.length
  }
}
</script>

<style scoped>

.mini-container{
  width: 100%;
  padding-left: 45%;
}

h3 {
  text-align: center;
  align-items: center;
  background: url("@/assets/background-header-image.jpeg");
  width: 8vh;
  padding: 7px 0;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
  overflow-x: auto; /* Adiciona rolagem horizontal */
  overflow-y: hidden; /* Esconde a barra de rolagem vertical */
}

.scroll-container {
  display: flex;
  flex-wrap: nowrap; /* Evita que os quadrados quebrem para a próxima linha */
  max-width: 100%; /* Largura máxima igual à largura do contêiner pai */
  height: auto; /* Altura ajustável para acomodar os quadrados */
}

/* Estilo para cada div dentro do loop */
.container > .scroll-container > div {
  margin: 10px;
}

/* Estilo da barra de rolagem */
.container::-webkit-scrollbar {
  height: 10px;
  width: 100%;
}

.container::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 5px;
}

.container::-webkit-scrollbar-track {
  background-color: rgba(255, 255, 255, 0.8);
}
</style>