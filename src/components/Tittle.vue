<template>
  <h1>{{ tittle }}</h1>
  <hr />
</template>

<script>
export default {
  props: ['tittle']
}
</script>

<style scoped>
h1{
  position: relative;
  margin-top: 1.5%;
  text-align: center;
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
hr{
  position: relative;
  max-width: 90%;
  margin: 0 auto;
  margin-top: 1%;
  border-top: 1px solid;
}
</style>