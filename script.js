// typing animation

var typed=new Typed(".typing",{
strings:["Rimjhim Chowdhury","a Web Developer","a CS Student"],
typeSpeed:100,
backSpeed:60,
loop:true
});


// scroll reveal animation

window.addEventListener('scroll', reveal);

function reveal(){

var reveals=document.querySelectorAll('.reveal');

for(var i=0;i<reveals.length;i++){

var windowHeight=window.innerHeight;

var elementTop=reveals[i].getBoundingClientRect().top;

var elementVisible=150;

if(elementTop < windowHeight - elementVisible){

reveals[i].classList.add('active');

}

}

}


// GOOGLE SHEET FORM

const scriptURL = 'https://script.google.com/macros/s/AKfycbxd8XZLpd2ZoSIIRXSuXkgJQGZhnWM6JrbRVy2V5TgmlnFx29pQEw2T3ZCboBlWzHS_Ww/exec'

const form = document.forms['submit-to-google-sheet']

const msg = document.getElementById("msg")

form.addEventListener('submit', e => {

e.preventDefault()

fetch(scriptURL, { method: 'POST', body: new FormData(form)})

.then(response => {

msg.innerHTML="Message Sent Successfully!"

setTimeout(function(){
msg.innerHTML=""
},5000)

form.reset()

alert("Message Sent Successfully!")

})

.catch(error => console.error('Error!', error.message))

})
var tablinks=document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName("tab-contents");

function opentab(tabname){

for(tablink of tablinks){
tablink.classList.remove("active-link");
}

for(tabcontent of tabcontents){
tabcontent.classList.remove("active-tab");
}

event.currentTarget.classList.add("active-link");
document.getElementById(tabname).classList.add("active-tab");

}