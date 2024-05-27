<template>
    <button @click="back" class="button"><p>Anterior</p></button>
  </template>
  
  <script>
  export default {
      methods: {
          back() {
            this.$router.go(-1)
          }
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