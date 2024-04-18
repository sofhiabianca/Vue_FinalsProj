<script setup>
import { RouterView } from 'vue-router'



</script>

<template>
     
  <div class="container">
    <div class="description">
      <h3 class="intro">Project ctrl. is a visual designing team, specializing in branding design, photography & UI/UX.</h3>
      <img class="photo1" src="../images/1.jpg"/>
      <img class="photo2" src="../images/2.jpg"/>
      <h3 class="logo1">ct</h3>
      <h3 class="logo2">rl.</h3>
    </div>
  </div>

  
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap');
/*STYLE FOR Intro PAGE*/
.logo{
  text-align: right;
  color: #A53316;
  font-family: "Libre Baskerville", serif;
  font-weight: bold;
  font-style: normal;
  font-size: 40px;
  margin-top: 10px;
  margin-right: 15px;
}
.logo1{
  color: #A53316;
  font-family: "Libre Baskerville", serif;
  font-weight: bold;
  font-style: normal;
  font-size: 100px;
  margin-top: -540px;
  margin-left: 63%;
}
  .logo2{
  color: #A53316;
  font-family: "Libre Baskerville", serif;
  font-weight: bold;
  font-style: normal;
  font-size: 100px;
  margin-top: -75px;
  margin-left: 65%;
  }
.intro{
  font-size: 20px;
  width: 20%;
  margin-top: 10%;
  margin-left: 35%;
  font-style: italic;
}
.photo1{
  height: 30%;
  width: 30%;
  margin-bottom: 10%;
  margin-top: -150px;
}
.photo2{
  height: 35%;
  width: 35%;
  margin-top: -400px;
  margin-left: 65%;
}
</style>