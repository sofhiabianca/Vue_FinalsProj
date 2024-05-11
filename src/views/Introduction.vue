<script setup>
import { RouterView } from 'vue-router'



</script>

<template>
     
  <div class="container">
    <div class="description">
      <!-- <h3 class="intro">Project ctrl. is a visual designing team, specializing in branding design, photography & UI/UX.</h3>
      <img class="photo1" src="../images/1.jpg"/>
      <img class="photo2" src="../images/2.jpg"/>
      <h3 class="logo1">ct</h3>
      <h3 class="logo2">rl.</h3> -->
      <h3 class="date-heading">2024</h3>
      <h2 class="title-heading-1">Project</h2>
      <h2 class="title-heading-2">ctrl</h2>
      <img src="../images/intro-landing.png" class="background">
      <h3 class="sub-title-1">D</h3>
      <h3 class="sub-title-2">eveloping and Designing |</h3>
      <p>Check what's about Project CTRL</p>
    </div>
  </div>

    <div class="container">
      <div class="section-2">
        <img src="../images/intro-landing-2.png" class="bg-sec-2">
        <h1 class="desc-1">Created</h1>
        <h1 class="desc-2">by Lacandola</h1>
        <h1 class="desc-3">& Malala</h1>
        <p class="sub-desc">Project ctrl. is a visual designing team, specializing in branding design, photography & UI/UX.</p>
      </div>
    </div>

    <div class="container">
      <div class="section-3">
        <img src="../images/intro-landing-3.png" class="bg-sec-3">
        <h1 class="desc-sec-1">About —</h1>
        <h1 class="desc-sec-2">Us</h1>
        <h2 class="desc-sub-1">P</h2>
        <h2 class="desc-sub-2">roject ctrl. stands as a dynamic and innovative visual designing team, distinguished by its expertise in crafting 
          compelling brand identities, capturing captivating moments through photography, and orchestrating seamless user experiences through UI/UX 
          design. With a passion for creativity and a commitment to excellence, our team at Project ctrl. embarks on each project with a dedication 
          to surpassing client expectations and leaving a lasting impact in the realm of design. Through a meticulous blend of artistic vision, 
          technical prowess, and strategic insight, we endeavor to not only meet but exceed the unique needs and aspirations of every client we serve. 
          Whether it's shaping brand narratives, immortalizing moments in time through stunning photography, or engineering intuitive digital interfaces, 
          Project ctrl. is your partner in transforming ideas into visually compelling realities that resonate with audiences and elevate brands to new 
          heights of success.</h2>
          <h2><RouterLink to="/Meet" class="button">Find out more</RouterLink></h2>
      </div>
    </div>

  
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Pinyon+Script&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Poppins&display=swap');
/*STYLE FOR Intro PAGE*/
.background{
  width: 100%;
  height: 100%;
  margin-top: -20%;
}
.bg-sec-2{
  width: 100%;
  height: 100%;
}
.bg-sec-3{
  width: 100%;
  height: 100%;
  margin-top: 20%;
  margin-bottom: 15%;
}
.date-heading{
  text-align: center;
  margin-top: 8%;
  font-size: 0.8rem;
  color: #6f6f6f;
}
.title-heading-1{
  font-family: "Playfair Display", serif;
  font-size: 3rem;
  margin-left: 40%;
}
.title-heading-2{
  font-family: "Pinyon Script", cursive;
  font-size: 4rem;
  margin-left: 53%;
  margin-top: -6.2%;
  color: #A53316;
}
.sub-title-1{
  font-family: "Pinyon Script", cursive;
  font-size: 3rem;
  color: #A53316;
  margin-left: 30%;
}
.sub-title-2{
  font-family: "Playfair Display", serif;
  font-size: 1.5rem;
  margin-left: 33.2%;
  margin-top: -4.2%;
}
p{
  font-family: 'Poppins', serif;
  margin-left: 33.2%;
}
.desc-1{
  font-family: "Playfair Display", serif;
  font-size: 3.5rem;
  margin-top: -510px;
  margin-left: 40%;
}
.desc-2{
  font-family: "Playfair Display", serif;
  font-size: 3.5rem;
  margin-top: -10px;
  margin-left: 40%;
}
.desc-3{
  font-family: "Playfair Display", serif;
  font-size: 3.5rem;
  margin-top: -10px;
  margin-left: 50%;
}
.sub-desc{
  font-family: 'Poppins', serif;
  margin-top: 5%;
  margin-left: 25%;
}
.desc-sec-1{
  font-family: "Playfair Display", serif;
  font-size: 4rem;
  margin-top: -800px;
  margin-left: 60%;
 
}
.desc-sec-2{
  font-family: "Playfair Display", serif;
  font-size: 4rem;
  font-style: italic;
  margin-top: -20px;
  margin-left: 68%;
 
}
.desc-sub-1{
  font-family: "Pinyon Script", cursive;
  font-size: 3rem;
  color: #A53316;
  margin-left: 50%;
  margin-top: 5%;
}
.desc-sub-2{
  width: 40%;
  font-family: 'Poppins', serif;
  font-size: 0.8rem;
  margin-left: 53%;
  margin-top: -3%;
  text-align: justify;
}
.button{
  font-family: 'Poppins', serif;
  border: 1px solid #6f6f6f;
  font-size: 0.8rem;
  text-decoration: none;
  color: black;
  padding-left: 2%;
  padding-right: 2%;
  padding-top: 0.5%;
  padding-bottom: 0.5%;
  margin-left: 53%;
}
  .button:hover{
    background-color: #A53316;
    color: #ffff;
    transition: 0.5s all ease;
  }
/* .logo{
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
} */
</style>