<script setup>
import { RouterView } from 'vue-router'

</script>

<template>
    <Nav/>
    <RouterView />
    <div class="background">
      <section id="up"></section>
      <section id="down"></section>
      <section id="left"></section>
      <section id="right"></section>
          <div class="title">
              <h2 class="heading-1">P</h2>
              <h2 class="heading-2">ortfolio</h2>
              <hr>
          </div>
          <div class="info">
              <h4>Introduction</h4>
              <p class="intro-1">Project ctrl. stands as a dynamic and innovative visual designing team, distinguished by its expertise in crafting compelling brand identities, capturing captivating moments through photography, and orchestrating seamless user experiences through UI/UX design. With a passion for creativity and a commitment to excellence, our team at Project ctrl. embarks on each project with a dedication to surpassing client expectations and leaving a lasting impact in the realm of design.  </p>
              <p class="intro-2">Through a meticulous blend of artistic vision, technical prowess, and strategic insight, we endeavor to not only meet but exceed the unique needs and aspirations of every client we serve. Whether it's shaping brand narratives, immortalizing moments in time through stunning photography, or engineering intuitive digital interfaces, Project ctrl. is your partner in transforming ideas into visually compelling realities that resonate with audiences and elevate brands to new heights of success. </p>
          </div>
  </div>

</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Pinyon+Script&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Poppins&display=swap');
.background{
  margin: 0;
  padding: 0;
  min-height: 100vh;
  background-image: linear-gradient(80deg, rgb(255,165,0), rgb(199,10,114));
  overflow: hidden;
}
#up{
  position: absolute;
  height: 0%;
  width: 500px;
  border-radius: 50%;
  background-image: linear-gradient(80deg, rgb(255,165,0), rgb(224, 255, 255,0.5));
  filter: blur(80px);
  animation: down 40s infinite;
}
#down{
  position: absolute;
  right: 0;
  height: 500px;
  width: 500px;
  border-radius: 50%;
  background-image: linear-gradient(80deg, rgb(255,165,0), 	rgb(255, 182, 193));
  filter: blur(80px);
  animation: up 30s infinite;
}
#left{
  position: absolute;
  height: 500px;
  width: 500px;
  border-radius: 50%;
  background-image: linear-gradient(80deg, rgb(5, 124, 172), rgb(183, 253, 52, 0.8));
  filter: blur(80px);
  animation: left 30s 1s infinite;
}
#right{
  position: absolute;
  height: 500px;
  width: 500px;
  border-radius: 50%;
  background-image: linear-gradient(80deg, rgb(26, 248, 18, 0.6), rgb(199, 10, 52, 0.8));
  filter: blur(80px);
  animation: right 40s infinite;
}
@keyframes down{
  0%, 100%{
      top: -100px;
  }
  70%{
      top: 700px;
  }
}
@keyframes up{
  0%, 100%{
      bottom: -100px;
  }
  70%{
      bottom: 700px;
  }
}
@keyframes left{
  0%, 100%{
      bottom: -100px;
  }
  70%{
      bottom: 1300px;
  }
}
@keyframes right{
  0%, 100%{
      bottom: -100px;
  }
  70%{
      bottom: 1300px;
  }
}

.heading-1{
font-family: "Pinyon Script", cursive;
position: absolute;
font-size: 9rem;
color: #f3f3f3;
text-transform: uppercase;
margin-left: 23%;
margin-top: 10%;

}
.heading-2{
font-family: "Playfair Display", serif;
position: absolute;
font-size: 8rem;
color: #f3f3f3;
text-transform: uppercase;
margin-left: 33%;
margin-top: 9%;
}
hr{
  width: 90%;
  position: absolute;
  margin-left: 5%;
  margin-top: 30%;
}
h4{
  font-family: 'Poppins', serif;
  position: absolute;
  color: #f3f3f3;
  font-weight: bold;
  margin-left: 5%;
  margin-top:32%;
}
.intro-1{
  font-family: 'Poppins', serif;
  font-size: 0.8rem;
  position: absolute;
  color: #f3f3f3;
  margin-left: 5%;
  margin-top: 35%;
  width: 35%;
}
.intro-2{
  font-family: 'Poppins', serif;
  font-size: 0.8rem;
  position: absolute;
  color: #f3f3f3;
  margin-left: 60%;
  margin-top: 35%;
  width: 35%;
}
</style>