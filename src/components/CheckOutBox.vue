<template>
    <div v-if="check" class="container">
      <div class="nome">
          <p>{{nome}}</p></div>
      
      <div class="profissao">
          <p>{{papel}}</p></div>
      <div class="divisoria"></div>
      <div @click="checked" class="checkin"><p>CheckOut</p></div>
    </div> 
  </template>
  
  <script>
  export default {
    props: ['nome' , 'papel', 'check'],
    data() {
      return {
  
      }
    },
    methods: {
      checked() {
        this.$emit('checked', this.nome, this.papel)
      }
    }
  }
  </script>
  
  <style scoped>
  
  p{
  align-content: center;
  justify-content: center;
  justify-items: center;
  display: flex;
  margin-top: 10%;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 14px;
}

.nome{
  overflow: hidden;
}

.container {
  
  display: flex;
  padding: 0;
  justify-content: center;
  width: 80%; /* Largura do retângulo */
  height: 80px; /* Altura do retângulo */
  border: 2px solid #ccc; /* Borda cinza */
  border-radius: 10px; /* Borda arredondada */
  margin: 4px;
  
 
}

.nome{
  width: 100%;
  display: flex;
  float: left;
  justify-content: center; /* Centraliza conteúdo horizontalmente */
  align-items: center; /* Centraliza conteúdo verticalmente */
  font-size: 16px; /* Tamanho da fonte */
}

.profissao {
  width: 100%;
  display: flex;
  float: left;
  justify-content: center; /* Centraliza conteúdo horizontalmente */
  align-items: center; /* Centraliza conteúdo verticalmente */
  font-size: 16px; /* Tamanho da fonte */
}

.checkin{
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center; /* Centraliza conteúdo horizontalmente */
  align-items: center; /* Centraliza conteúdo verticalmente */
  font-size: 16px; /* Tamanho da fonte */
  background: url("@/assets/background-header-image.jpeg");
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  cursor: pointer;
}

.divisoria {
  width: 3%; /* Largura da divisória */
  background-color: #fff; /* Cor de fundo branca */
}

.container2 {
  margin-top: -2%;
  display: flex;
  margin-left: 57%;
  align-content: center;
  padding: 0;
  justify-content: center;
  width: 20%; /* Largura do retângulo */
  height: 80px; /* Altura do retângulo */
  border: 2px solid #ccc; /* Borda cinza */
  border-radius: 10px; /* Borda arredondada */
 
}
  
  </style>