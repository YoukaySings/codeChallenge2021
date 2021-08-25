// const hamburger1 = document.querySelector(".hamburger1");
// const mobileNav = document.querySelector(".mobileNav");


// hamburger1.addEventListener('click');

const hamburger = document.getElementById("hamburger");
const mobileNav = document.getElementById("mobileNav");
const lis = document.getElementById("lis");

hamburger.addEventListener('click', function() {
  if (mobileNav.style.height == '0px'){
    mobileNav.style.height = '250px';
  } else (mobileNav.style.height = '0px')
})

/*function ab() {
    document.getElementById('mobileNav').style.height = "250px";
    document.getElementById('mobileNav').style.overflow = "visible";
    document.getElementById('hamburger2').style.display = "block";
    document.getElementById('hamburger1').style.display = "none";
}

function cl() {
    document.getElementById('mobileNav').style.height = "0px";
    document.getElementById('mobileNav').style.overflow = "hidden";
    document.getElementById('hamburger1').style.display = "block";
    document.getElementById('hamburger2').style.display = "none";
}*/

// const lm = document.querySelector('.learnMore');
// const lmh = document.querySelector('.learnMoreHover');

// lm.addEventListener('mouseenter', function(){
//     lmh.style.visibility = "visible";
// })

// lm.addEventListener('mouseleave', function(){
//     lmh.style.visibility = "hidden";
// })


// mobileNav.style.height = "0px";
// mobileNav.style.overflow = "hidden";

// hamburger1.addEventListener('click', () => {
//     if(hamburger1.classList.contains('hamburger1')){
//         hamburger2.classList.add('active');
//         hamburger1.classList.remove('active');
//         mobileNav.classList.add('active');
//     }
// })

// hamburger2.addEventListener('click', () => {
//     if(hamburger2.classList.contains('hamburger2')){
//         hamburger1.classList.add('active');
//         hamburger2.classList.remove('active');
//         mobileNav.classList.remove('active');
//     }
// })