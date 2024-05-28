<template>
  <TheHeader />
  <Tittle :tittle="iniciative.theme"/>
  <div class="container">
    <div class="sub-titulo">
      <h4>Reportar Problema</h4>
    </div>
      <img @click="open" src="@/assets/exclamation-triangle.svg" class="imagem" alt="Imagem">
  </div>
  <div class="corpo">
    <div class="row">
      <AudioBox :iniciative="this.iniciative" class="item"/>
    </div>
    <div class="row">
      <VideoBox :iniciative="this.iniciative" class="item"/>
    </div>
    <div class="row">
      <TextBox :iniciative="this.iniciative" class="item"/>
    </div>
    <div class="row">
      <PhotoBox :iniciative="this.iniciative" class="item"/>
    </div>
  </div>
  
    
  <div class="button-container">
    <ButtonGoBack />
    <ButtonGoFoward @click="redirect"/>
  </div>
</template>

<script>
import TheHeader from '../components/TheHeader.vue'
import Tittle from '../components/Tittle.vue'
import AudioBox from '../components/AudioBox.vue'
import VideoBox from '../components/VideoBox.vue'
import TextBox from '../components/TextBox.vue'
import PhotoBox from '../components/PhotoBox.vue'
import ButtonGoBack from '../components/ButtonGoBack.vue'
import ButtonGoFoward from '../components/ButtonGoFoward.vue'

export default {
  components: { TheHeader, Tittle, AudioBox, VideoBox, TextBox, PhotoBox, ButtonGoBack, ButtonGoFoward },
  data() {
    return {
      iniciative: {},
      problem: false,
      problemText: ''
    }
  },
  methods: {
    open() {
      this.iniciative.reportProblem = true
      this.iniciative.problem = this.problemText
      var iniciatives = JSON.parse(localStorage.getItem('iniciatives')).filter(iniciative => iniciative.theme !== this.iniciative.theme)
      iniciatives.push(this.iniciative)
      localStorage.setItem('iniciatives', JSON.stringify(iniciatives))
    },
      redirect() {
        this.$router.push({ name: 'CheckOut', params: { theme: this.iniciative.theme } })
      }
  },
    created() {
      this.iniciative = JSON.parse(localStorage.getItem('iniciatives')).find(iniciative => iniciative.theme === this.$route.params.theme)
    }
}
</script>

<style scoped>

.corpo{
  height:420px;
}

.container {
  display: flex;
  text-align: center;
  justify-content: center;
  background: url("@/assets/background-header-image.jpeg");
  width:fit-content;
  padding: 0 10px;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
}

.sub-titulo{
  text-align: center;
  padding: auto 40%;
  display: flex;
  justify-content: center; /* Centers items horizontally */
  align-items: center;   
}

h4 {
  text-align: center;
  background: url("@/assets/background-header-image.jpeg");
  width:max-content;
  padding: 7px 5px;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
}

.imagem {
  margin-left: 4px;
  margin-top: 5px;
  width: 25px;
  height: 30px;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 100px; /* Adiciona um espaço entre a seção anterior e os componentes */
  margin-left: 240px;
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
  padding: 10px 30px;
  box-sizing: border-box; 
}
</style>