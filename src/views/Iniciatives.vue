<template>
  <TheHeader />
  <Tittle :tittle="tittle"/>
  <h3>{{ iniciativesNumber }}</h3>
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
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
  props: ['ini'],
  components: { TheHeader, Tittle, IniciativeFrame},
  data() {
    return {
      iniciatives: [],
      iniciativesNumber: 0
    }
  },
  created() {
    this.iniciatives = JSON.parse(this.$route.query.ini)
    this.iniciativesNumber = JSON.parse(this.$route.query.ini).length
  }
}
</script>

<style scoped>
h3 {
  text-align: center;
  align-items: center;
  margin-left: 47%;
  background: url("@/assets/background-header-image.jpeg");
  width: 6%;
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