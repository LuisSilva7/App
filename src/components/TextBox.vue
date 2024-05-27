<template>
  <div class="retangulo1">
    <div class="quadrado1">
      <input v-model="newText" placeholder="Insira o seu comentário aqui..." />
      <button @click="addText">Adicionar</button>
    </div>
    <div class="retangulo2">
      <div v-for="(text, index) in iniciative.duringIniciativeTexts" :key="index" class="trabalhador">
        <div class="textarea">
          {{ text }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['iniciative'],
  data() {
    return {
      tittle: 'Gestão de Evento',
      newText: '',
    }
  },
  methods: {
    addText() {
      this.iniciative.duringIniciativeTexts.push(this.newText)
      this.newText = ''
      var iniciatives = JSON.parse(localStorage.getItem('iniciatives')).filter(iniciative => iniciative.theme !== this.iniciative.theme)
      iniciatives.push(this.iniciative)
      localStorage.setItem('iniciatives', JSON.stringify(iniciatives))
    }
  }
}
</script>

<style scoped>

.retangulo1 {
display: flex;
width: 80%; /* largura fixa do retângulo1 */
height: 70px; /* altura fixa do retângulo1 */
border: 1px solid #ccc;
border-radius: 10px;
margin-left: 5vh;
margin-top: 3vh;
padding:0;
}

.quadrado1 {
width: 60%; /* largura fixa do quadrado1 */
height: 100%; /* altura igual à do retângulo1 */
border-right: 2px solid #ccc;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 2px;
}

.quadrado1 input{
border:none;
width: 100%;
font-size: 10px;
background-color: transparent;
color:white;
}

input::placeholder {
color:white;
opacity:1;
}

.quadrado1 button{
margin-top: 16px;
margin-left: 15vh;
border-radius:5px;
width: 40%;
font-size: 10px;
background-color: transparent;
border:1px solid white;
color:white;
}

.retangulo2 {
  width: 40%; /* largura fixa do retângulo2 */
  height: 100%; /* altura igual à do retângulo1 */
  overflow-x: auto; /* habilita a rolagem horizontal */
  overflow-y: hidden; /* esconde a barra de rolagem vertical */
  display: flex;
  align-items: center;
  white-space: nowrap; /* impede a quebra de linha dos elementos */
}

.trabalhador {
  width: 100px;
  height: 68px;
  border: 1px solid #ccc;
  display: inline-flex; /* permite que os trabalhadores fiquem em linha */
}

.textarea{
  text-align: justify;
  padding: 2px;
  min-width: 100px;
  max-width: 100px;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  position:relative;
  overflow: auto; /* Permite scroll quando necessário */
  word-wrap: break-word; /* Quebra palavras longas */
  overflow-wrap: break-word; /* Suporte adicional para quebra de palavras longas */
  white-space: normal; /* Permite quebra de linha */
}

</style>