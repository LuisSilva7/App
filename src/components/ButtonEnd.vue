<template>
    <button @click="end" class="button"><p>Terminar</p></button>
  </template>
  
  <script>
  import { getAuth, onAuthStateChanged } from "firebase/auth"

  export default {
    props: ['dataForm', 'iniciative'],
    methods: {
      end() {
        this.iniciative.participants = this.dataForm.participants
        this.iniciative.donatives = this.dataForm.donatives
        this.iniciative.duration = this.dataForm.duration

        const auth = getAuth()
        onAuthStateChanged(auth, (user) => {
            if (user) {
              var iniciatives = JSON.parse(localStorage.getItem('iniciatives')).filter(iniciative => iniciative.email === user.email)
              this.$router.push({ name: 'Iniciatives', query: { ini: JSON.stringify(iniciatives) } })
            }
        })
      }
    },
    created() {
      console.log(this.iniciative)
      console.log(this.dataForm)
    }
  }
  </script>
  
  <style scoped>
  .button {
  display: inline-block;
  padding: 1px 10px;
  font-size: 15px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: #ffffff;
  color: #830a0a;
  transition: background-color 0.3s ease;
  border: 1px solid black;
  height: fit-content;
  }

  .button p{
  margin: 5px;
  }

  .button:hover {
  background-color: #bcc2c7;
  }
  </style>