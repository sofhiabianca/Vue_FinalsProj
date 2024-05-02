<script setup>
import { RouterLink, useRoute } from 'vue-router';
import { ref, watch } from 'vue';

// Create a ref for the toggler checkbox
const toggler = ref(null);

// Get the current route
const route = useRoute();

// Watch for route changes
watch(route, () => {
 // Uncheck the toggler checkbox when the route changes
 if (toggler.value) {
    toggler.value.checked = false;
 }
});
</script>

<template>
    <div class="menu-wrap">
      <input type="checkbox" class="toggler" ref="toggler">
    <div class="hamburger"><div></div></div>
    <div class="menu">
      <div>
        <div>
          <ul>
            <li><RouterLink to="/">Home</RouterLink></li>
            <li><RouterLink to="/Introduction">Introduction</RouterLink></li>
            <li><RouterLink to="/Meet">Meet our Team</RouterLink></li>
            <li><RouterLink to="/Contact">Contact</RouterLink></li>
          </ul>
        </div>
      </div>
    </div>
    <h1 class="logo">ctrl.</h1>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap');
/*STYLE FOR MENU*/
.logo{
  font-family: "Libre Baskerville", serif;
  position: absolute;
  font-size: 2rem;
  font-weight: bold;
  color: #A53316;
  margin-left: 1250px;
  margin-top: 4px;
}
.menu-wrap {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
}

.menu-wrap .toggler {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  cursor: pointer;
  width: 50px;
  height: 50px;
  opacity: 0;
}

.menu-wrap .hamburger {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 60px;
  height: 60px;
  padding: 1rem;
  background: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Hamburger Line */
.menu-wrap .hamburger > div {
  position: relative;
  flex: none;
  width: 100%;
  height: 2px;
  background: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s ease;
}

/* Hamburger Lines - Top & Bottom */
.menu-wrap .hamburger > div::before,
.menu-wrap .hamburger > div::after {
  content: '';
  position: absolute;
  z-index: 1;
  top: -10px;
  width: 100%;
  height: 2px;
  background: inherit;
}

/* Moves Line Down */
.menu-wrap .hamburger > div::after {
  top: 10px;
}

/* Toggler Animation */
.menu-wrap .toggler:checked + .hamburger > div {
  transform: rotate(135deg);
}

/* Turns Lines Into X */
.menu-wrap .toggler:checked + .hamburger > div:before,
.menu-wrap .toggler:checked + .hamburger > div:after {
  top: 0;
  transform: rotate(90deg);
}

/* Rotate On Hover When Checked */
.menu-wrap .toggler:checked:hover + .hamburger > div {
  transform: rotate(225deg);
}

/* Show Menu */
.menu-wrap .toggler:checked ~ .menu {
  visibility: visible;
}

.menu-wrap .toggler:checked ~ .menu > div {
  transform: scale(1);
  transition-duration: var(--menu-speed);
}

.menu-wrap .toggler:checked ~ .menu > div > div {
  opacity: 1;
  transition:  opacity 0.4s ease 0.4s;
}

.menu-wrap .menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  visibility: hidden;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.menu-wrap .menu > div {
  background: rgb(72,72,72,0.8);
  border-radius: 50%;
  width: 200vw;
  height: 200vw;
  display: flex;
  flex: none;
  align-items: center;
  justify-content: center;
  transform: scale(0);
  transition: all 0.4s ease;
}

.menu-wrap .menu > div > div {
  text-align: center;
  max-width: 90vw;
  max-height: 100vh;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.menu-wrap .menu > div > div > ul > li {
  font-family: "Poppins", sans-serif;
  list-style: none;
  color: #fff;
  font-size: 2rem;
  padding: 1rem;
  transition: color .3s ease-in-out, box-shadow .5s ease-in-out;
}
      .menu-wrap .menu > div > div > ul > li:hover {
        color: #000000;
        box-shadow: inset 600px 0 0 0 #ffffff;;
      }
.menu-wrap .menu > div > div > ul > li > a {
  color: inherit;
  text-decoration: none;
  transition: color 0.4s ease;
}


/*STYLE FOR FOOTER*/
.footer{
background:transparent;
margin-top: 25%;
text-align:center;
}

</style>