<template>
  <div class="quadrado">
    <div class="row row-cols-2">
      <div class="col-6">
        <div class="conteudo-imagem">
          <img v-if="iniciative.photo === ''" src="@/assets/default-image.png" height="200px" width="200px" alt="Foto da Iniciativa">
          <img v-else :src="imageUrl" height="80px" width="80px" alt="Foto da Iniciativa">
        </div>
      </div>
      <div class="col-4" style="width: fit-content; height: fit-content;">
        <div class="date">
          <h1 id="month">{{ month }}</h1>
          <h3 id="day">{{ day }}</h3>
        </div>
      </div>
    </div>
    <div class="informacoes">
      <div class="texto">
        <h5 id="titulo">{{ iniciative.theme }}</h5>
        <p id="numero">Nº minímo de participantes: {{ iniciative.minParticipants }}</p>
        <p id="local">Local: {{ iniciative.local }}</p>
      </div>
      <button @click="redirect" class="botao">Iniciar</button>
    </div>
  </div>
</template>

<script>
import { getStorage, ref as storageRef, getDownloadURL  } from 'firebase/storage'

export default {
  props: ['iniciative'],
  data() {
    return {
      month: '',
      day: '',
      imageUrl: ''
    }
  },
  methods: {
      redirect() {
        this.$router.push({ name: 'CheckIn', params: { theme: this.iniciative.theme } })
      }
  },
  created() {
    var partes = this.iniciative.date.split("-")
    if(partes[1] === '01') {
      this.month = 'Jan'
    }
    if(partes[1] === '02') {
      this.month = 'Fev'
    }
    if(partes[1] === '03') {
      this.month = 'Mar'
    }
    if(partes[1] === '04') {
      this.month = 'Abr'
    }
    if(partes[1] === '05') {
      this.month = 'Mai'
    }
    if(partes[1] === '06') {
      this.month = 'Jun'
    }
    if(partes[1] === '07') {
      this.month = 'Jul'
    }
    if(partes[1] === '08') {
      this.month = 'Ago'
    }
    if(partes[1] === '09') {
      this.month = 'Set'
    }
    if(partes[1] === '10') {
      this.month = 'Out'
    }
    if(partes[1] === '11') {
      this.month = 'Nov'
    }
    if(partes[1] === '12') {
      this.month = 'Dez'
    }
    this.day = partes[2]

    const storage = getStorage()

          if (this.iniciative.photo) {
            const imageRef = storageRef(storage, 'images/' + this.iniciative.photo)
            getDownloadURL(imageRef)
            .then((url) => {
              console.log('URL da imagem obtida:', url);
              this.imageUrl = url // Retorna a URL da imagem
            })
            .catch((error) => {
              console.error('Erro ao obter URL da imagem:', error)
              throw error; // Lança o erro para ser tratado pelo chamador
            })
          } else {
            const imageRef = storageRef(storage, 'images/' + 'defaultImage.png')
            getDownloadURL(imageRef)
            .then((url) => {
              console.log('URL da imagem obtida:', url);
              this.imageUrl = url // Retorna a URL da imagem
            })
            .catch((error) => {
              console.error('Erro ao obter URL da imagem:', error)
              throw error; // Lança o erro para ser tratado pelo chamador
            })
          }
  }
}
</script>

<style scoped>

.quadrado {
margin-top: 60px;
position: relative;
width: 300px; /* Largura do quadrado */
height: 325px; /* Altura do quadrado */
background-color: #f0f0f0; /* Cor de fundo do quadrado */
border-radius: 30px; /* Borda arredondada */
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Sombra suave */
overflow: hidden; /* Para esconder partes da imagem que saem do quadrado */
}

.conteudo-imagem {
position: relative;
width: 100%;
height: 100%; 
margin-bottom: 0;
}

.conteudo-imagem img{
  display: block; /* Garante que a imagem seja exibida como bloco */
  width: 162.5px; /* Garante que a imagem não ultrapasse a largura do quadrado */
  height: 162.5px; /* Garante que a imagem não ultrapasse a altura do quadrado */
  margin: auto; 
  overflow: hidden;
  object-fit: fill;
}

.informacoes {
background-color:#ffffff;
position: absolute;
bottom: 0;
left: 0;
width: 100%;
height: 50%;
text-align: center;
display: flex;
flex-flow: row nowrap;
justify-content:left;
}

.date {
padding: 47px 10px 10px 10px; /* Aqui dá para mexer para centrar no container*/ 
height: 100%;
display: flex;
flex-flow: column nowrap;
text-align: center;
margin-left: 5vh;
}

#month {
margin-bottom: 0;
color: crimson;
font-size: 35px;
}

#day {
color: black;
font-size: 30px;
}

.texto {
padding-left: 10px;
padding-top: 10px;
flex-grow:5;
text-align: left;
}

#titulo {
margin-bottom: 9px;
font-weight: bold;
font-size: 17px;
color:black;
text-align: left;
}

#local {
color:black;
font-size: 14px;
}

#numero {
color:black;
font-size: 14px;
margin-bottom: 3px;
}

.botao {
position: absolute;
bottom: 0;
right: 0;
background-color: #ffffff; /* Cor do botão */
color: #7e0a0a; /* Cor do texto do botão */
border: none;
border-radius: 30px 0 0 0; /* Borda arredondada - tenho que definir apenas a esquerda superior e direita inferior */
padding: 7px 14px; /* Espaçamento interno */
cursor: pointer;
transition: background-color 0.3s ease; /* Transição suave de cor de fundo */
border: 2px solid black;
border-bottom-right-radius: 30px;
}

.botao:hover {
background-color: #bcc2c7; /* Cor do botão ao passar o mouse */
}
</style>