<template>
    <div class="login-page">
      <div class="login-box">
        <h1>GoHelp</h1>
        <button @click="signInWithGoogle" class="google-button">Login com Google</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { getAuth, GoogleAuthProvider,signInWithPopup, onAuthStateChanged } from "firebase/auth"
  import { useRouter } from 'vue-router'
  import { onMounted, ref } from "vue"

  const router = useRouter()
  let isLoggedIn = ref(false)
  let auth

  const signInWithGoogle = () => {
      const provider = new GoogleAuthProvider()
      signInWithPopup(getAuth(), provider)
      .then((result) => {
          console.log(result.user)
          if(JSON.parse(localStorage.getItem('iniciatives')).some(iniciative => iniciative.email === result.user.email)) {
            var iniciatives = JSON.parse(localStorage.getItem('iniciatives')).filter(iniciative => iniciative.email === result.user.email)
            router.push({ name: 'Iniciatives', query: { ini: JSON.stringify(iniciatives) } })
          }
          else {
            alert("O email inserido não se encontra associado a nenhuma iniciativa. Tente novamente!")
          }
      })
      .catch((error) => {
          console.log("erro")
          console.log(error)
      })
  }

  onMounted(() => {
  auth = getAuth()
  onAuthStateChanged(auth, (user) => {
    if(user) {
      isLoggedIn.value = true
    }
    else {
      isLoggedIn = false
    }
  })
})
</script>
  
  <style scoped>
  .login-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  .login-box {
    background-image: url('@/assets/background-header-image.jpeg');
    text-align: center;
    padding: 70px; /* Adicionando um preenchimento interno à caixa */
    border-radius: 10px; /* Adicionando bordas arredondadas */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Adicionando uma sombra suave */
  }
  
  .google-button {
    background-color: #DB4437;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    margin-top: 20px;
  }
  
  .google-button:hover {
    background-color: #C13505;
  }
  </style>