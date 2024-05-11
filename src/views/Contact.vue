<script setup>
import { ref, onMounted} from 'vue'
import emailjs from 'emailjs-com'
import Swal from 'sweetalert2'

const serviceID = 'service_7iczfdu'; 
const templateID = 'template_im9t6ht'; 
const userID = 'ArcD3va3jPKwE6JLB'; 

const sendForm = (e) => {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);
  const params = {
    from_name: formData.get('name'),
    from_email: formData.get('email'),
    message: formData.get('message'),
  };

  emailjs.send(serviceID, templateID, params, userID)
   .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      form.reset(); // Clear the form fields
      
      Swal.fire({
      title: "Message sent",
      text: "Thank you for messaging us!",
      icon: "success",
      confirmButtonColor: "#951e1e",
        customClass: {
        title: 'poppins-title',
        content: 'poppins-content'
        }

});

    })
   .catch((err) => {
      console.log('FAILED...', err);
    });
}


const isVisible = ref(false);
let previousScrollPosition = 0;

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

const handleScroll = () => {
  const wholePageContainer = document.querySelector('.whole-page-container');
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;
  const containerTop = wholePageContainer.offsetTop;

  if (scrollPosition + windowHeight > containerTop) {
    if (!isVisible.value) {
      isVisible.value = true;
    }
  } else {
    if (isVisible.value) {
      isVisible.value = false;
    }
  }

  previousScrollPosition = scrollPosition;

};

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

        <form @submit="sendForm">
          <div class="input-box">
            <input type="text" 
            v-model="name"
            name="name"
            placeholder="Name"
            required minlength="3">
            
          </div>
          
          <div class="input-box">
            <input type="email" 
            v-model="email"
            name="email"
            placeholder="E-mail"
            required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$">
          </div>
        
            <div class="input-box message-box">
              <textarea name="message"
              v-model="message"
              placeholder="Message" required></textarea>
          </div>
        
            <div class="button">
              <input type="submit" value="Send" >
          </div>
        </form>
        </div>
        <br>
      </div>
      <br>

      <div class="whole-page-container" :class="{ animate: isVisible }">
        <div class="flower"> <img src="../images/flower.png" /> </div> 

        <h3 class="heading-4">head office</h3>
      <br>
        <h5 class="heading-5">Quezon City, Manila, Philippines</h5>
        <h5 class="heading-5">+63 9671909680</h5>
        <h5 class="heading-5">teamprojectctrl@gmail.com</h5>

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
  margin-left:310px;
  margin-top: -50px;
}
.heading-3{
  font-family: "Playfair Display", serif;
  font-size: 3rem;
  color: black;
  margin-top: 65px;
  margin-left: 135px;
}

.content{
font-family: "Poppins", serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: -40px;
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
  font-family: "Poppins", sans-serif;
  height: 100%;
  width: 100%;
  border: 1px solid black;
  font-size: 14px;
  background: white;
  border-radius: 6px;
  padding: 0 15px;
  resize: none;


}
.input-box.message-box textarea {
  font-family: "Poppins", sans-serif;
  font-size: 14px;
}
.right-side .message-box{
  min-height: 110px;
}
.right-side .input-box textarea{
  padding-top: 6px;
  resize: vertical;
  white-space: pre-wrap;
  word-wrap: break-word;
}
.right-side .button{
  display: inline-block;
  margin-top: 12px;
}
.right-side .button input[type="submit"]{
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
.button input[type="submit"]:hover{
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

 .whole-page-container {
    background-color: #951e1e;
    height: 100vh;
    width: 100%;
    position: relative;
    transform: translateY(100%);
  }

 .animate {
    animation: slideUp 1.5s forwards;
  }

  @keyframes slideUp {
    0% {
      transform: translateY(50%);
    }
    100% {
      transform: translateY(0);
    }
  }

.heading-4 {
  font-family: "Playfair Display", serif;
  justify-content: center;
  text-align: center;
  font-size: 2.8rem;
  font-weight: 600;
  color: white;
  display: flex;
  align-items: center;
}

.heading-5 {
  font-family: "Poppins", serif;
  justify-content: center;
  text-align: center;
  font-size: 1rem;
  font-weight: 400;
  color: white;
  display: flex;
  align-items: center;
}

.flower {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 150px; /* adjust the size to your liking */
  height:450px; /* adjust the size to your liking */
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
text-align:center;
}

/*sweetalert2*/
.poppins-title {
  font-family: 'Poppins', sans-serif;
  color: black !important;
}

.poppins-content {
  font-family: 'Poppins', sans-serif;
  color: black !important;
}

</style>
