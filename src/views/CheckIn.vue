<template>
  <TheHeader />
  <Tittle :tittle="tittle"/>
  <div class="row colabs">
    <div class="colaboradores" style="padding-right: 24px;">
      <div class="sub-titulo">
        <p>Colaborador/ Profissional</p>
      </div>
        <div class="check-boxes">
          <div v-for="collaborator in iniciative.collaborators" :key="collaborator.name" >
            <CheckInBox :nome="collaborator.name" papel="Colaborador" :check="collaborator.check" @checked="handleChecked" class="checkinout-box"/>
          </div>
          <div v-for="professional in iniciative.professionals" :key="professional.name" >
            <CheckInBox :nome="professional.name" papel="Profissional" :check="professional.check" @checked="handleChecked" class="checkinout-box"/>
          </div>
        </div>
    </div>
  </div>
  <div class="row mats">
    <div class="materiais">
      <div class="sub-titulo2">
        <hr>
        <p>Material</p>
      </div>
        <div class="check-boxes dois">
          <div v-for="material in iniciative.materials" :key="material.name" class="object">
            <CheckInBox :nome="material.name" papel="Material" :check="material.check" @checked="handleChecked" class="checkinout-box"/>
          </div>
        </div>
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
import ButtonGoBack from '../components/ButtonGoBack.vue'
import ButtonGoFoward from '../components/ButtonGoFoward.vue'
import CheckInBox from '../components/CheckInBox.vue'

export default {
  components: { TheHeader, Tittle, ButtonGoBack, ButtonGoFoward, CheckInBox },

  data() {
        return {
          tittle: 'Gestão de Evento',
          iniciative: {}
        }
  },
  methods: {
      redirect() {
        this.$router.push({ name: 'DuringIniciative', params: { theme: this.iniciative.theme } })
      },
      handleChecked(name, papel) {
        if(papel === 'Material') {
          const iniciativeIndex = JSON.parse(localStorage.getItem('iniciatives')).findIndex(iniciative => iniciative.theme === this.iniciative.theme)
          var iniciatives = JSON.parse(localStorage.getItem('iniciatives'))
          iniciatives.splice(iniciativeIndex, 1)
          const index = this.iniciative.materials.findIndex(material => material.name === name)
          var material = this.iniciative.materials.find(material => material.name === name)
          material.check = true
          this.iniciative.materials.splice(index, 1)
          this.iniciative.materials.push(material)
          iniciatives.push(this.iniciative)
          localStorage.setItem('iniciatives', JSON.stringify(iniciatives))
        }
        else if (papel === 'Colaborador'){
          const iniciativeIndex = JSON.parse(localStorage.getItem('iniciatives')).findIndex(iniciative => iniciative.theme === this.iniciative.theme)
          var iniciatives = JSON.parse(localStorage.getItem('iniciatives'))
          iniciatives.splice(iniciativeIndex, 1)
          const index = this.iniciative.collaborators.findIndex(collaborator => collaborator.name === name)
          var collaborator = this.iniciative.collaborators.find(collaborator => collaborator.name === name)
          collaborator.check = true
          this.iniciative.collaborators.splice(index, 1)
          this.iniciative.collaborators.push(collaborator)
          iniciatives.push(this.iniciative)
          localStorage.setItem('iniciatives', JSON.stringify(iniciatives))
        }
        else {
          const iniciativeIndex = JSON.parse(localStorage.getItem('iniciatives')).findIndex(iniciative => iniciative.theme === this.iniciative.theme)
          var iniciatives = JSON.parse(localStorage.getItem('iniciatives'))
          iniciatives.splice(iniciativeIndex, 1)
          const index = this.iniciative.professionals.findIndex(professional => professional.name === name)
          var professional = this.iniciative.professionals.find(professional => professional.name === name)
          professional.check = true
          this.iniciative.professionals.splice(index, 1)
          this.iniciative.professionals.push(professional)
          iniciatives.push(this.iniciative)
          localStorage.setItem('iniciatives', JSON.stringify(iniciatives))
        }
      }
  },
  created() {
    this.iniciative = JSON.parse(localStorage.getItem('iniciatives')).find(iniciative => iniciative.theme === this.$route.params.theme)
  }
}
</script>

<style scoped>
.container {
  display: flex;
  height: 100%;
}

.colaboradores{
  padding-right: 0;
}

.sub-titulo{
  text-align: center;
  padding: auto 40%;
  display: flex;
  justify-content: center; /* Centers items horizontally */
  align-items: center;   
}

p {
  font-size: 12px;
  text-align: center;
  background: url("@/assets/background-header-image.jpeg");
  width:max-content;
  padding: 7px 5px;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
}

.check-boxes{
  min-width: 375px;
  max-width: 375px;
  min-height: 200px;
  max-height: 200px;
  padding:0 10px;
  justify-content: center; /* Centers items horizontally */
  align-items: center;   
  overflow-x: hidden; /* Hides horizontal overflow */
  overflow-y: auto; /* Adds vertical scrollbar when content overflows */
}

.checkinout-box{
  width:100%;
  height: 55.58px;
}

.object{
  height: fit-content;
}

hr{
  position: relative;
  max-width: 90%;
  margin: 0 auto;
  margin-top: 1%;
  border-top: 1px solid;
}

.sub-titulo2{
  margin-top: 3px;
}

.sub-titulo2 p{
  margin-left: 30%;
  width:160.92px;
}

.row.mats{
  padding-right: 0;
  width:100%;
}

.materiais{
  padding-right: 0;
  width: 100%;
}

.check-boxes.dois{
  padding-bottom: 15px;
  overflow: hidden;
}

/**Daqui para baixo nao fiz a nao ser butoes */
.box {
  display: flex;
  flex-direction: row;
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