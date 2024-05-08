<script setup>
import { RouterView } from 'vue-router'

</script>

<template>
    <Nav/>
    <RouterView />
   
    <div class="container">
      <img src="../images/pic-landing.jpg" alt="" class="pic-landing">
      <div class="button">
                <h2><RouterLink to="/Introduction" class="btn1">BECOMING <br> CREATIVE</RouterLink></h2>
                <h2><RouterLink to="/Meet" class="btn2">EVERYTHING <br>  WE DO</RouterLink></h2>
            </div>
    </div>

<div class="cards">
  <div class="card-1">
    <img src="../images/logo1.png" alt="" class="logo-1">
    <h4 class="text-1">DESIGNING</h4>
  </div>
  <div class="card-2">
    <img src="../images/logo2.png" alt="" class="logo-2">
    <h4 class="text-2">PHOTOGRAPHY</h4>
  </div>
  <div class="card-3">
    <img src="../images/logo3.png" alt="" class="logo-3">
    <h4 class="text-3">DEVELOPING</h4>
  </div>
</div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Pinyon+Script&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Poppins&display=swap');
.pic-landing{
  width: 70%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10%;
  border-radius: 5%;
}
.btn1{
  line-height: 1;
  font-family: 'Poppins', serif;
  font-size: 1rem;
  text-decoration: none;
  text-align: center;
  background-color: white;
  color: #3f3f3f;
  position: absolute;
  margin-left: 38%;
  margin-top: -15%;
  border-radius: 20%;
  border: 2px solid black;
  padding: 1% 3% 1% 3%;

}
.btn2{
  line-height: 1;
  font-family: 'Poppins', serif;
  font-size: 1rem;
  text-decoration: none;
  text-align: center;
  background-color: white;
  color: #3f3f3f;
  position: absolute;
  margin-left: 52%;
  margin-top: -15%;
  border-radius: 20%;
  border: 2px solid black;
  padding: 1% 3% 1% 3%;

}
.card-1{
  width: 12%;
  height: 10%;
  margin-left: 20%;
  margin-top: -2%;
  background-color: white;
  position: absolute;
  border: 2px solid black;
  border-radius: 15%;
}
.logo-1{
  width: 25%;
  margin-left: 8%;
  margin-top: 5%;
}
.text-1{
  font-family: 'Poppins', serif;
  margin-top: -25%;
  margin-left: 38%;

}
.card-2{
  width: 15%;
  height: 10%;
  margin-left: 42%;
  margin-top: -2%;
  background-color: white;
  position: absolute;
  border: 2px solid black;
  border-radius: 15%;
}
.logo-2{
  width: 23%;
  margin-left: 8%;
  margin-top: 3%;
}
.text-2{
  font-family: 'Poppins', serif;
  margin-top: -22%;
  margin-left: 30%;

}
.card-3{
  width: 12%;
  height: 10%;
  margin-left: 65%;
  margin-top: -2%;
  background-color: white;
  position: absolute;
  border: 2px solid black;
  border-radius: 15%;
}
.logo-3{
  width: 25%;
  margin-left: 8%;
  margin-top: 5%;
}
.text-3{
  font-family: 'Poppins', serif;
  margin-top: -25%;
  margin-left: 38%;

}
</style>