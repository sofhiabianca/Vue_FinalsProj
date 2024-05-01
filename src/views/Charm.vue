<script setup>
import { RouterLink } from 'vue-router'



</script>

<template>
    <Nav/>
<RouterView/>
<div class = "absolute">
      <div class = "absolute inset-0 justify-center">
        <div class ="bg-shape1 bg-teal opacity-50 bg-blur"></div>
        <div class ="bg-shape2 bg-primary opacity-50 bg-blur"></div>
        <div class ="bg-shape1 bg-purple opacity-50 bg-blur"></div>


      </div>

    </div>
    <div class="container">
      <div class="image"> <img src="../images/bg1.jpg" /> </div> 
      <div class="image"> <img src="../images/bg2.jpg" /> </div> 
      <div class="image"> <img src="../images/bg3.jpg" /> </div> 

    </div>



    <h2 class="heading-fn">Charm </h2>
    <h2 class="heading-ln">Malala </h2>

    <div class="container-second">
      <div class="image"> <img src="../images/bg4.jpg" /> </div> 
      <div class="image"> <img src="../images/bg5.jpg" /> </div> 
      <div class="image"> <img src="../images/bg6.jpg" /> </div> 

    </div>

    <h2 class="heading-header">Branding & Photography </h2>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Pinyon+Script&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Poppins&display=swap');

.heading-fn{
font-family: "Pinyon Script", cursive;
font-weight:bold;
position: absolute;
font-size: 12rem;
color:  blue;
margin-left: 14%;
margin-top: -400px;
}

.heading-ln{
font-family: "Pinyon Script", cursive;
font-weight:bold;
position: absolute;
font-size: 12rem;
color: blue;
margin-left: 45%;
margin-top: -320px;
}

.heading-header{
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Playfair Display", cursive;
  font-weight: bold;
  font-size: 2rem;
  color: blue;
  text-align: center;
  margin-top: -80px;
}

.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-content: center;
  z-index: 1;
}


.container-second {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-content: center;
  z-index: 1;
  position: relative;
  overflow: hidden;
}

.image {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* adjust the height to your needs */
}

.image img {
  max-width: 90%;
  height: auto;
  margin: 0 auto;
}

.absolute{
  position: absolute;
  top: 50px !important;
  inset: 0;
  justify-content: center;  
  display: inline-flex;
  flex-direction: row;
  z-index: -1;
}

.justify-center {
  justify-content: center;

}

.bg-shape1 {
  width: 400px;
  height: 400px;
  border-radius: 9999px;
  position: relative;
  animation: one 10s infinite;
}

.bg-shape2 {
  width: 300px;
  height: 300px;
  border-radius: 9999px;
  position: relative;
  animation: two 10s infinite;
}


@keyframes one {
  0%{left: 0px; top: 0px;}
  25%{left: -100px; top: 70px;}
  50%{left: 20px; top: 150px;}
  75%{left: 50px; top: 100px;}
  0%{left: 0px; top: 0px;}
}


@keyframes two {
  0%{left: 0px; top: 0px;}
  25%{left: 50px; top: 10px;}
  50%{left: 100px; top: 50px;}
  75%{left: 50px; top: 100px;}
  0%{left: 0px; top: 0p1x;}
}

.opacity-50 {
  opacity: .5;
}

.bg-blur{
  filter: blur(90px);
}

.bg-primary{
  background-color: rgb(30, 0, 255)
}

.bg-teal{
  background-color: rgb(255, 72, 183)
}

.bg-purple{
  background-color: rgb(140, 0, 215)
}






</style>