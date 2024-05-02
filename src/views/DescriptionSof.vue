<script setup>
import { RouterLink } from 'vue-router'
import { onMounted, ref } from 'vue';

// Define a ref to hold the marquee element
const marquee = ref(null);

// Function to pause the marquee animation
const pauseMarquee = () => {
 marquee.value.style.animationPlayState = 'paused';
};

// Function to resume the marquee animation
const resumeMarquee = () => {
 marquee.value.style.animationPlayState = 'running';
};

// Use onMounted to ensure the DOM is ready before accessing the marquee element
onMounted(() => {
 // Attach event listeners to the marquee element
 marquee.value.addEventListener('mouseenter', pauseMarquee);
 marquee.value.addEventListener('mouseleave', resumeMarquee);
});

// Define a ref for each card to track its visibility
const card1Visible = ref(false);
const card2Visible = ref(false);
const card3Visible = ref(false);

// Function to handle intersection changes
const handleIntersection = (entries, observer) => {
 entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Assuming the ref name matches the card number
      const cardNumber = entry.target.getAttribute('data-card-number');
      if (cardNumber === '1') {
        card1Visible.value = true;
      } else if (cardNumber === '2') {
        card2Visible.value = true;
      } else if (cardNumber === '3') {
        card3Visible.value = true;
      }
    }
 });
};

// Use onMounted to set up the IntersectionObserver
onMounted(() => {
 const observer = new IntersectionObserver(handleIntersection, {
    rootMargin: '0px',
    threshold: 0.1
 });

 const cards = document.querySelectorAll('.card');
 cards.forEach(card => observer.observe(card));
});
</script>

<template>
<div class="container">
    <img src="../images/s1.png" alt="" class="s1">
    <img src="../images/s2.jpg" alt="" class="s2">
</div>
<div class="desc">
    <h2 class="desc-1">I'm a</h2>
    <h2 class="desc-2">Creative Developer</h2>
    <h2 class="desc-3">Re-defining</h2>
    <h2 class="desc-4">Online Success</h2>
</div>
<div class="sub-desc">
    <p class="sub-desc-1">Creative front-end development is the art of translating design concepts into interactive and visually captivating user interfaces</p>
    <p class="sub-desc-2">It involves blending aesthetic sensibilities with technical prowess to deliver seamless and engaging digital experiences that leave a lasting impression.</p>
</div>
<div class="marquee-container">
    <div class="marquee" ref="marquee">
      <span>What I offer / What I offer / What I offer / What I offer / What I offer / What I offer / What I offer / What I offer / What I offer / What I offer / What I offer /</span>
      <span>What I offer / What I offer / What I offer / What I offer / What I offer / What I offer / What I offer / What I offer / What I offer / What I offer / What I offer /</span>
    </div>
 </div>

 <div class="card-container">
        <!-- Card 1 -->
        <div class="card" :class="{ 'card-pop-up': card1Visible }" data-card-number="1">
            <div class="card-header">Photography</div>
            <div class="card-body">
                <h5 class="card-title">Online Session</h5>
                <p class="card-text">Offers online photography sessions that seamlessly blend her expertise in visual design with practical instruction, 
                    empowering participants to elevate their photography skills in a creative and accessible virtual environment.</p>
                <div class="button-div">
                    <h2><RouterLink to="/PhotogSof" class="button">Learn More</RouterLink></h2>
                </div>
            </div>
        </div>
        <!-- Card 2 -->
        <div class="card" :class="{ 'card-pop-up': card2Visible }" data-card-number="2">
            <div class="card-header">Social Media</div>
            <div class="card-body">
                <h5 class="card-title">Management</h5>
                <p class="card-text">Provides comprehensive social media management services, leveraging her creative flair and technical acumen to curate 
                    engaging content and cultivate vibrant online communities for businesses seeking to enhance their digital presence.</p>
                    <div class="button-div">
                    <h2><RouterLink to="/SocialSof" class="button">Learn More</RouterLink></h2>
                </div>
            </div>
        </div>
        <!-- Card 3 -->
        <div class="card" :class="{ 'card-pop-up': card3Visible }" data-card-number="3">
            <div class="card-header">One-on-One</div>
            <div class="card-body">
                <h5 class="card-title">Development</h5>
                <p class="card-text">Offers personalized one-on-one front-end development sessions, combining her deep understanding of aesthetic design with 
                    expert coding guidance to empower individuals to create stunning and functional digital experiences tailored to their unique visions.</p>
                    <div class="button-div">
                    <h2><RouterLink to="/DevSof" class="button">Learn More</RouterLink></h2>
                </div>
            </div>
        </div>
    </div>

<div class="meet">
    <img src="../images/s3.jpg" alt="" class="s3">
    <h2 class="header">Meet Sofhia Lacandola</h2>
    <h2 class="sub-header">Self-proclaimed risk taker & sage green enthusiast,</h2>
    <h2 class="sub-header-1">Taking over internet</h2>
    <h2 class="sub-header-2">One click at a time.</h2>
    <p class="text-description">Sofhia is taking the internet by storm with her innovative blend of creativity and technical expertise, whether through her captivating photography 
        sessions, dynamic social media management services, or personalized front-end development guidance, leaving a lasting impression across digital platforms.</p>
        <div class="button-meet">
                    <h2><RouterLink to="/Meet" class="button">About Us</RouterLink></h2>
        </div>
</div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Pinyon+Script&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
.s1{
    width: 20%;
    height: 20%;
    margin-left: 70%;
    margin-top: 10%;
}
.s2{
    width: 30%;
    height: 30%;
    margin-left: 2%;
}
.s3{
    width: 30%;
    height: 30%;
    float: right;
}
.desc-1{
    font-family: "Playfair Display", serif;
    font-size: 2rem;
    position: relative;
    text-align: center;
    text-transform: uppercase;
    margin: -60% 0 0 0;
}
.desc-2{
    font-family: "Pinyon Script", cursive;
    font-size: 4rem;
    position: relative;
    text-align: center;
}
.desc-3{
    font-family: "Inter", sans-serif;
    font-size: 3rem;
    position: relative;
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    color:rgb(32, 98, 32);
}
.desc-4{
    font-family: "Playfair Display", serif;
    font-size: 2rem;
    position: relative;
    text-align: center;
    text-transform: uppercase;
}
.sub-desc-1{
    width: 20%;
    text-align: justify;
    margin-left: 30%;
    margin-top: 5%;
}
.sub-desc-2{
    width: 20%;
    text-align: justify;
    margin-left: 58%;
    margin-top: -7.1%;
}
.marquee-container {
 overflow: hidden; /* Hide the overflowing text */
 white-space: nowrap; /* Prevent the text from wrapping */
 width: 100%; /* Set the width of the container */
}

.marquee {
 display: inline-block;
 padding-left: 100%; /* Start the text off-screen */
 animation: marquee 55s linear infinite; /* Define the animation */
 margin-top: 30%;
 background-color: rgb(32, 98, 32);
 color: white;
 text-transform: uppercase;
 font-style: "Poppins", serif;
 padding-top: 1%;
 padding-bottom: 1%;
}

@keyframes marquee {
  0% {
    transform: translateX(0);
 }
  100% {
    transform: translateX(-100%);
 }
}

.card-container {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 20px;
}

.card {
    width: 400px;
    height: 300px;
    border: 2px solid rgba(0, 0, 0, 0.1); /* Semi-transparent border */
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.1); /* Semi-transparent background */
    margin: 10px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Optional: Adds a shadow for depth */
}

.card-header {
    font-family: "Poppins", serif;
    font-weight: bold;
    font-size: 2rem;
    margin-bottom: 10px;
    text-align: center;
    text-transform: uppercase;
}

.card-title {
    font-family: "Pinyon Script", cursive;
    font-size: 2rem;
    margin-top: -30px;
    margin-bottom: 10px;
    text-align: center;
}

.card-text {
    font-family: "Poppins", serif;
    font-size: 0.8em;
    text-align: justify;
    margin-bottom: 10%;

}
@keyframes popUp {
 from {
    transform: scale(0.9);
    opacity: 0;
 }
 to {
    transform: scale(1);
    opacity: 1;
 }
}

.card-pop-up {
 animation: popUp 0.5s ease-out forwards;
}

.button {
    text-decoration: none;
    text-transform: uppercase;
    color: rgb(32, 98, 32);
    border: 2px solid rgb(32, 98, 32);
    border-radius: 20px;
    padding: 5px 15px;
    font-size: 0.7rem;
    font-weight: bold;
    margin-top: 6px; /* This adds a 6px margin at the top of the button */
}

.button-div {
    display: flex;
    justify-content: center; /* Centers the button horizontally */
    align-items: center; /* Centers the button vertically */
    height: 100%; /* Ensures the container takes up the full height */
    /* Add any other styling as needed */
}
.header{
    font-family: "Pinyon Script", cursive; 
    font-size: 2rem;
    margin-top: 5%;  
    margin-left: 10%;
}
.sub-header{
    width: 25%;
    font-family: "Playfair Display", serif;
    font-size: 2rem;
    text-transform: uppercase;
    margin-left: 10%;
}
.sub-header-1{
    font-family: "Poppins", serif;
    font-size: 2rem;
    font-weight: bold;
    text-transform: uppercase;
    margin-left: 10%; 
    color: rgb(32, 98, 32);
}
.sub-header-2{
    width: 25%;
    font-family: "Playfair Display", serif;
    font-size: 2rem;
    text-transform: uppercase;
    margin-left: 10%;
}
.text-description{
    width: 28%;
    text-align: justify;
    font-family: "Poppins", serif;
    font-size: 0.8rem;
    margin-left: 10%; 
    margin-top: 2%;
}
.button-meet{
    margin-top: 2%;
    margin-left: 10%;
}
</style>