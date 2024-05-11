<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  const nextButton = document.querySelector('.text-next');
  const charmImage = document.getElementById('charm-pic');
  const sofhiaImage = document.getElementById('sofhia-pic');

  let currentImage = charmImage; // Start with charmImage as the current image

  nextButton.addEventListener('click', function() {
    // Determine which image is currently in view
    if (currentImage === charmImage) {
      currentImage = sofhiaImage;
    } else {
      currentImage = charmImage;
    }

    // Move the current image to the opposite position
    currentImage.classList.remove('charm-pic');
    currentImage.classList.add('sofhia-pic');
  });
});
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

<div class="center-section">
  <hr>
  <h1 class="marquee">WELCOME TO PROJECT CTRL. PORTFOLIO</h1>
  <hr class="line2">

  <h1 class="marquee">PHOTOGRAPHY — DEVELOPING — DESIGNING — CREATIVITY</h1>
  <hr class="line3">

        <div class="image">
          <img src="../images/landing-charm.jpg" alt="" class="landing-charm" id="charm-pic">
          <img src="../images/landing-sofhia.jpg" alt="" class="landing-sofhia" id="sofhia-pic">
        </div>
  
  <div class="next">
    <h2 class="text-next">NEXT</h2>
  </div>

  <div class="view">
    <h2><RouterLink to="/Meet" class="view">VIEW ALL</RouterLink></h2>
  </div>
</div>

<div class="socials">
  <h1 class="social-text">SOCIALS</h1>
  <div class="charm">
    <h2 class="name">Charm Malala</h2>
    <h4 class="links">linkedin: </h4>
    <h4 class="links">instagram: @charmelaclaire</h4>
    <h4 class="links">contact: +63 967 190 9680</h4>
  </div>
  <div class="sofhia">
    <h2 class="name">Sofhia Lacandola</h2>
    <h4 class="links">linkedin: </h4>
    <h4 class="links">instagram: @so.fhia</h4>
    <h4 class="links">contact: +63 939 141 6624</h4>
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
h1{
  font-family: 'Poppins', serif;
  font-size: 2.9rem;
}
hr{
  margin-top: 25%;
}
.line2, .line3{
  margin-top: 0%;
}
.marquee {
 display: inline-block;
 white-space: nowrap;
 overflow: hidden;
 position: relative;
 animation: marquee 20s linear infinite;
}

.marquee:hover {
 animation-play-state: paused;
}

@keyframes marquee {
  0% {
    transform: translateX(100%);
 }
  100% {
    transform: translateX(-100%);
 }
}
.landing-charm{
  width: 25%;
  margin-left: 40%;
  margin-top: 60%;
  border: 2px dashed black;
  border-radius: 10%;
  transform: rotate(-0.01turn);
}
.landing-sofhia{
  width: 25%;
  margin-left: 44%;
  margin-top: 63%;
  border: 2px solid black;
  border-radius: 10%;
  transform: rotate(-0.01turn);
}
.text-next{
  font-family: 'Poppins', serif;
  font-size: 1rem;
  background-color: white;
  border: 1px solid black;
  border-radius: 50%;
  width: 4%;
  padding: 8px 8px 8px 8px;
  text-align: center;
  margin-top: -5%;
  margin-left: 67%;
  position: absolute; 
  cursor: pointer;
}
.view{
  font-family: 'Poppins', serif;
  font-size: 1rem;
  color: #3f3f3f;
  margin-left: 60%;
  margin-top: 15%;
}
.name{
  font-family: "Pinyon Script", cursive;
  font-size: 2rem;
  color: #951e1e;
  margin-left: 20%;
  margin-top: 2%;
}
.links{
  font-family: "Playfair Display", serif;
  margin-left: 20%;
}
.social-text{
  margin-top: 5%;
  margin-left: 10%;
}
.sofhia{
  text-align: right;
  margin-right: 20%;
  margin-top: 9%;
}
.image img {
  transition: transform 1s ease;
  position: absolute;
  top: 0;
  left: 0;
}

.image img.charm-pic {
  transform: translateX(0);
}

.image img.sofhia-pic {
  transform: translateX(100%);
}


</style>