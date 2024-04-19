<script setup>
import { RouterView } from 'vue-router'

</script>
<template>
    <body>
        <div class="contactPage">
      <h1 class="heading-3">Contact</h1>
      <h1 class="heading-2">Us</h1>
      
    </div>
    
    <div class="content">
      <div class="left-side">
        <img class="bella" src="../images/bella.jpg">
        
      </div>
      <div class="right-side">
  
  <div class="topic-text">Tell us about your vision.</div>
  <div class="topic-text">Get in touch.</div>

  <form action="#">
    <div class="input-box">
      <input type="text" placeholder="Name">
    </div>
    <div class="input-box">
      <input type="text" placeholder="E-mail">
    </div>
    <div class="input-box message-box">
        <input type="text" placeholder="Message">
    </div>
    <div class="button">
      <input type="button" value="Send" >
    </div>
  </form>
</div>
</div>

    <div class="footer">
    <div class="row">
      <hr>
      <h6>© 2024 by LACANDOLA & MALALA</h6>
    </div>
</div>
</body>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Pinyon+Script&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Poppins&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Pinyon+Script&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Poppins&display=swap');
html, body{ height:100% 
} 



.heading-2{
  font-family: "Pinyon Script", cursive;
  font-size: 3.5rem;
  color: black;
  margin-left:270px;
  margin-top: -50px;
}
.heading-3{
  font-family: "Playfair Display", serif;
  font-size: 3rem;
  color: black;
  margin-top: 30px;
  margin-left: 90px;
}

.content{
font-family: "Poppins", serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: -30px;
}
.content .left-side{
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  position: relative;
}
.content .left-side::before{
  content: '';
  position: absolute;
  height: 70%;
  width: 2px;
  right: -15px;
  top: 50%;
  transform: translateY(-50%);
  background: #afafb6;
}


.content .right-side .details{
  margin: 14px;
  text-align: center;
}
.content .left-side .details i{
  font-size: 30px;
  color: black;
  margin-bottom: 10px;
}
.content .left-side .details .topic{
  font-size: 16px;
  font-weight: 500;
}
.content .right-side .details .text-one,
.content .right-side .details .text-two{
  font-size: 12px;
  color: #afafb6;
}
.content .right-side{
  width: 100%;
  margin-left: 80px;
}
.content .right-side .topic-text{
  font-size: 18px;
  font-weight: 600;
  color: black;
}
.right-side .input-box{
  height: 50px;
  width: 90%;
  margin: 12px 0;
}
.right-side .input-box input,
.right-side .input-box textarea{
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
  font-size: 14px;
  background: white;
  border-radius: 6px;
  padding: 0 15px;
  resize: none;
}
.right-side .message-box{
  min-height: 110px;
}
.right-side .input-box textarea{
  padding-top: 6px;
}
.right-side .button{
  display: inline-block;
  margin-top: 12px;
}
.right-side .button input[type="button"]{
  color: #fff;
  font-size: 14px;
  outline: none;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  background: black;
  cursor: pointer;
  transition: all 0.3s ease;
}
.button input[type="button"]:hover{
  background: #951e1e;
}
.bella {
  width: 60%;
  height: 50%;
   margin-left: 5%;
}
.content .left-side{
   width: 100%;
   flex-direction: row;
   margin-top: 40px;
   justify-content: center;
   flex-wrap: wrap;
 }
.content .left-side::before{
   display: none;
 }
.content .right-side{
   width: 100%;
   margin-left: 0;
 }
/*STYLE FOR FOOTER*/
.row h6{
  width:100%;
  margin:1% 0%;
  padding:0.6% 0%;
  color:#000000;
  font-size:1rem;
  font-family: "Poppins", sans-serif;
}

.footer{
background:transparent;
margin-top: 150px;
text-align:center;
}

</style>
