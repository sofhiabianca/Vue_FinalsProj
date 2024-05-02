<script setup>
import { RouterLink } from 'vue-router'

</script>

<template>
    <Nav/>
<RouterView/>
<img src="../images/sof-landing.png">
<div class="row-role">
                <h2><RouterLink to="/DescriptionSof" class="button">Get Started</RouterLink></h2>
            </div>
</template>

<style scoped>
img{
    width: 100%;
    height: 100%;
}
.button{
    text-decoration: none;
    text-transform: uppercase;
    color: rgb(32, 98, 32);
    border: 2px solid rgb(32, 98, 32);
    border-radius: 20px;
    padding: 5px 15px 5px 15px;
    font-size: 1rem;
    font-weight: bold;
    margin-left: 45%;
    margin-top: -3%;
    position: absolute;

}
</style>