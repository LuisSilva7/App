<template>
  <button @click="foward" class="button">Continuar</button>
</template>

<script>
export default {

  props: ['id', 'redirectPage'],
  methods: {
    foward() {
      this.$router.push({ name: this.redirectPage, params: { id: this.id }})
    }
  }
}
</script>

<style scoped>
.button {
display: inline-block;
padding: 10px 20px;
font-size: 20px;
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
}
.button:hover {
background-color: #bcc2c7;
}
</style>