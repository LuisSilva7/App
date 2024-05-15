<template>
  <TheHeader />
  <Tittle :tittle="tittle"/>
  <div class="container">
    <h3>Reportar Problema</h3>
    <img src="@/assets/exclamation-triangle.svg" class="imagem" alt="Imagem">
  </div>
  <div class="grid-container">
    <PhotoVidAudText :id="id" class="item" v-for="(item, index) in items" :key="index"/>
  </div>
  <div class="button-container">
    <ButtonGoBack />
    <ButtonGoFoward :id="id" redirectPage="CheckOut"/>
  </div>
</template>

<script>
import TheHeader from '../components/TheHeader.vue'
import Tittle from '../components/Tittle.vue'
import PhotoVidAudText from '../components/PhotoVidAudText.vue'
import ButtonGoBack from '../components/ButtonGoBack.vue'
import ButtonGoFoward from '../components/ButtonGoFoward.vue'

export default {
  components: { TheHeader, Tittle, PhotoVidAudText, ButtonGoBack, ButtonGoFoward },
  props: ['id'],
  data() {
    return {
      tittle: '',
      items: [1, 2, 3, 4] // Adicionei um array de itens para iterar
    }
  },
    mounted() {
        if (localStorage.getItem('iniciatives')) {
            const iniciativas = JSON.parse(localStorage.getItem('iniciatives'))
            this.tittle = iniciativas[this.id].nome
        }
    }
}
</script>

<style scoped>
.container {
  display: flex;
  text-align: center;
  justify-content: center;
  background: url("@/assets/background-header-image.jpeg");
  width: 100%;
  padding: 7px 0;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
}

.imagem {
  width: 30px;
  height: 30px;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 20px; /* Adiciona um espaço entre a seção anterior e os componentes */
}

.item {
  text-align: center;
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