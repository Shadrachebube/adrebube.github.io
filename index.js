var send = document.querySelector("#send");
send.addEventListener("submit", ()=>{
document.querySelector(".name").value = "";
document.querySelector(".email").value = "";
document.querySelector(".phone").value = "";
document.querySelector(".message").value = "";
})

window.addEventListener("load", ()=>{
    document.querySelector(".name").value = "";
document.querySelector(".email").value = "";
document.querySelector(".phone").value = "";
document.querySelector(".message").value = "";
document.querySelector("#preloader").style.display = "none";
document.querySelector("#preloader h3").style.display = "none";
})
const menubtn = document.querySelector("#open-menu-btn");
const closebtn = document.querySelector("#close-menu-btn");
const menu = document.querySelector(".nav__menu");

menubtn.addEventListener("click", ()=>{
    menu.style.display ="block";
    closebtn.style.display = "inline-block";
    menubtn.style.display = "none";
})

closebtn.addEventListener("click", ()=>{
    menu.style.display ="none";
    closebtn.style.display = "none";
    menubtn.style.display = "block";
})

if(window.innerWidth < 1024){
    document.querySelectorAll(".nav__menu li a").forEach(navItem=>{
        navItem.addEventListener("click", ()=>{
            menu.style.display ="none";
            closebtn.style.display = "none";
            menubtn.style.display = "block";
        })
    })
}


window.addEventListener("scroll", ()=>{
    document.querySelector("nav").classList.toggle("window-scroll", window.scrollY > 0)
    document.querySelector("header").classList.toggle("window-scrolls", window.scrollY > 0)
    document.querySelector("div").classList.toggle("window", window.scrollY > 0)

})
 const fetchTestimonials = () => {
    let testimonialsContainer = document.querySelector(".testimonials__container");
   testimonialsContainer.innerHTML ="";

   testimonials.forEach(testimonial => {
    const newTestimonial = document.createElement("article");
    newTestimonial.className = "testimonial";
    newTestimonial.classList.add("swiper-slide");
    newTestimonial.innerHTML = `
    
    <p>
   '${testimonial.quote}'  
  </p>
  <div class="testimonial__client">
    <span class="avatar">
      <img src="./images/${testimonial.avatar}.jpg">
    </span>
    <div class="testimonial__work">
     <p> <b>${testimonial.name}</b></p>
      <small>${testimonial.title}</small>
    </div>
  </div>
    
    `
    testimonialsContainer.append(newTestimonial);
   })
 } 

 window.addEventListener("load", fetchTestimonials);

 var ebu = 1;
setInterval(() => {
  document.querySelectorAll(".btb" + ebu).checked = true;
  ebu++;

  if (ebu > 6) {
    ebu = 1;
  }
},5000);

 var swiper = new Swiper(".mySwiper", {
  
  slidesPerView: 1,
  grabCursor:true, 
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


//  const swiper = new Swiper('.swiper', {
//   // Optional parameters
//   direction: 'horizontal',
//   loop: true,

//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
// });
