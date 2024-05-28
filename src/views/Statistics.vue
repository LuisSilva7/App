<template>
  <div class="page">
    <TheHeader />
  <Tittle :tittle="tittle"/>
  <div class="title">
    <h3>Estatísticas</h3>
  </div>
  <div class="corpo">
      <StatisticsForm :theme="iniciative.theme"/>
  </div>
  <div class="rodape">
    <div class="button-container" >
      <ButtonGoBack />
    </div>
  </div>
  </div>
</template>

<script>
import TheHeader from '../components/TheHeader.vue'
import Tittle from '../components/Tittle.vue'
import ButtonGoBack from '../components/ButtonGoBack.vue'
import StatisticsForm from '../components/StatisticsForm.vue'

export default {
  components: { TheHeader, Tittle, ButtonGoBack, StatisticsForm },
    data() {
    return {
      tittle: 'Conclusão do Evento',
      iniciative: {}
    }
  },
    created() {
      this.iniciative = JSON.parse(localStorage.getItem('iniciatives')).find(iniciative => iniciative.theme === this.$route.params.theme)
    }
}
</script>

<style scoped>

page{
  max-width: 90%;
  max-height: 90%;
}

.title{
  width: 100%;
  padding-left: 27%;
}

h3 {
  text-align: center;
  width:180px;
  background: url("@/assets/background-header-image.jpeg");
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
}

body{
  margin:0;
  padding: 0;
  font-family: montserrat;
  height:100vh;
  overflow: hidden;
}

.container{
  margin-top: 8vh;
  margin-bottom: 6vh;
  padding:15px 30px;
}

.box{
  text-align: center;
  background-color: rgb(255,255,255,0.2);
  border:1px solid white;
  border-radius: 15px;
  padding:15px;
}

.button{
  margin-top:2vh;
  color:crimson;
  border-radius: 5px;
  font-weight: bold;
}

.button-container{
 padding-left:2vh;
 text-align:left;
 padding-top: 115%;
}

.form-group{
position: relative;
border-bottom: 2px solid #adadad;
margin: 30px 0;
}

label {
    color: #adadad;
    position:absolute;
    top:50%;
    left:5px;
    transform: translateY(-50%);
    font-size: 16px;
    pointer-events: none;
    transition: .5s;
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

</style>