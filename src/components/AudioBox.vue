<template>
  <div class="retangulo1">
    <div class="quadrado1">
      <input type="file" @change="handleFileChange" id="audio" name="audio" accept="audio/*" required>
      <button @click="addAudio">add audio</button>
    </div>
    <div class="retangulo2">
      <div v-for="(audioUrl, index) in audioUrls" :key="index" class="trabalhador">
        <div class="display-area">
          <audio :src="audioUrl" controls></audio>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL  } from 'firebase/storage'

export default {
  props: ['iniciative'],
  data() {
    return {
      tittle: 'Gestão de Evento',
      file: null,
      audioUrls: []
    }
  },
  methods: {
    addAudio() {
            if(this.file) {
              const storage = getStorage()
              const imageRef = storageRef(storage, 'audios/' + this.file.name)
              uploadBytes(imageRef, this.file).then((snapshot) => {
                console.log('Audio enviado com sucesso para o Firebase!')
                this.handleAudio()
              }).catch((error) => {
                console.error('Erro ao enviar audio:', error)
              })
            }

            this.iniciative.duringIniciativeAudios.push(this.file.name)
      var iniciatives = JSON.parse(localStorage.getItem('iniciatives')).filter(iniciative => iniciative.theme !== this.iniciative.theme)
      iniciatives.push(this.iniciative)
      localStorage.setItem('iniciatives', JSON.stringify(iniciatives))
    },
    handleAudio() {
      const storage = getStorage()
      const promises = []

      for (const duringIniciativeAudio of this.iniciative.duringIniciativeAudios) {
        if (duringIniciativeAudio) {
          const imageRef = storageRef(storage, 'audios/' + duringIniciativeAudio)
          promises.push(getDownloadURL(imageRef).then((url) => ({ duringIniciativeAudio, url })))
        }
      }

      Promise.all(promises)
        .then((results) => {
          results.forEach(({ duringIniciativeAudio, url }) => {
            // Encontrar o índice do material original em this.materialList
            const index = this.iniciative.duringIniciativeAudios.findIndex((d) => d === duringIniciativeAudio)
            // Adicionar a URL na mesma posição no array imageUrl
            this.audioUrls[index] = url
          })
          console.log('URLs dos audios obtidos:', this.audioUrl)
        })
        .catch((error) => {
          console.error('Erro ao obter URLs dos audios:', error)
        })
    },
    handleFileChange(event) {
      this.file = event.target.files[0]; // Obtém o arquivo de imagem selecionado pelo usuário
    }
},
created() {
  this.handleAudio()
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
}

.quadrado1 input{
  width: 100%;
  font-size: 8px;
  background-color: transparent;
  color:white;
  border-radius: 5px;
  margin-left: 2px;
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
    width: 68px;
    height: 68px;
    border: 1px solid #ccc;
    display: inline-flex; /* permite que os trabalhadores fiquem em linha */
  }

  .display-area{
    text-align: justify;
    min-width: 68px;
    max-width: 68px;
    justify-content: center;
    align-items: center;
    position:relative;
  }
</style>