<template>
  <TheHeader />
  <Tittle :tittle="tittle"/>
  <div class="container">
    <h3>Colaborador / Profissional</h3>
    <h3>Material</h3>
  </div>

  <div class="box">

  <div class="containerColaborador">
    <div v-for="collaborator in collaborators" :key="collaborator.name" >
      <CheckInOutBox :nome="collaborator.name" papel="Colaborador" check="CheckIn" class="checkinout-box"/>
  </div>
 </div>
  <div class="containerMateriais">
    <div v-for="material in materiais" :key="material.name">
      <CheckInOutBox :nome="collaborator.name" papel="Colaborador" check="CheckIn" class="checkinout-box"/>
    </div>
  </div>
 </div>

<div class="button-container">
  <ButtonGoBack />
  <ButtonGoFoward :theme="theme" redirectPage="DuringIniciative"/>
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
  props: ['theme'],
  data() {
        return {
          tittle: 'Gestão de Evento',
          collaborators: [],
          materials: []
        }
  },
  created() {
    console.log(JSON.parse(this.$route.query.iniciative).collaborators)
    this.collaborators = JSON.parse(this.$route.query.iniciative).collaborators
    this.materials = JSON.parse(this.$route.query.iniciative).materials
    //FAZER OS PROFISSIONAIS
  }
}
</script>

<style scoped>
.container {
  display: flex; /* Usando flexbox para alinhar os elementos lado a lado */
 
}

.box {
  display: flex;
  flex-direction: row;

}

.containerColaborador {
  display: flex;
  overflow-y: scroll; 
  flex-direction: column;
  justify-content: center;
  margin-left: 21%;
  margin-top: 1%;
  width: 25%;
  max-height: 400px;
  
}

.containerMateriais {
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-height: 200px;
  width: 30%;
  margin-left: 10%;
  margin-right: 2%;
  margin-top: 1%;
  overflow-y: scroll; 
 
 
 
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