s<template>
  <header class="header">
    <div class="left-content">
      <img src="@/assets/logo-main-image.png" alt="logo">
      <h3>GoHelp</h3>
    </div>
    <div class="right-content">
      <h5 @click="handleSignOut" class="sign-out-button"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"/>
  <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/>
</svg></h5>
    </div>
  </header>
</template>

<script setup>
    import { getAuth, signOut, onAuthStateChanged } from "firebase/auth"
    import { useRouter } from 'vue-router'
    import { onMounted, ref } from "vue"

    const router = useRouter()
    let isLoggedIn = ref(false)
    let isCollaborator = ref(false)
    let auth
    let imageData = ''

    onMounted(() => {
    auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      if(JSON.parse(localStorage.getItem('iniciatives')).some(iniciative => iniciative.email === user.email)) {
        isLoggedIn.value = true
      }
      else {
        isLoggedIn = false
      }
    })
  })

  const handleSignOut = () => {
    signOut(auth).then(() => {
      router.push("/")
    })
  }
</script>

<style scoped>
*{ 
  background: url("@/assets/background-header-image.jpeg");
  margin: 0;
  padding: 0;
}

.header {
  color: #fff;
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.left-content {
  display: flex;
  align-items: left;
}

.right-content {
  display: flex;
  align-items: center;
  margin-right: 3vh;
}

.left-content h3{
  margin-top: 3vh;
  font-style: italic;
  font-family: 'Times New Roman', Times, serif;
  font-size: 2.3em;
}

.left-content img{
  width: 30%;
  height: 100%;
}

.right-content svg { 
  position: relative;
  width: 20px;
  height: 20px;
}


.sign-out-button {
  cursor: pointer;
}
</style>