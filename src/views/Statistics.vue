<template>
  <TheHeader />
  <Tittle :tittle="tittle"/>
  <h3>Estatísticas</h3>
  <StatisticsForm />
  <div class="button-container">
    <ButtonGoBack />
    <ButtonEnd/>
  </div>
</template>

<script>
import TheHeader from '../components/TheHeader.vue'
import Tittle from '../components/Tittle.vue'
import ButtonGoBack from '../components/ButtonGoBack.vue'
import ButtonEnd from '../components/ButtonEnd.vue'
import StatisticsForm from '../components/StatisticsForm.vue'

export default {
  components: { TheHeader, Tittle, ButtonGoBack, ButtonEnd, StatisticsForm },
  props: ['id'],
    data() {
    return {
      tittle: 'Conclusão do Evento'
    }
  }
}
</script>

<style scoped>
h3 {
  text-align: center;
  align-items: center;
  margin-left: 44%;
  background: url("@/assets/background-header-image.jpeg");
  width: 12%;
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