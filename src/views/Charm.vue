<script setup>
import { RouterLink } from 'vue-router'


</script>

<template>
    <Nav/>
<RouterView/>
    <div class="heading-container">
      <h2 class="heading-fn">les yeux </h2>
      <h2 class="heading-ln">de charme </h2>

    </div>

    <div class="content">
      <div class="topic-text">Capturing Beauty, Crafting Identities.</div>
      <div class="topic-text">Creative Branding and Photography, where art meets innovation.</div>
      <div class="topic-text">Welcome to a world where every frame is a masterpiece, a testament to the boundless power of visual narratives.</div>
      
    </div>

    <div class = "absolute">
          <div class = "absolute inset-0 justify-center">
            <div class ="bg-shape1 bg-teal opacity-50 bg-blur"></div>
            <div class ="bg-shape2 bg-primary opacity-50 bg-blur"></div>
            <div class ="bg-shape1 bg-purple opacity-50 bg-blur"></div>
          </div>
    </div>



    <div class="container-first">
      <div class="image"> <img src="../images/bg1.jpg" /> </div> 
      <div class="image"> <img src="../images/bg5.jpg" /> </div> 
      <div class="image"> <img src="../images/bg3.jpg" /> </div> 
    </div>

    <h2 class="heading-header">Branding & Photography </h2>

    <div class="container-second">
      <div class="image"> <img src="../images/bg4.jpg" /> </div> 
      <div class="image"> <img src="../images/bg2.jpg" /> </div> 
      <div class="image"> <img src="../images/bg6.jpg" /> </div> 

    </div>

    <div class="image-text-container">
        <img src="../images/cha.jpeg" alt="Charm" class="image-text-image" />
        <div class="image-text-text">
          <h4 class="image-text-heading">The Eyes of Charm Malala</h4>
          <p class="image-text-description">Through the lens of charm and artistry, she illuminate brands, 
            creating visual identities that resonate deeply with the audience. 
            Charm's services encompass a wide range of photography styles, including product photography, fashion shoots, 
            lifestyle photography, and more. Each project is approached with meticulous attention to detail and a deep 
            understanding of the brand's personality and goals. What sets her apart is her holistic approach to branding. 
            She creates cohesive brand identities that resonate with the target audience. 
            From logo design to brand strategy, she ensures that every aspect of the brand speaks the language of charm 
            and allure.
          </p>
        </div>
    </div>

    <div class="button-meet">
      <h2><RouterLink to="/Meet" class="button">About Us</RouterLink></h2>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Pinyon+Script&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Poppins&display=swap');



.heading-container .heading-fn{
font-family: "Pinyon Script", cursive;
font-weight: bold;
font-size: 12rem;
color: black;

margin-left: 6%;
margin-top: 140px;


}

.heading-container .heading-ln{
font-family: "Pinyon Script", cursive;
font-weight:bold;
font-size: 12rem;
color:black;
margin-left: 43%;
margin-top: -200px;
}

.heading-header{
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Playfair Display", cursive;
  font-weight: bold;
  font-size: 2rem;
  color:black;
  text-align: center;
  z-index: 1;
  position: relative;
}

.container-first {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top: 50px;
}


.container-second {
  display: grid;
  grid-template-columns: repeat(3, 2fr);
  align-items: center;
  justify-content: center;
  z-index: -1;
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

.content{
  font-family: "Poppins", serif;
  text-align: center;
  align-items: center;
  
}

.content .topic-text{
  font-size: 14px;
  font-weight: 400;
  color: black;
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

.image-text-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 50px;
}

.image-text-image {
  width: 30%;
  height: 50%;
  justify-content: center;
align-items: center;
  margin-left: 10%;
}

.image-text-text {
  flex: 1;
  text-align: center;
}

.image-text-heading {
  font-family: "Pinyon Script", cursive; 
  font-size: 2rem;
  font-weight: 600;
  color: black;
  margin-right: 15%;
  margin-bottom: 10px; /* add margin bottom to separate heading and description */
}

.image-text-description {
  width: 400px;
  font-size: 14px;
  font-weight: 400;
  color: black;
  text-align: justify; /* justify the text */
  margin-left: 23%;
}

.button {
    text-decoration: none;
    text-transform: uppercase;
    color: black;
    border: 2px solid black;
    border-radius: 20px;
    padding: 5px 15px;
    font-size: 0.7rem;
    font-weight: bold;
    margin-top: 6px; 

}

.button-meet{
  margin-top: -4%;
    margin-left: 54%;
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
  background-color: rgb(23, 183, 103)
}

.bg-teal{
  background-color: rgb(255, 72, 183)
}

.bg-purple{
  background-color: rgb(140, 0, 215)
}






</style>