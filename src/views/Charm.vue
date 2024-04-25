<script setup>
import { RouterLink } from 'vue-router'

</script>

<template>
    <Nav/>
<RouterView/>
<div class="container">
      <div class="image"> <img src="../images/bg1.jpg" /> </div> 
      <div class="image"> <img src="../images/bg2.jpg" /> </div> 
      <div class="image"> <img src="../images/bg3.jpg" /> </div> 

    </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center; 
  justify-content: center;
}
img{
  height:515px;
  margin-left: 15px ;
  margin-right: 15px;
}
</style>