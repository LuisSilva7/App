<template>
  <header class="header">
    <div class="left-content">
      <img src="@/assets/logo-main-image.png" alt="logo">
      <h2>GoHelp</h2>
    </div>
    <div class="right-content">
      <img src="@/assets/profile-image.svg" alt="profile">
    </div>
  </header>
</template>



<style scoped>
*{ 
  background: url("@/assets/background-header-image.jpeg");
  margin: 0;
  padding: 0;
}

h2{
  font-style: italic;
  font-family: 'Times New Roman', Times, serif;
  font-size: 3.5em;
}

h3{
  font-family: 'Times New Roman', Times, serif;
  font-size: 1.5em;
  position: relative;
  margin-right: 25%;
}

.header {
  color: #fff;
  display: flex;
  justify-content: space-between;
}

.left-content {
  display: flex;
  align-items: center;
}

.right-content {
  display: flex;
  align-items: center;
}

.left-content img {
  width: 110px;
  height: 100px;
}

.right-content img { 
  position: relative;
  width: 120px;
  height: 50px;
}
</style>