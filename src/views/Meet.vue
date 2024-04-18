<script setup>
import { RouterView } from 'vue-router'



</script>

<template>
    <Nav/>
    <RouterView/>
    <div class="title">
              <h2 class="heading-1">Our</h2>
              <h2 class="heading-2">Team</h2>
          </div>
    <div class="images">
        <div class="row">
            <img class="charm" src="../images/charm.jpg">
            <img class="sofhia" src="../images/sofhia.jpg">
        </div>
        <div class="names">
            <div class="row">
                <h2 class="text-name-1">Charmela</h2>
                <h2 class="text-name-2">Sofhia</h2>
            </div>
            <div class="row-role">
                <h2 class="text-role-1">Student</h2>
                <h2 class="text-role-2">Student</h2>
            </div>
            <div class="row">
                <h2 class="text-desc-1">Charmela is Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h2>
                <h2 class="text-desc-2">Sofhia is Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h2>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Pinyon+Script&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Poppins&display=swap');
.heading-2{
font-family: "Pinyon Script", cursive;
position: absolute;
font-size: 3.5rem;
color: #3f3f3f;
margin-left: 18%;
margin-top: 5.3%;

}
.heading-1{
font-family: "Playfair Display", serif;
position: absolute;
font-size: 3rem;
color: #3f3f3f;
text-transform: uppercase;
margin-left: 10%;
margin-top: 5%;
}
.row{
    display: flex;
    justify-content: space-between;
}   
    .row-role{
        display: flex;
        justify-content: space-between;
        margin-top: -3%;
    }
.charm{
    width: 25%;
    height: 25%;
    margin-top: 15%;
   margin-left: 20%;
    border-radius: 5%;
}
.sofhia{
    width: 25%;
    height: 25%;
    margin-top: 15%;
    margin-right: 20%;
    border-radius: 5%;
}
.text-name-1{
    font-family: 'Poppins', serif;
    font-size: 1rem;
    text-transform: uppercase;
    margin-left: 20%;
    margin-top: 1%;
}
.text-name-2{
    font-family: 'Poppins', serif;
    font-size: 1rem;
    text-transform: uppercase;
    margin-right: 40.5%;
    margin-top: 1%;
}
.text-role-1{
    font-family: 'Poppins', serif;
    font-size: 0.8rem;
    text-transform: uppercase;
    font-style: italic;
    border: 1px solid #3f3f3f;
    border-radius: 50%;
    padding-left: 1%;
    padding-right: 1%;
    padding-top: 2px;
    margin-left: 38%;
    margin-top: 1%;
}
    .text-role-1:hover{
        color:#f3f3f3;
        background-color: #951e1e;
        transition: 0.5s all ease;
        cursor: pointer;

    }
.text-role-2{
    font-family: 'Poppins', serif;
    font-size: 0.8rem;
    text-transform: uppercase;
    font-style: italic;
    border: 1px solid #3f3f3f;
    border-radius: 50%;
    padding-left: 1%;
    padding-right: 1%;
    padding-top: 2px;
    margin-right: 20.5%;
    margin-top: 1%;
}
    .text-role-2:hover{
        color:#f3f3f3;
        background-color: #951e1e;
        transition: 0.5s all ease;
        cursor: pointer;

    }
.text-desc-1{
    font-family: 'Poppins', serif;
    position: flex;
    font-size: 0.6rem;
    margin-left: 20%;
    margin-top: 1%;
    padding-right: 11%;
    width: 80%;
}
.text-desc-2{
    font-family: 'Poppins', serif;
    position: flex;
    font-size: 0.6rem;
    margin-right: 10%;
    margin-top: 1%;
    margin-left: -5.5%;
    width: 80%;
}
</style>